import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, IconButton } from '@mui/material';

import styles from './MessagesHeader.module.css';

type Props = {
  friendAvatar?: string;
  userName?: string;
  lastUserActivityDate?: string;
  userId?: number;
};

const MessagesHeader: FC<Props> = ({ userName }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Avatar alt={userName} />
        <h5>{userName}</h5>
      </div>
      <div className={styles.rightBlock}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default MessagesHeader;
