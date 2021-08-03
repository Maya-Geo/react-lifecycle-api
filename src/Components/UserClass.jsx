import React, { Component } from 'react';
import  './UserStyle.css'

class UserClass extends Component {
    constructor(props){
        super(props);
        this.state ={
            users:[]

        }     

    }

    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then (
            (data)=> {
                this.setState({
                    users: data
                })
            }
        )
        .catch()
    }

    render() {
        return (
            <div>
               <h1>Class Users</h1> 
               {this.state.users.map(
                   (user) =>{
                       return <h4>{user.name}</h4>
               }
               )
            }
            </div>
        );
    }
}

export default UserClass;
