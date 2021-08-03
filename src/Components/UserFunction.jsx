import React,{useEffect, useState} from 'react';
import axios from 'axios'


const UserFunction = () => {
    const[Users, setUsers]= useState([]);

    useEffect ( ()=> {
        axios.get ("https://jsonplaceholder.typicode.com/users")
        .then (
            (res)=> {
                setUsers(res.data)
            }
        )
        .catch (
            (err)=> {
                console.log(err)
            }
        )
    }, [] )

    


    return (
        <div>
            <h1> Functional Component</h1>
            <p>{
            Users.map (
                (each_user)=> {
                   return <h3>{each_user.name}</h3>
                }
            )
            }</p>
        </div>
    );
}

export default UserFunction;
