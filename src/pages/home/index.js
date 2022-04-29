import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react"
import { createServer } from "miragejs"

let server = createServer()
server.get("/api/users", { users: [{ id: 1, name: "Bob" }, { id: 2, name: "Mary" }] })

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

export const HomePage = () => {
  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
      })
  }, [])

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>HURI</h1>
      <p>projeto provihack do agora</p>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

    </div>
  );
};
