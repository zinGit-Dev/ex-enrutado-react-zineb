
import {useContext} from "react"

import { Link, useParams  } from "react-router-dom";
import { ContextUniverse } from "./../context";

export default function Card(props) {
  //const { name } = props;
  const {name}= useParams()
  const {user} =  useContext(ContextUniverse)

  return (
    // <Link to={`/list/${name}`}>

      <Link to={`/detail/${name}`}>
      <div className="card">
        <div>name:{user.username}</div>
      </div>
    </Link>

  );
}
