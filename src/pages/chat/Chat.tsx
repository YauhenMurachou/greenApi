import { ChangeEvent, useEffect, useState } from 'react';
import { sendMessage } from '../../api/send';
import { deleteNotification, receiveMessage } from '../../api/receive';
import { TextField } from '@mui/material';
import { MessageType } from '../../types';

import styles from './Chat.module.css';

const regex = /^[0-9]{11,}$/;

const Chat = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState<string[]>([]);
  const [dialog, setDialog] = useState(false);
  const instance = JSON.parse(localStorage.getItem('instance') as string);
  const token = JSON.parse(localStorage.getItem('token') as string);

  const createDialog = () => {
    if (!regex.test(phone)) {
      setError('Invalid phone number');
    } else {
      setDialog(true);
      setError('');
    }
  };

  const handleMessage = () => {
    sendMessage(phone, message, instance, token).then(() =>
      setMessagesList([...messagesList, message])
    );
    setMessage('');
  };

  const handleReceiveMessage = () => {
    receiveMessage().then((response: MessageType) => {
      if (response) {
        deleteNotification(response.receiptId).then(() => {
          if (response) {
            handleReceiveMessage();
          }
        });
        setMessagesList((prevState) => {
          if (!prevState.includes(response.body.idMessage)) {
            return [...prevState, response.body.idMessage];
          }
          return prevState;
        });
        //
      }
    });
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     handleReceiveMessage();
  //   }, 5000); // fetch messages every 5 seconds

  //   return () => clearInterval(intervalId); // cleanup function to clear interval
  // }, []);

  return (
    <>
      WhatsApp messages
      <div>
        <TextField
          label="Enter phone"
          value={phone}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPhone(event.target.value);
          }}
        />
        {!!error && <div className={styles.error}>{error}</div>}
      </div>
      <div>
        <button onClick={createDialog}>create dialog</button>
      </div>
      {dialog && (
        <div>
          <TextField
            label="Message"
            placeholder="Enter your message"
            value={message}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setMessage(event.target.value);
            }}
          />
          <div>
            <button onClick={handleMessage}>send message</button>
          </div>
        </div>
      )}
      <h4>messages:</h4>
      <ul>
        {messagesList.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <div>
        <button onClick={handleReceiveMessage}>receive message</button>
      </div>
    </>
  );
};

export default Chat;
