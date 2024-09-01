import React, { useState } from 'react';
import './sidebar.scss';
import logo from '../../assets/logo/logo_white.webp';
import logoSmall from '../../assets/logo/logo-white-small.webp';
import { FaHome, FaUsers, FaProductHunt, FaShoppingCart, FaMoneyBill, FaClipboardList, FaClock, FaCalendarAlt, FaChartBar, FaArrowLeft } from 'react-icons/fa';
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar__logo">
                <img src={collapsed ? logoSmall : logo} alt="company logo" />
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__item active">
                    <FaHome />
                    {!collapsed && <span>Home</span>}
                </div>
                <div className="sidebar__item">
                    <FaUsers />
                    {!collapsed && <span>Customers</span>}
                </div>
                <div className="sidebar__item">
                    <FaProductHunt />
                    {!collapsed && <span>Product Catalog</span>}
                </div>
                <div className="sidebar__item">
                    <FaShoppingCart />
                    {!collapsed && <span>Sales</span>}
                </div>
                <div className="sidebar__item">
                    <FaMoneyBill />
                    {!collapsed && <span>Payments</span>}
                </div>
                <div className="sidebar__item">
                    <FaClipboardList />
                    {!collapsed && <span>Expenses</span>}
                </div>
                <div className="sidebar__item">
                    <FaClock />
                    {!collapsed && <span>Time Tracking</span>}
                </div>
                <div className="sidebar__item">
                    <FaCalendarAlt />
                    {!collapsed && <span>Events</span>}
                </div>
                <div className="sidebar__item">
                    <FaChartBar />
                    {!collapsed && <span>Reports</span>}
                </div>
            </div>
            <div className="sidebar__toggle" onClick={toggleSidebar}>
                <IoIosArrowDropleftCircle className={collapsed ? 'rotated' : ''} />
            </div>
        </div>
    );
}
