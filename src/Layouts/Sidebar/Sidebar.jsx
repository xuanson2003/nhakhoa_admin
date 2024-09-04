import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faAddressBook, faNotesMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '~/Assets/img/logo.png';
import './Sidebar.css';
import config from '~/Config';

function Sidebar() {
    const location = useLocation();
    const getActiveClass = (path) => {
        return location.pathname.startsWith(path) ? 'active' : '';
    };
    return (
        <div className="sidebar" data-background-color="dark">
            {/* <img src={bg} alt="" className="sidebar-bg"/>
            <div className="sidebar-layer"></div> */}
            <div className="sidebar-logo">
                <div className="logo-header bg-transparent">
                    <Link to={config.routes.dashbroad} className="logo">
                        <img src={logo} alt="navbar brand" className="navbar-brand" height="28" />
                    </Link>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar">
                            <i className="gg-menu-right"></i>
                        </button>
                        <button className="btn btn-toggle sidenav-toggler">
                            <i className="gg-menu-left"></i>
                        </button>
                    </div>
                    <button className="topbar-toggler more">
                        <i className="gg-more-vertical-alt"></i>
                    </button>
                </div>
            </div>
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    <ul className="nav nav-secondary">
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                <i className="fas fa-home"></i>
                                <p>Dashboard</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="dashboard">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.dashbroad}`)}>
                                        <Link to={config.routes.dashbroad}>
                                            <span className="sub-item">Trang chủ</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h"></i>
                            </span>
                            <h4 className="text-section">Hỗ trợ viên</h4>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#patient">
                                <FontAwesomeIcon icon={faAddressBook} />
                                <p>Bệnh nhân</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="patient">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.patient_list}`)}>
                                        <Link to={config.routes.patient_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#doctor">
                                <FontAwesomeIcon icon={faUserDoctor} />
                                <p>Bác sĩ</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="doctor">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.add_doctor}`)}>
                                        <Link to={config.routes.add_doctor}>
                                            <span className="sub-item">Thêm mới</span>
                                        </Link>
                                    </li>
                                    <li className={getActiveClass(`${config.routes.doctor_list}`)}>
                                        <Link to={config.routes.doctor_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#service">
                                <FontAwesomeIcon icon={faNotesMedical} />
                                <p>Dịch vụ</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="service">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.add_service}`)}>
                                        <Link to={config.routes.add_service}>
                                            <span className="sub-item">Thêm mới</span>
                                        </Link>
                                    </li>
                                    <li className={getActiveClass(`${config.routes.service_list}`)}>
                                        <Link to={config.routes.service_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
