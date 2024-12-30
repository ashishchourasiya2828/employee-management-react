import React, { useContext, useEffect, useRef, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // setLocalStorage()

  const [userData,setuserData] = useContext(AuthContext);
  const [user, setuser] = useState(null)
  const [loggedInUser, setloggedInUser] = useState(null)

 useEffect(()=>{
  const loggedInUser = localStorage.getItem("loggedInUser") 
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setuser(userData.role)
    setloggedInUser(userData.data)
    // console.log(userData);
    
    

  }
  
 },[])
  
    
  const handleLogin = (email,password)=>{
      if(email === "ashish@mail.com" && password === "ashish"){
        setuser("admin");
        localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
        
      }
      else if(userData){
        const employee = userData.find((e)=>email === e.email && e.password === password )
        if(employee){
          setuser("employee");
          setloggedInUser(employee);
          localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
        }
      }
      else{
        alert("Invalid Credentials");
      }
  }

  

  return (
    <div className=''>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard setuser={setuser} /> : (user== "employee" ? <EmployeDashboard setuser={setuser} data={loggedInUser} /> : null) }

      {/* <AdminDashboard/> */}


    </div>
  )
}

export default App