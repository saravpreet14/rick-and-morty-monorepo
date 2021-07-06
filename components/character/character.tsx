import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./MyCharacter.module.css";
import { useQuery, gql } from "@apollo/client";
import Spinner from "../../components/spinner/spinner";
import { Button } from "@material-ui/core";
import Error from "../error/error";

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
    }[];
  };
  loading?: boolean;
  error?: any;
}

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
        image
      }
    }
  `;
  const responseData: dataFromApi = useQuery(Character_data, {
    variables: { ids: id },
  });
  const { loading, error, data } = responseData;
  if (loading) return <Spinner />;
  if (error) return <Error />;

  const { name, image, gender, location, origin, species, status } =
    data.charactersByIds[0];
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.profile}>
          <div className={styles.profile_image}>
            <Image src={image} alt={name} width="300" height="300" />
          </div>
          <div className={styles.profile_details}>
            <h2 className={styles.character_details}>Character Details</h2>
            <div>
              <strong>Name:</strong> {name}
            </div>
            <div>
              <strong>Status:</strong> {status}
            </div>
            <div>
              <strong>Gender:</strong> {gender}
            </div>
            <div>
              <strong>Species:</strong> {species}
            </div>
            <div>
              <strong>Location:</strong> {location.name}
            </div>
            <div>
              <strong>Originally From:</strong> {origin.name}
            </div>
          </div>
        </div>
        <br />
        <br />

        <Link passHref href="/">
          <Button variant="contained" color="primary" size="large">
            <strong>Back</strong>
          </Button>
        </Link>
      </main>
    </div>
  );
}
