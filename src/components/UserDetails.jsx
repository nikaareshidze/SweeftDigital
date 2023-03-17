import React from "react";
import { useParams } from "react-router-dom";

function UserDatails() {
  const { userId } = useParams();
  return (
    <div>
      <h1>Hello Sweeft {userId}</h1>
    </div>
  );
}

export default UserDatails;
