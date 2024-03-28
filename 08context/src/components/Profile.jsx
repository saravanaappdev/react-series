import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if(!user) return <div>Not Logged in yet</div>

  return (
    <div>
      Profile : {user?.username} {user?.password}
    </div>
  );
}

export default Profile;
