import { sendMessage } from '../../api/send';
import { receiveMessage } from '../../api/receive';

const Chat = () => {
  return (
    <>
      WhatsApp messages
      <button onClick={sendMessage}>send message</button>
      <button onClick={receiveMessage}>receive message</button>
    </>
  );
};

export default Chat;
