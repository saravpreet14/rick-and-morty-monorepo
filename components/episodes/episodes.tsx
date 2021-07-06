import Widgets from '../widgets/widgets';
import { useState } from 'react';
import styles from './episodes.module.css';

export default function episodes(props) {
    const episodesData = [
        {
          "id": "1",
          "name": "Pilot",
          "air_date": "December 2, 2013",
          "episode": "S01E01",
          "created": "2017-11-10T12:56:33.798Z",
          "characters": [
            {
              "id": "1",
              "name": "Rick Sanchez"
            },
            {
              "id": "2",
              "name": "Morty Smith"
            },
            {
              "id": "35",
              "name": "Bepisian"
            },
            {
              "id": "38",
              "name": "Beth Smith"
            },
            {
              "id": "62",
              "name": "Canklanker Thom"
            },
            {
              "id": "92",
              "name": "Davin"
            },
            {
              "id": "127",
              "name": "Frank Palicky"
            },
            {
              "id": "144",
              "name": "Glenn"
            },
            {
              "id": "158",
              "name": "Hookah Alien"
            },
            {
              "id": "175",
              "name": "Jerry Smith"
            },
            {
              "id": "179",
              "name": "Jessica"
            },
            {
              "id": "181",
              "name": "Jessica's Friend"
            },
            {
              "id": "239",
              "name": "Mr. Goldenfold"
            },
            {
              "id": "249",
              "name": "Mrs. Sanchez"
            },
            {
              "id": "271",
              "name": "Principal Vagina"
            },
            {
              "id": "338",
              "name": "Summer Smith"
            },
            {
              "id": "394",
              "name": "Davin"
            },
            {
              "id": "395",
              "name": "Greebybobe"
            },
            {
              "id": "435",
              "name": "Pripudlian"
            }
          ]
        }
    ]

    const [selectedEpisode, setEpisode] = useState(null);

    console.log(selectedEpisode)

    return (
        <div className={styles.main}>
            <br/><br/><br/><br/><br/><br/>
            {episodesData.map(episode => {
                return (
                    <div className={styles.listElement} onClick={() => setEpisode(Number(episode.id) - 1)} key={episode.id}>
                        {`${episode.name} - ${episode.episode}`}
                    </div>
                )
            })}
            { selectedEpisode !== null ? <Widgets data={episodesData[selectedEpisode]} close={() => setEpisode(null)} /> : null }
        </div>
    );
}