import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Image from 'next/image';
import { useState } from 'react';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { isAuth, logout } from '../../lib/auth';

export default function navbar(props) {
  const Router = useRouter();
  const [auth, setAuth] = useState(false); 
  isAuth().then(isValid => {
    if(isValid) setAuth(true);
    else if(Router.pathname !== '/auth') Router.push('/auth');
  });

  return (
    <div className={styles.main} >
      {/* <AppBar> */}
        {/* <Toolbar>
          <span
            className={styles.siteName}
            onClick={() => {
              if(Router.pathname === "/home") Router.reload();
              else Router.push("/home");
            }}
          >
            Rick and Morty
          </span>
          <span className={styles.authButton} onClick={() => auth ? logout().then(() => Router.push('/auth')) : Router.push('/auth')} >
            {auth ? "Logout" : "Sign In"}
          </span>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      {auth ? props.children : null} */}
      <div className={styles.head} >
        <div className={styles.icon} onClick={() => {
          if(Router.pathname === '/') Router.reload();
          else Router.push('/');
        }} >
          <Image src='/rickMorty.svg' width='70' height='70' />
        </div>
        {auth ? (
          <span className={styles.logout} onClick={() => logout().then(() => Router.push('/auth'))} >
            <Image src='/logout.svg' width='70' height='70' layout='responsive' />
          </span>
        ) : null}
      </div>
      <div className={styles.body} >{auth || Router.pathname === '/auth' ? props.children : null }</div>
    </div>
  );
}
