import styles from './widgets.module.css';
import Link from 'next/link';
import Image from 'next/image'
import Home from '../home/home'
import { IconButton, CircularProgress } from '@material-ui/core';
import { ArrowBackIosRounded } from "@material-ui/icons";
import { useQuery, gql } from "@apollo/client";
import Error from '../error/error';
import Forum from "../forum/forum";
import CharacterList from '../charList/characterList';
import Skeleton from 'react-loading-skeleton';

export default function Widgets(props) {
    const params = props.params;
    const id = params.id;//.split("-").slice(-1)[0];

    const Episode_data = gql`
        query EpisodeById($ids: [ID!]!) {
            episodesByIds(ids: $ids) {
                id
                name
                episode
                created
                air_date
                characters {
                    id
                    name
                }
            }
        }
    `;
  const responseData = useQuery(Episode_data, {
    variables: { ids: id },
  });
  const { loading, error, data } = responseData;
//   if (loading) return <div className={styles.spinner} ><CircularProgress /></div>;
  if (error) return <Error />;

    let EpisodeData = null;
    if(!loading) EpisodeData = data.episodesByIds[0];
    
    return (
        <div className={styles.main}>
            {/* <div className={styles.sticky} >
                <IconButton onClick={() => window.history.back() } className={styles.iconBack} style={{backgroundColor: 'white', borderRadius: '2px', padding: '2px'}} aria-label="menu">
                    <ArrowBackIosRounded />Back
                </IconButton>
                <h1 className={styles.episodeName} >{loading ? <Skeleton count={1} height={50} /> : EpisodeData.name}</h1>
            </div> */}

            <div className={styles.grid}>
            {loading ? 
                <>
                    {[1, 2, 3, 4].map(t => (
                        <div className={styles.fixed} style={{borderWidth: '0'}} key={t} >
                            <Skeleton count={1} height={500} key={t} />
                        </div>
                    ))}
                </> :
                <>
                <div className={[styles.fixed, styles.cell1].join(' ')} >
                {/* {loading ? <Skeleton count={1} height={500} /> : (<> */}
                    <div className={styles.heading} >Basic Info</div>
                    <div className={styles.content} >
                        <p><strong>Name: </strong>{EpisodeData.name}</p>
                        <p><strong>Season: </strong>{Number(EpisodeData.episode.slice(1, 3))}</p>
                        <p><strong>Episode: </strong>{Number(EpisodeData.episode.slice(-2))}</p>
                        <p><strong>Air Date: </strong>{EpisodeData.air_date}</p>
                        <p><strong>Imdb Rating: </strong>{(8 + Math.random()*2).toFixed(1)}</p>
                    </div>
                </div>

                <div className={[styles.fixed].join(' ')} > 
                {/* {loading ? <Skeleton count={1} height={500} /> : (<> */}
                    <div className={styles.heading} >
                       Characters in the epsiode
                    </div>
                    <div className={styles.widgetContent} style={{overflowY: "scroll"}} >
                        <CharacterList characters={EpisodeData.characters} isWidget />
                    </div>
                {/* </>)} */}
                </div>
                
                <div className={[styles.fixed, styles.cell4].join(' ')} >
                    <Forum/>
                </div>

                <div className={[styles.fixed, styles.cell3].join(' ')} >
                    <div className={styles.heading} >Home</div>
                    <div className={styles.widgetContent}>
                        <Home imageSize={{width: 100, height: 100}} buttonSize="small" isWidget />
                    </div>
                </div>

            </>}
            </div> 

                
            {/* <div className={styles.backButton}> 
                <Link href='/' passHref>
                    <Button variant="contained" color="primary" size="large" onClick={props.back}>
                        <strong>Back</strong>
                    </Button>
                </Link>
            </div> */}
        </div>
    );
}