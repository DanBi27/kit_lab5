import React from "react";
import UserCard from "./UserCard";
import "./styles.css";

export default function UserList(props) {
  return (
    <div id="users">
      {props.users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
}
