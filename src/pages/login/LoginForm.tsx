import { ChangeEvent, FC, useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LoginType } from 'src/types';

import styles from './Login.module.css';
import SignUpRedirect from '../../components/signUpRedirect/SignUpRedirect';

type Props = {
  onSubmit: (values: LoginType) => void;
};

const LoginForm: FC<Props> = ({ onSubmit }) => {
  const [instance, setInstance] = useState('');
  const [token, setToken] = useState('');

  return (
    <div>
      <div className={styles.field}>
        <TextField
          label="IdInstance"
          value={instance}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setInstance(event.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <TextField
          label="ApiTokenInstance"
          value={token}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setToken(event.target.value);
          }}
        />
      </div>
      <div className={styles.submit}>
        <Button
          variant="contained"
          onClick={() => onSubmit({ instance, token })}
          color="primary"
          type="submit"
          disabled={!instance.trim() || !token.trim()}
        >
          Login
        </Button>
      </div>
      <SignUpRedirect />
    </div>
  );
};

export default LoginForm;
