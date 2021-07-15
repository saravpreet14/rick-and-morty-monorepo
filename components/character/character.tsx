import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./MyCharacter.module.css";
import { useQuery, gql } from "@apollo/client";
import { IconButton,Button, CircularProgress } from "@material-ui/core";
import { ArrowBackIosRounded } from "@material-ui/icons";
import Error from "../error/error";
import { classicNameResolver } from "typescript";
import Episodes from "../episodes/episodes";

interface dataFromApi {
  data: {
    charactersByIds: {
      name: string;
      id: string;
      status: string;
      type: string;
      species: string;
      gender: string;
      origin: {
        name: string;
      };
      location: {
        name: string;
      };
      image: string;
      episode:{
        id:number;
        name:string;
        air_date:string;
        episode:string;
      }[];
    }[];
  };
  loading?: boolean;
  error?: any;
}

const colormap = {"Alive":"green","Dead":"red","unknown":"gray"};

export default function MyCharacter(props: { params: { id: string } }) {
  const params = props.params;
  const id = params.id.split("-").slice(-1)[0];

  const Character_data = gql`
    query CharacterByIdsQuery($ids: [ID!]!) {
      charactersByIds(ids: $ids) {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        episode{
          id,
          name,
          air_date,
          episode,
        }
        image
      }
    }
  `;
  const responseData: dataFromApi = useQuery(Character_data, {
    variables: { ids: id },
  });
  const { loading, error, data } = responseData;
  if (loading) {
    return <div className={styles.spinner} ><CircularProgress /></div>;
  }
  if (error) return <Error />;
  // console.log(data.charactersByIds[0]);
  const { name, image, gender, location, origin, species, status,episode } =
    data.charactersByIds[0];
  return (
    <div className={styles.top}>
      <div className={styles.iconDiv}>
        <IconButton onClick={() => window.history.back() } className={styles.iconBack} style={{backgroundColor: 'white', borderRadius: '2px', padding: '2px'}} aria-label="menu">
          <ArrowBackIosRounded />Back
        </IconButton>
      </div>
      <div className={styles.root} >
        <div className={styles.container1}>
          <div className={styles.profile_image}>
            <div className={styles.image}>
              <Image src={image} alt={name} width="300" height="300" />
            </div>
    {/* <div className={styles.mainBlock} >
      <IconButton onClick={() => window.history.back() } className={styles.iconBack} style={{backgroundColor: 'white', borderRadius: '2px', padding: '2px'}} aria-label="menu">
        <ArrowBackIosRounded />Back
      </IconButton>
    <div className={styles.root} >
      <div className={styles.container1}>
        <div className={styles.profile_image}>
          <Image src={image} alt={name} width="300" height="300" />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.info}>
          <div className={styles.heading_box}>
            <h2 className={styles.heading}>INFO</h2>
            <div className={styles.line}></div>
          </div>
          <div>
            {/* <div className={styles({status})}></div> /}
           <div>{`${status} - ${species}`}</div>
          </div> */}
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.info}>
            {/* <div className={styles.heading_box}>
              <h2 className={styles.heading}>INFO</h2>
              <div className={styles.line}></div>
            </div> */}
            <div {...{style:{display:"flex"}}} >
              <div {...{style:{borderRadius:"50%",border:"solid 5px",width:"10px",height:"10px",borderColor:colormap[status], margin: 'auto 0'}}}></div>
              <div>{`${status} - ${species}`}</div>
            </div>
            <div className={styles.section}>
              <div className={styles.sub_heading}>
                Last known location:
              </div>
              <div >
                {location.name}
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sub_heading}>
                First seen in:
              </div>
              <div>
                {origin.name}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.heading_box}>
          <h2 className={styles.heading}>FEATURED IN</h2>
          <div className={styles.line}></div>
        </div>
        {episode.map((episode) => (
          <Link href={`/episode/${episode.id}`} passHref key={episode.id} >
            <div key={episode.id} className={styles.episode}>
              <p className={styles.episode_name}>{`${episode.episode} - ${episode.name}`}</p>
              <p className={styles.date}>{episode.air_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
