//el mapeo de la list
import { Fragment, useState, useContext,useEffect } from "react";
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import Card from "../../components/Card"
import {ContextUniverse} from "../../context";

export default function List() {
  const {list, registerUser} = useContext(ContextUniverse);

  useEffect(()=>{
console.log(list)
  },[])

  return (
    <div className="card">
      {list.length >0
        ? list.map((entry, index) => <Card name={entry.username} />)
        : null}
    </div>
  );
}
