import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Image from 'next/image';
import React, { useState } from 'react';
import { isAuth, logout } from '../../lib/auth';
import Link from 'next/link';

export default function Navbar(props) {
  const Router = useRouter();
  const [auth, setAuth] = useState(false); 
  // if(typeof window !== 'undefined') return <></>;
  isAuth().then(isValid => {
    if(isValid) setAuth(true);
    else if(Router.pathname !== '/auth') Router.push('/auth');
  });

  return (
    <div className={styles.main} >
      <div className={styles.head} >
        <div className={styles.icon} onClick={() => {
          if(Router.pathname === '/') Router.reload();
          else Router.push('/');
        }} >
          <Image src='/rickMorty.svg' width='70' height='70' />
        </div>
        {console.log(Router.pathname)}
        {auth ? (<span className={styles.navigation} >
          <Link href='/characters' passHref >
            <span className={[styles.navlink, Router.pathname.indexOf('character') !== -1 ? styles.active : null].join(' ')} >Characters</span>
          </Link>
          <Link href='/episode/1' passHref >
            <span className={[styles.navlink, Router.pathname.indexOf('episode') !== -1 ? styles.active : null].join(' ')} >Episodes</span>
          </Link>
        </span>): null}
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
