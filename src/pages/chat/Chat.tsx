import { ChangeEvent, useEffect, useState } from 'react';
import { sendMessage } from '../../api/send';
import { receiveMessage } from '../../api/receive';
import { deleteNotification } from '../../api/delete';
import { Button, TextField } from '@mui/material';
import { LocalMessageType, MessageType } from '../../types';
import ChatAside from '../../components/chatAside/ChatAside';
import MessagesHeader from '../../components/messagesHeader/MessagesHeader';
import { MessagesList } from '../../components/messagesList/MessagesList';
import { SendMessageForm } from '../../components/sendMessageForm/SendMessageForm';

import styles from './Chat.module.css';

const checkPhone = /^[0-9]{11,}$/;

type SendResponseType = {
  idMessage: string;
};

const Chat = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState<LocalMessageType[]>([]);
  const [dialogs, setDialogs] = useState<string[]>([]);
  const instance = JSON.parse(localStorage.getItem('instance') as string);
  const token = JSON.parse(localStorage.getItem('token') as string);

  const createDialog = () => {
    if (!checkPhone.test(phone)) {
      setError('Invalid phone number');
    } else {
      setDialogs((prevState) => [...prevState, phone]);
      setError('');
    }
  };

  const handleMessage = () => {
    sendMessage(phone, message, instance, token).then(
      (response: SendResponseType) => {
        const newMessage = { id: response.idMessage, sent: true, message };
        setMessagesList([...messagesList, newMessage]);
      }
    );
    setMessage('');
  };

  const handleReceiveMessage = () => {
    receiveMessage(instance, token).then((response: MessageType) => {
      if (response) {
        deleteNotification(response.receiptId, instance, token).then(() => {
          if (response) {
            handleReceiveMessage();
          }
        });
        setMessagesList((prevState) => {
          if (
            !prevState.some((message) => message.id === response.body.idMessage)
          ) {
            const newMessage = {
              id: response.body.idMessage,
              message: response.body.messageData.textMessageData.textMessage,
            };
            return [...prevState, newMessage];
          }
          return prevState;
        });
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleReceiveMessage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.wrapper}>
      <ChatAside dialogs={dialogs} />
      <div className={styles.rightBlock}>
        <div className={styles.creation}>
          <div>
            <TextField
              label="Enter phone"
              value={phone}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setPhone(event.target.value);
              }}
            />
            <div className={styles.error}>{error ?? ''}</div>
          </div>
          <div>
            <Button
              onClick={createDialog}
              variant="contained"
              disabled={!phone}
            >
              create dialog
            </Button>
          </div>
        </div>
        {!!dialogs.length && (
          <div>
            <MessagesHeader userName={phone} />
            <MessagesList messages={messagesList} />
            <SendMessageForm
              sendMessage={handleMessage}
              message={message}
              setMessage={setMessage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
