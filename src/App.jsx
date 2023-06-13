import React, { useContext, useEffect } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login'
import Create from './Components/Create/Create'

import Home from './Pages/Home';
import { AuthContext } from './store/Context';
import { getAuth } from 'firebase/auth';
import { firestore} from './firebase/config'
import { getDocs,collection,query,where } from 'firebase/firestore';

function App() {
  const {setUser} = useContext(AuthContext)
  const auth = getAuth()

  useEffect(() => {
    auth.onAuthStateChanged(async(user)=>{
      // console.log(user.uid);
      if(user){
        const q = query(collection(firestore,'user'),where('id','==',user.uid))
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          console.log('User not found');
        } else {
          const user = querySnapshot.docs[0].data();
          // console.log(user);
          setUser(user)
        }
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
