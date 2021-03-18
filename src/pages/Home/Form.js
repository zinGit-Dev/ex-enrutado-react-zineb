import { Fragment, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import {ContextUniverse} from "../../context";;

export default function Form() {
 
  
  const {registerUser}= useContext(ContextUniverse)

  const { register, handleSubmit, errors } = useForm();

  // const handleSubmitData = (data) => {
  //   console.log("data form=>", data);
  //    setList([...list,{
  //      username: data.username,
      
  //    }])
  //   console.log("contenido list=>",list)
  // }

  function handleSubmitData(dataUser){
    registerUser(dataUser)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <label htmlFor="username">Username</label>
        <input name="username" ref={register({ required: true })} />
        <br />
        <label htmlFor="nickname">Nickname</label>
        <input name="nickname" ref={register({ required: true })} />
        <br />
        <label htmlFor="age">Age</label>
        <input
          name="age"
          min="18"
          ref={register({ required: true, min: 18 })}
        />
        <br />
        <label htmlFor="housepet">Housepet</label>
        <select name="housepet" ref={register}>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="lizard">Lizard</option>
          <option value="horse">Horse</option>
          <option value="donkey">Donkey</option>
          <option value="goat">Goat</option>
          <option value="duck">Duck</option>
          <option value="tiger">Tiger</option>
        </select>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </Fragment>
  );
}
