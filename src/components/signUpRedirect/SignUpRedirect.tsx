import { FC } from 'react';
import { Tooltip } from '@mui/material';

import styles from './SignUpRedirect.module.css';

const SignUpRedirect: FC = () => {
  return (
    <div className={styles.redirect}>
      <span>Don't have an account?</span>
      <Tooltip
        title="You will be redirected to an external service for registration"
        arrow
        placement="bottom"
      >
        <a
          href="https://console.green-api.com/auth/register"
          className={styles.registration}
          target="_blank"
          rel="noreferrer"
        >
          Sign up
        </a>
      </Tooltip>
    </div>
  );
};

export default SignUpRedirect;
