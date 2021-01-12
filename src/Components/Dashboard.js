import React, { useState } from 'react';
import './Dashboard.css';
import { FiSearch } from 'react-icons/fi';
import allUsers from '../usersData/users';
import UsersButtons from './UsersButtons';


// const url = "https://randomuser.me/api/?results=4";

let usersGender = (allUsers).map(user => user.gender);
usersGender = ["all", ...new Set(usersGender)]

function Dashboard() {
    const [users, setUsers] = useState(allUsers);
    const [genders] = useState(usersGender);
    const [activeGender, setActiveGender] = useState("All Users");

    const filterUsers = (gender) => {
        const genderUsers = (allUsers).filter(user => (user.gender === gender))
        setUsers(genderUsers)
        setActiveGender(`${gender.charAt(0).toUpperCase() + gender.slice(1)} Users`);
        // console.log(`${gender.charAt(0).toUpperCase() + gender.slice(1)} Users`);
        if(gender === "all"){
            setUsers(allUsers);
            setActiveGender("All Users");
        }
    }

    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div className="dashboard__left-title">
                    <h3>Hello, <span> Nurudeen </span></h3>
                    <p>Welcome to your dashboard, kindly sort through the user base</p>
                </div>
                <form>
                    <div className="form-control">
                        <FiSearch className="form-control__searchIcon"/>
                        <input type="text" placeholder="Find a user"/>
                    </div>
                </form>
                <div className="dashboard__left-users">
                    <h3>Show users</h3>
                    <UsersButtons genders={genders} filterUsers={filterUsers}/>
                </div>
            </div>

            <div className="dashboard__right">
                <h3>{activeGender}</h3>
                <p>Filter by</p>
                <form>
                    <div className="form-control-2">
                        <FiSearch className="form-control-2__searchIcon"/>
                        <input type="text" placeholder="Find in list"/>
                    </div>
                </form>
               {/* <UsersList users={users} /> */}
               <div className="dashboard__right-footer">

               </div>
            </div>
            
        </div>
    )
}

export default Dashboard
