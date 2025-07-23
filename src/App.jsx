import React, { useContext } from 'react'
import Login from './component/auth/login'
import { useEffect, useState } from 'react'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [user, setUser] = useState(null)
  const authData=useContext(AuthContext)
useEffect(() => {
  const loggedInUser=localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData =JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }

  
}, [])


console.log(authData.employees)

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if ((authData)) {
      const employee=(authData.employees.find((e)=>email==e.email && password==e.password))
      if(employee){
        setUser('employee')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',data:employee}))
         setLoggedInUserData(employee)
      }
      
    }
     else {
      alert("inalid Credincial")
    }
  }
  



  return (
    <>
      {!(user) ? < Login handleLogin={handleLogin} /> : ''}
      {(user == 'admin')?<AdminDashboard />:(user=='employee'?<EmployeeDashboard data={loggedInUserData}/>:null)}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App



