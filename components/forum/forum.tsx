import {AddData,getForumData} from "./mock_api";
import React, { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/client";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  makeStyles,
  IconButton,
  Button,
  TextField,
  TextFieldClassKey,CssBaseline, AppBar, Toolbar 
} from "@material-ui/core";


var current_data = [];
var static_msg="";

const get_color:any = {"dhruv@123":"primary","aneree@123":"secondary","sprinklr@123":"inherit","sarav@123":"action","phani@123":"disabled"};


export  default function Forum(props) {
  // console.log(static_msg);
  const [data, setData] = useState([]);
  useEffect(()=>{
    // console.log("here");
    getForumData().then(data => setData(data));
  },[current_data]);

  const [current_msg,setMsg] = useState(static_msg);
  const [session, loading] = useSession();

  const styles = makeStyles((theme) => ({
    frame:{
      height:"100%",
      border:"solid",
      borderRadius:"10px",
      borderColor:"#2b5496 !important;",
      // position:"relative",
    },
    heading: {
      display:"grid",
      gridTemplateColumns:"auto",
      justifyContent:"space-around",
      fontSize: "1.5rem",
      fontFamily: "Papyrus, Sans Serif",
      backgroundColor:"#2b5496 !important;",
      color:"white",
      padding:"2px"
    },
    root: {
      display: "grid",
      gridTemplateColumns:"auto",
      justifyContent:"space-around",
      margin:"3px",
    },
    comment_box:{
      margin:"5px",
      width:"50px"
    },
    button:{
      margin:"5px",
      // position:"absolute",
      right:"-150px",
      // maxHeight:"20px",
      maxWidth:"fit-content"
    },
    discussion:{
      // borderRadius:"5px",
      // border:"solid",
      // borderWidth:"2px",
      display:"grid",
      gridTemplateColumns:"1fr",
      width:"90%",
      marginLeft:"5%",
      marginTop:"5px",
      overflow:"auto",
      height:"60%"
      // position:"absolute"
    },
    container:{
      // borderRadius:"5px",
      border:"solid",
      borderWidth:".2px",
      padding:"4px",
      backgroundColor:"rgba(153, 217, 238, 0.194)",
      // margin:"5px",
      // display:"flex",
      // gridTemplateColumns:"auto auto",
      // justifyContent:"space-around",
      // gridColumnGap:"0px"

    },
    user:{
      // borderWidth:"0.001px !important",
      // borderBottom:"solid",
      display:"flex",
      width:"fit-content",
      fontFamily: "Sans Serif",
      fontSize : "18px",
      fontWeight: "bold",
    },


  }));
  const classes = styles();
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMsg(event.target.value);
    static_msg=event.target.value;
  }
  function Addcomment(){
      // console.log(current_msg);
      if(current_msg!="") {
        setData([...data,{user:session.user.name,msg:current_msg}]);
        AddData({user:session.user.name,msg:current_msg});
        setMsg("");
        static_msg="";
      }
      
  }

  return <>
  <div className={classes.frame}>
      <div className={classes.heading} >
          Discussion Forum
      </div>


      <div className={classes.discussion}>
      {data.map((user_data,index) => (
            <div className={classes.container} key={index}>
              <div className={classes.user}>
              <AccountCircleIcon color={get_color[(user_data.user)]}/>
                {user_data.user}
              </div>
              <div>
                {user_data.msg}
              </div>
            </div>
      ))}
      </div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(event)=>{event.preventDefault();Addcomment;}}
      >    
        <TextField
          className={classes.comment_box}
          label="Add a comment"
          id="outlined-size-normal"
          variant="outlined"
          style={{ width: "15rem" }}
          placeholder="Add a comment"
          value={current_msg}
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
      </div>
        </>;
}
