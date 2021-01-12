import React, { useState } from 'react';
import './Dashboard.css';
import { FiSearch } from 'react-icons/fi';

function Dashboard() {
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
                   
                </div>
            </div>

            <div className="dashboard__right">
                <h3>All Users</h3>
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
               {/* <div id="portal"></div> */}
            </div>
            
        </div>
    )
}

export default Dashboard
