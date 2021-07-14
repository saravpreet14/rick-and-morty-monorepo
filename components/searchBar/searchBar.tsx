import {
  IconButton,
  Paper,
  InputBase,
} from "@material-ui/core";
import { Search, ArrowBackIosRounded } from "@material-ui/icons";
import React from "react";
import customStyles from './search.module.css';

export default function SearchBar(props: {
  search: (event: React.FormEvent<HTMLDivElement>) => void,
  value: string,
  change: (string) => void,
  isEpisode?: boolean
}) {

  return (
    <div className={customStyles.body} >
      <IconButton onClick={() => window.history.back() } className={customStyles.iconBack} style={{backgroundColor: 'white', borderRadius: '2px', padding: '2px'}} aria-label="menu">
        <ArrowBackIosRounded />Back
      </IconButton>
      <Paper component="form" className={customStyles.main} onSubmit={props.search} >
        <InputBase
          className={customStyles.searchArea}
          placeholder="Search"
          onChange={(event) => props.change(event.target.value)}
          value={props.value}
        />
        <IconButton type="submit" aria-label="search">
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
}
