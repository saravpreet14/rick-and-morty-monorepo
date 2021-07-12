import styles from "./navbar.module.css";
import Router from "next/router";
import { CssBaseline, AppBar, Toolbar } from "@material-ui/core";

export default function navbar(props) {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <p className={styles.siteName} onClick={() => {
              if (Router.pathname === "/") Router.reload();
              else Router.push("/");
            }}>
            Rick and Morty
          </p>
          <p className={styles.authButton} onClick={props.auth}>
            {props.isAuth ? "Logout" : "Sign In"}
          </p>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      {props.isAuth ? (
        props.children
      ) : (
        <>
          <br />
          <br />
          <br />
          <h1 className={styles.signInMessage}>Sign In to continue</h1>
        </>
      )}
    </>
  );
}
