import styles from './widgets.module.css';
import { useQuery, gql } from "@apollo/client";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

export default function Widgets(props) {
    const Episodes_data = gql`
      query EpisodeQuery($ids: [ID!]!){
        episodesByIds(ids:$ids) {
              id, name, air_date, episode, created, characters{id, name}
        },
      }
    `;

  const ids:number[] = Array.from({length: 41}, (_, i) => i + 1)
  // console.log(ids)
  const { loading, error, data } = useQuery(Episodes_data, {
    variables: {
        ids: ids,
      },
    errorPolicy: "ignore",
  });

  if (loading) return <Spinner />;
  if (error) return <Error />;
  // console.log(data);
    
    return (
        <>
            <div className={styles.main} onClick={() => console.log('background')}></div>
            {/* <div className={styles.grid}> */}
                <div className={[styles.fixed, styles.cell1].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell2].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell3].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell4].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell5].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell6].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
            {/* </div> */}
        </>
    );
}