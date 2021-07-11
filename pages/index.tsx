import Home from "../components/home/home";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from 'react';
import Navbar from "../components/navbar/navbar";
import Episodes from '../components/episodes/episodes';
import Widgets from '../components/widgets/widgets';
import styles from '../styles/Home.module.css';

let staticEpisodeData = null;

export default function SignInPage() {
  const [session, loading] = useSession();

  var authFunction;
  if (session) authFunction = signOut;
  else authFunction = signIn;

  const [episodeData, setEpisode] = useState(staticEpisodeData);




  return (
    <>
      <Navbar auth={() => authFunction()} isAuth={session ? true : false}>      
        <div 
          className={styles.partition}
        >
          <Episodes select={(data) => {staticEpisodeData=data; setEpisode(data);}} selected={episodeData ? episodeData.id : null} />
          {episodeData ? <Widgets data={episodeData} back={() => {staticEpisodeData=null; setEpisode(null);}} /> : <Home imageSize={{width: 300, height: 300}} buttonSize="large" isWidget={false} />}
        </div>
      </Navbar>
    </>
  );
}
