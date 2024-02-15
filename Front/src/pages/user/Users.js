import { list } from '../../datas/user/user-api.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/UsersPage.css';
import { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;
      list(signal).then((data) => {
        if (data && data.error) {
        console.log(data.error)
        } else {
        setUsers(data)
        }
        
      });
  
      return () => {
        abortController.abort();
      };
    }, []);

  
    return (
        <>
            <Header />
        <div className='mainDiv'>
            <div className='usersContainer'>
            <h2 className='UsersTitle'>All Users</h2>
                
        {(typeof users=='undefined')?(
            <p>.loading</p>
        ):
        
        users.map((user) => (
        <li key={user._id}>{user.name}</li>
      ))
        
        }
        </div>
        </div>
      <Footer/>
      </>   
    );
  };

export default Users;