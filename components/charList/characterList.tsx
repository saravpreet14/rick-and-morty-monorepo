import Link from "next/link";
import Image from "next/image";
import { GridList, GridListTile, GridListTileBar, StylesProvider } from "@material-ui/core";
import styles from './characterList.module.css';
import Widgets from "../widgets/widgets";

export default function TitlebarGridList(props: {
  characters: {
    id: string;
    name: string;
    image: string;
  }[];
  imageSize: {
    width: number;
    height: number;
  };
  isWidget: boolean;
}) {
    return (
        <div className={styles.main} >
            {/* <Link href='/characters'><a>Here</a></Link> */}
            {props.characters.map(character => (
                <Link href={`/character/${character.name.replace(' ', '')}-${character.id}`} key={character.id} passHref >
                    <div className={styles.card} key={character.id} style={props.isWidget ? {maxWidth: '100px', margin: '0.6rem'} : null} >
                        <div className={styles.image} >
                            <Image width='300' height='300' src={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`} alt={character.name} />
                        </div>
                        <div className={styles.name} style={{fontSize: props.isWidget ? '0.7rem' : ''}} >{character.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}