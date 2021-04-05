import {useContext, useState, useEffect} from "react"

import { Link, useParams  } from "react-router-dom";
import { ContextUniverse } from "../../context";

export default function Details(props) {
  //const {  nickname, age, housepet } = props;
  const [userParam, setUserParam] = useState({});

  const {user,list} =  useContext(ContextUniverse)
 
   const {name}= useParams()
  
   console.log("list=>", list)

   useEffect(() => {
      const userP = list.find((u)=>u.username === name)
      console.log("userP=>", userP)
      setUserParam(userP)
   }, [userParam])
 
  return (
    
      <div className="detail">
        <div>username:{userParam.username}</div>
        <div>nickname:{userParam.nickname}</div>
        <div>age:{userParam.page}</div>
        <div>housepet:{userParam.housepet}</div>
      </div>
  
  );
}




