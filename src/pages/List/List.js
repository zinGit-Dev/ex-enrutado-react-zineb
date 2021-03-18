//el mapeo de la list
import { Fragment, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import Card from "../../components/Card"
import {ContextUniverse} from "../../context";

export default function List() {
  const [list, registerUser] = useContext(ContextUniverse);
  return (
    <div className="card">
      {list.length
        ? list.map((entry, index) => <Card name={entry.name} />)
        : null}
    </div>
  );
}
