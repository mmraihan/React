import React, { Component, useState } from "react";
import Component2 from "./Component2";
import { UserContext } from "./UserContext";



export const Component1 = () => {

    const [user, setUser] = useState({id: 101, name: "Raihan"});
  return (
    <div>
      <UserContext.Provider value={{ user }}>
       <Component2/>
      </UserContext.Provider>
    </div>
  );
};
