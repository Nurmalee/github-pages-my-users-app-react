import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FiSearch } from 'react-icons/fi';
import { IoIosCloudDownload } from 'react-icons/io';
import allUsers from '../usersData/users';
import UsersButtons from './UsersButtons';
import UsersList from './UsersList';
import MainSearchForm from './MainSearchForm';
import Pagination from './Pagination';
import { CSVLink } from "react-csv";


const url = "https://randomuser.me/api/?results=15";

function Dashboard() {
    const [buttonSorter, setButtonSorter] = useState([]);
    const [users, setUsers] = useState([]);
    const [genders, setGenders] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchedUser, setSearchedUser] = useState(allUsers[0]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [activeGenderList, setActiveGenderList] = useState("All Users");
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

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try{
                const resp = await fetch(url);
                const userObject = await resp.json();
                const fetchedUsers = userObject.results;
                setUsers(fetchedUsers);
                setButtonSorter(fetchedUsers);
    
                let usersGender = (fetchedUsers).map(user => user.gender);
                usersGender = ["all", ...new Set(usersGender)];
                setGenders(usersGender);
            } catch(error){
                setLoading(false);
                console.log(error);
            }
            setLoading(false);
        }
        fetchUsers();

    }, [])

    const filterUsers = (gender) => {
            const genderUsers = (buttonSorter).filter(user => (user.gender === gender))
            setUsers(genderUsers)
            setActiveGenderList(`${gender} users`); 
            setCurrentPage(1)

            if(gender === "all"){
            setUsers(buttonSorter);
            setActiveGenderList("All Users");
            setCurrentPage(1)
            }
    }

    const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        
        if(searchInput){
            const searchResult = users.find(user => {
                const {name:{first, last}} = user;
                return (first === searchInput || last === searchInput || (first + " " + last) === searchInput);
            })
            if(searchResult){
                setSearchedUser(searchResult);
                setIsOpen(true);
                setUserNotInList(false);
            }

            if(!searchResult){
                setUserNotInList(true);
            }
        }
    }

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
        console.log(searchInput);
    }

    const printUsersAsCSV = users.map((user) => {
        const {gender, name:{title, first, last}, location:{street:{number, name}, city, state, country, postcode, coordinates:{latitiude, longitude}, timezone:{offset, description}}, email, login:{username, password}, dob:{age}, phone, cell, registered:{date}, nat} = user;
        return (
           {gender, title, first, last, number, name, city, state, country, postcode, latitiude, longitude, offset, description, email, username, password, phone, cell, age, date, nat}
        )
    })
    const csvData = printUsersAsCSV;

    
   
    return (
        <div className="dashboard" datatest-id="dashboard__component">
            <div className="dashboard__left">
                <div className="dashboard__left-title">
                    <h3>Hello, <span> Nurudeen </span></h3>
                    <p>Welcome to your dashboard, kindly sort through the user base</p>
                </div>
                
                <p className="search__entry-warning">Not getting a proper response? check spellings & make sure to capitalize your search e.g "Mark" not "mark" </p>
                <MainSearchForm handleSearchFormSubmit={handleSearchFormSubmit} searchInput={searchInput} handleSearchInput={handleSearchInput} searchedUser={searchedUser} isOpen={isOpen} close={() => setIsOpen(false)} />
               
                {userNotInList && <p className="search__entry-warning"> User not in current list </p> }
                

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

                {loading && <h1 className="data__fetch-info">Fetching Data.. Hold on a second.. </h1> }
                <UsersList users={currentUsers} className="users__list" />

                <div className="dashboard__right-footer">
                   <CSVLink className="list__download-btn" data={csvData}> <IoIosCloudDownload className="download-icon"/> Download Results</CSVLink>
                   <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard