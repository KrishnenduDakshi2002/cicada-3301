'use client';
import React, { useState } from 'react';

import HoverButton from '@/app/_global_components/HoverButton';
import CustomInput from '@/app/_global_components/input';
import HoverLink from '@/app/_global_components/Link';

import styles from './styles.module.scss';

function Login() {
  const [teamName, setTeamName] = useState('');
  const [espektroId, setEspektroId] = useState('');
  return (
    <form className={styles.loginForm} onSubmit={() => {}}>
      <div>
        <CustomInput
          placeholder="Team ID"
          onChange={(e) => setTeamName(e.target.value)}
        />
        <CustomInput
          placeholder="Espektro ID"
          onChange={(e) => setEspektroId(e.target.value.toUpperCase())}
        />
      </div>

      <div className={styles.buttonContainer}>
        <HoverLink className={styles.button} href="/auth/register">
          Create Team
        </HoverLink>
        <HoverButton
          className={styles.button}
          onClick={() => {
            console.log({
              teamName,
              espektroId,
            });
          }}
        >
          Login
        </HoverButton>
      </div>
    </form>
  );
}

export default Login;