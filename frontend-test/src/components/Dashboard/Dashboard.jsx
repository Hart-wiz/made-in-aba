import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AiFillDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiMessage3Fill } from "react-icons/ri";
import { MdSupportAgent, MdLogout, MdOutlineAttachMoney } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import './Dashboard.css';
import {
    LineChart, Line, CartesianGrid,  Legend, ResponsiveContainer
  } from 'recharts';
  import {
    BarChart, Bar, XAxis, YAxis,Tooltip, 
  } from 'recharts';
  
  
  import {
   
    PieChart, Pie, Cell
  } from 'recharts';
  
  import { IoDiamond } from "react-icons/io5";

const DashboardLayout = ({ children }) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

 

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: <AiFillDashboard /> },
    { path: '/profile', label: 'Profile', icon: <CgProfile /> },
    { path: '/notifications', label: 'Notifications', icon: <RiMessage3Fill /> },
    { path: '/stake-form', label: 'Invest', icon: <MdOutlineAttachMoney /> },
    { path: '/support', label: 'Support', icon: <MdSupportAgent /> },
    { path: '/plans', label: 'Plans', icon: <MdSupportAgent /> },
  ];

  return (
    <div className="layout-container">
      {/* Top Nav */}
      <div className="top-nav">
        <button className="toggle-button" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <FaBars />
        </button>
        <div className="nav-title">Alex Touch</div>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-inner">
          <div className="sidebar-close">
            <button onClick={() => setSidebarOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Navigation */}
          <nav className="nav-links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="logout-container">
            <button  className="logout-btn">
              <MdLogout className="nav-icon" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
      <div className="p-6">
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold mb-6">Welcome </h1>
      <button
          
          className="dash-btn"
        >
          <IoDiamond/> Daily earnings
        </button>
      </div>

      <div className="funds__dash grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="dash-fund ">
        <div className="dash-fund-text">
          <h2 className="fund-b">Funded Balance</h2>
         
          <p className="text-gray-600 text-lg">USD</p>
          </div>
          <p className="balance-dash text-green-600 text-lg"></p>
          
        </div>
        <div className="earnings-dash">
        <div className="dash-fund-text">
          <h2 className="earning-b text-xl font-semibold">Total Earnings</h2>
          <p className="text-gray-600 text-lg">USD</p>
          </div>
          <p className="earn-b text-blue-600 text-lg">$</p>
        </div>
        <div className="withdrawable-dash">
        <div className="dash-fund-text">
          <h2 className="withdraw-b">Withdrawable Balance</h2>
          <p className="text-gray-600 text-lg">USD</p>
          </div>
          <p className="with-b text-purple-600 text-lg"></p>
        </div>
      </div>

      <div className="mb-8 text-center">
       
      </div>
    

<div className="dash-cjart">

<div className="response mb-6">
 
<h2 className="textx font-bold mt-8 mb-2"> ROI Breakdown (Bar View)</h2>
        
     
</div>


<div className="response2">
<h2 className="textx font-bold mt-10 mb-4">Stake Status Breakdown</h2>
 
</div>

</div>
<div className="mb-4">
  <label className="mr-2 font-medium">Filter:</label>
   <select
    
    
    className="border px-3 py-1 rounded-md"
  >
    <option value="all">All</option>
    <option value="active">Active</option>
    <option value="completed">Completed</option>
  </select>
</div>



      <h2 className="text-2xl font-bold mb-4">📋 Stake History</h2>
      <div className="overflow-x-auto">
        <table className="table--dash bg-white rounded-xl overflow-hidden shadow-md">
          <thead className="header-dash text-left p-4">
            <tr>
              <th className="p-3">Plan</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
              <th className="p-3">Daily ROI</th>
              <th className="p-3">Earnings So Far</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
          
              <tr className="list-dash border-b hover:bg-gray-50">
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="px-4 py-2"></td>
                
                <td className="p-3"></td>
                <td className="p-3">
                  
                </td>
              </tr>
         
          </tbody>
        </table>
      </div>
    </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
