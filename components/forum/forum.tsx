import getForumData from "./mock_api";
import React, { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/client";
import {
  makeStyles,
  IconButton,
  Button,
  TextField,
  TextFieldClassKey,
} from "@material-ui/core";


var current_data = [];
function assignData(data:{user:string,msg:string}[]){
  current_data = data;
}

export default function Forum(props) {
  if(current_data==[]){
  getForumData().then((data) => {
    assignData(data);
  })}
  const [data, setData] = useState(current_data);
  useEffect(()=>{
    console.log("here");
    setData(current_data);},[current_data]
  );
  const [current_msg,setMsg] = useState("");
  // console.log("data",data);
  const [session, loading] = useSession();
  // console.log(session);

  const styles = makeStyles((theme) => ({
    root: {
      display: "grid",
      gridTemplateColumns:"1fr"
    },
    comment_box:{
      margin:"5px"
    },
    button:{
      margin:"5px",
      position:"relative",
      right:"-20px",
      maxWidth:"fit-content"
    },
    container:{
      borderRadius:"5px",
      border:"solid",
      borderWidth:"2px",
      padding:"4px",
      margin:"5px"
    },
    user:{
      borderWidth:"0.001px !important",
      borderBottom:"solid",
      width:"fit-content",
    },


  }));
  const classes = styles();
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMsg(event.target.value);
  }
  function Addcomment(){
      console.log(current_msg);
      if(current_msg!="") {
        setData([...data,{user:session.user.name,msg:current_msg}]);
        // console.log([...data,{user:session.user.name,msg:current_msg}]);
      }
      // console.log(data);   
  }

  return <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={Addcomment}
      >
       
        <TextField
        
          label="Add a comment"
          id="outlined-size-normal"
          variant="outlined"
          style={{ width: "15rem" }}
          placeholder="Add a comment"
          // value={props.value}
          onChange={handleChange}
        />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="small"
            // size={props.buttonSize}
            onClick={Addcomment}
          >
            Comment
          </Button>
      </form>
      {data.map((user_data,index) => (
            <div className={classes.container} key={index}>
              <div className={classes.user}>
                {user_data.user}
              </div>
              <div>
                {user_data.msg}
              </div>
            </div>
      ))}
        </>;
}
