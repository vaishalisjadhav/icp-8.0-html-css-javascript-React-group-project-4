import react from "react";
 import cardContext from "./CartContext";

 const UserContextProvider=({children})=>{
    const [user,setUser]=react.useState(null) 
    
    return(
        <>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        </>
     )
 }

 export default UserContextProvider