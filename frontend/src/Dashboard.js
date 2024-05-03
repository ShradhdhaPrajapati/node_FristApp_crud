import React, { useState, useEffect } from 'react';
import './styles/Dashboard.css';

const Dashboard = () => {
    const [signupData, setSignupData] = useState([]);

    useEffect(() => {
        // Fetch signup data from server.js
        fetch('/api/signupData')
            .then(response => response.json())
            .then(data => {
                setSignupData(data);
            })
            .catch(error => {
                console.error('Error fetching signup data:', error);
            });
    }, []);

    return (
        <div className="App">
            <nav className="sidebar">
                {/* <ul>
                    <li><a href="/">Home</a></li>
                    Assuming `toggleTable` function is defined somewhere else
                    <li><button onClick={toggleTable}>Dashboard</button></li>
                </ul> */}
            </nav>
            <div className="content">
                <h1>Dashboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Checking if signupData is available before mapping */}
                        {signupData && signupData.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
