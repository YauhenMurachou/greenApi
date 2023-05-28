import { FC, memo } from 'react';

import styles from './MessagesList.module.css';
import avatar from '../../assets/avatar.png';
import { LocalMessageType } from '../../types';
import { Avatar } from '@mui/material';

type Props = {
  messages: LocalMessageType[];
};

export const MessagesList: FC<Props> = memo(({ messages }) => {
  return (
    <div className={styles.messagesWrapper}>
      <ul>
        {messages.map(({ message, id, sent }) => (
          <li key={id} className={styles.message}>
            {sent ? (
              <img src={avatar} className={styles.avatar} alt={message} />
            ) : (
              <Avatar alt={message} />
            )}
            <span>{message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});
