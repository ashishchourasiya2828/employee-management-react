import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    // localStorage.clear(); 
    const [userData, setuserData] = useState(null)

   useEffect(() => {
    setLocalStorage()
    const {employee,admin} = getLocalStorage();
    setuserData(employee);
    },[])
   
   

  return (
    <AuthContext.Provider value={[userData,setuserData]} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider