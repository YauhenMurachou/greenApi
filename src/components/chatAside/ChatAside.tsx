import { FC } from 'react';

import styles from './ChatAside.module.css';

type Props = {
  dialogs: string[];
};

const ChatAside: FC<Props> = ({ dialogs }) => {
  return (
    <aside className={styles.wrapper}>
      <h4>List of chats</h4>
      <ul>
        {dialogs.map((dialog, index) => (
          <li key={index}>{dialog}</li>
        ))}
      </ul>
    </aside>
  );
};

export default ChatAside;
