import { useState } from "react";

export default function useCreateListUsers() {
  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);

  function registerUser(data) {
    setUser(data);
    setList(...list, data);
  }

  return {
    list,
    user,
    registerUser,
  };
}
