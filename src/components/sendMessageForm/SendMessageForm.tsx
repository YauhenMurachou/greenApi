import { Dispatch, FC, SetStateAction } from 'react';
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import SendIcon from '@mui/icons-material/Send';

import styles from './SendMessageForm.module.css';

type Props = {
  sendMessage: () => void;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
};

export const SendMessageForm: FC<Props> = ({
  sendMessage,
  message,
  setMessage,
}) => {
  return (
    <div className={styles.addMessageForm}>
      <OutlinedInput
        placeholder="Enter your message"
        multiline
        maxRows={4}
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        fullWidth
        autoFocus
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <TagFacesIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <Button
        onClick={sendMessage}
        disabled={!message.trim().length}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>
  );
};
