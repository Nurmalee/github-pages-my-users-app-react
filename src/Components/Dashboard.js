import React, { useState } from 'react';
import './Dashboard.css';
import { FiSearch } from 'react-icons/fi';
import { IoIosCloudDownload } from 'react-icons/io';
import allUsers from '../usersData/users';
import UsersButtons from './UsersButtons';
import UsersList from './UsersList';
import MainSearchForm from './MainSearchForm';
import Pagination from './Pagination';


// const url = "https://randomuser.me/api/?results=4";

let usersGender = (allUsers).map(user => user.gender);
usersGender = ["all", ...new Set(usersGender)]

// const searchUser = (user) => {
//     log
// }

function Dashboard() {
    const [users, setUsers] = useState(allUsers);
    const [genders] = useState(usersGender); //an array for dynamic population of users' gender buttons
    const [activeGenderList, setActiveGenderList] = useState("All Users"); //dynamically changes gender list heading on set() and on click of gender buttons
    const [searchInput, setSearchInput] = useState("");
    const [searchedUser, setSearchedUser] = useState(allUsers[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(3);

    const indexOfLastUser = (currentPage * usersPerPage) - 1;
    const indexOfFirstUser = indexOfLastUser - (usersPerPage - 1);
    const currentUsers = users.slice(indexOfFirstUser, (indexOfLastUser + 1))

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const filterUsers = (gender) => {
        if(gender === "all"){
            setUsers(allUsers);
            setActiveGenderList("All Users");
            setCurrentPage(1)
        } else {
            const genderUsers = (allUsers).filter(user => (user.gender === gender))
            setUsers(genderUsers)
            setActiveGenderList(`${gender} users`); 
            setCurrentPage(1)
        }
    }

    const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        
        if(searchInput){
        const searchResult = allUsers.find(user => {
            const {name:{first, last}} = user;
            
            if(searchInput.includes(first) && searchInput.includes(last)){
                alert("MATCH");
                return null;
            }
            return (first === searchInput || last === searchInput);
            
           
        })

        if(searchResult){
            setSearchedUser(searchResult);
            setIsOpen(true);
        }
           
        }
    }

    // let namesArr = [];

    // allUsers.map(user => {
    //     const {name:{first, last}} = user;
    //     for(let i = 1; i <= allUsers.length; i++){
    //         namesArr = [...namesArr, first, last]
    //     }
    //     return namesArr;
    // })

    // namesArr = [...new Set(namesArr)]
    // console.log(namesArr);

    const handleSearchInput = (e) => {
        // if(!(e.target.value).includes("nuru")){
        //     alert("WE ARE GETTING THERE");
        // }
        setSearchInput(e.target.value)
    }

    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div className="dashboard__left-title">
                    <h3>Hello, <span> Nurudeen </span></h3>
                    <p>Welcome to your dashboard, kindly sort through the user base</p>
                </div>

               <MainSearchForm handleSearchFormSubmit={handleSearchFormSubmit} searchInput={searchInput} handleSearchInput={handleSearchInput} searchedUser={searchedUser} isOpen={isOpen} close={() => setIsOpen(false)} />

                <div className="dashboard__left-users">
                    <h3>Show users</h3>
                    <UsersButtons genders={genders} filterUsers={filterUsers}/>
                </div>
            </div>

            <div className="dashboard__right">
                <h3>{activeGenderList} ({users.length})</h3>
                <p>Filter by</p>

                <form>
                    <div className="form-control-2">
                        <FiSearch className="form-control-2__searchIcon"/>
                        <input type="text" placeholder="Find in list"/>
                    </div>
                </form>

                <UsersList users={currentUsers} className="users__list" />

                <div className="dashboard__right-footer">
                   <button className="list__download-btn"> <IoIosCloudDownload className="download-icon"/> Download Results </button>

                   <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}  />

                </div>
            
            </div>
            
        </div>
    )
}

export default Dashboard