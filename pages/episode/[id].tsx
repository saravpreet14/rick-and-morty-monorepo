// import Character from "../../components/character/character";
// import { signIn, signOut, useSession } from "next-auth/client";
// import Navbar from "../../components/navbar/navbar";
// import { GetServerSideProps } from "next";
// import Widgets from '../../components/widgets/widgets';
// import Episodes from '../../components/episodes/episodes';
// import styles from '../../styles/Home.module.css';

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   return {
//     props: {
//       params,
//     },
//   };
// };

// export default function MyEpisode({
//   params,
// }: {
//   params: {
//     id: string;
//   };
// }) {
//   console.log("MyEpisode",params);
  
//   return (
//     <Navbar >
//       <div className={styles.partition} >
//         <Episodes selected={params.id} placeholder="Search Episode Name"/>
//         <Widgets {...{ params }} />
//       </div>
//     </Navbar>
//   );
// }

import Widgets from '../../components/widgets/widgets';
import Navbar from "../../components/navbar/navbar";
import { useRouter } from 'next/router';
import Episodes from '../../components/episodes/episodes';
import styles from '../../styles/Home.module.css';

export default function MyCharacter(props) {
  const router = useRouter()
  let id:string;
  if(typeof router.query.id === 'string') id = router.query.id;
  if(!id) id = '1';

  return (
    <Navbar>
      <Episodes selected={id} placeholder="Search Episode Name"/>
      <Widgets params={{id: id}} />
    </Navbar>
  );
}
