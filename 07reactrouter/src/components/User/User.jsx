import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="flex justify-center text-4xl text-orange-700 hover:bg-slate-400 duration-300">
      User : {userid}
    </div>
  );
}

export default User;
