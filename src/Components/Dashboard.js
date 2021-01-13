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

function Dashboard() {
    const [users, setUsers] = useState(allUsers);
    const [genders] = useState(usersGender); 
    const [activeGenderList, setActiveGenderList] = useState("All Users");
    const [searchInput, setSearchInput] = useState("");
    const [searchedUser, setSearchedUser] = useState(allUsers[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [userNotInList, setUserNotInList] = useState(false);

     //PAGINATION CONCERNS
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(3);
    const indexOfLastUser = (currentPage * usersPerPage) - 1;
    const indexOfFirstUser = indexOfLastUser - (usersPerPage - 1);
    const currentUsers = users.slice(indexOfFirstUser, (indexOfLastUser + 1))
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    //PAGINATION CONCERNS

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
                return (first === searchInput || last === searchInput || `${first + last}` === searchInput);
            })
            setUserNotInList(false);
            if(searchResult){
                setSearchedUser(searchResult);
                setIsOpen(true);
                setUserNotInList(false);
            }

            if(!searchResult){
                setUserNotInList(true);
            }
        }
        // if(searchInput === ""){
        //     setUserNotInList(false);
        //     setCapitalizeNameSearch(false);
        // }
    }

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div className="dashboard__left-title">
                    <h3>Hello, <span> Nurudeen </span></h3>
                    <p>Welcome to your dashboard, kindly sort through the user base</p>
                </div>
                
                <p className="search__entry-warning-1">Not getting proper response? make sure to capitalize your search e.g "Mark" not "mark" </p>
                <MainSearchForm handleSearchFormSubmit={handleSearchFormSubmit} searchInput={searchInput} handleSearchInput={handleSearchInput} searchedUser={searchedUser} isOpen={isOpen} close={() => setIsOpen(false)} />
               
                {userNotInList ? <p className="search__entry-warning-2"> User not in current list </p> : <p className="search__entry-warning-1"> Found 1 match </p> }
                

                <div className="dashboard__left-users">
                    <h3>Show users</h3>
                    <UsersButtons genders={genders} filterUsers={filterUsers}/>
                </div>
            </div>

            <div className="dashboard__right">
                <h3>{activeGenderList} ({users.length})</h3>
                <p>Filter by</p>

                <form onSubmit={handleSearchFormSubmit}>
                    <div className="form-control-2">
                        <FiSearch className="form-control-2__searchIcon"/>
                        <input type="text" placeholder="Find in list" value={searchInput} onChange={handleSearchFormSubmit} />
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