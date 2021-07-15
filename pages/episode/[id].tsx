import Character from "../../components/character/character";
import { signIn, signOut, useSession } from "next-auth/client";
import Navbar from "../../components/navbar/navbar";
import { GetServerSideProps } from "next";
import Widgets from '../../components/widgets/widgets';
import Episodes from '../../components/episodes/episodes';
import styles from '../../styles/Home.module.css';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};

export default function MyEpisode({
  params,
}: {
  params: {
    id: string;
  };
}) {
  console.log("MyEpisode",params);
  
  return (
    <Navbar >
      <div className={styles.partition} >
        <Episodes selected={params.id} placeholder="Search Episode Name"/>
        <Widgets {...{ params }} />
      </div>
    </Navbar>
  );
}
