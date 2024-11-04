import React from "react";

export const UserContext = React.createContext({
    name: "Guest",
    email: "none",
    age: 0,
})  

export default UserContext;