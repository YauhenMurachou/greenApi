import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { sendAuthData } from '../../api/login';
import { LoginType } from 'src/types';

import styles from './Login.module.css';

const Login: FC = () => {
  const href = useNavigate();

  const handleLogin = (values: LoginType) => {
    sendAuthData(values).then((response) => {
      if (response === 200) {
        localStorage.setItem('isAuth', JSON.stringify(true));
        href('/chat');
      } else {
        console.error('error', response);
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.loginForm}>
          <h1 className={styles.title}>Account login</h1>
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
