import React from 'react';
import {Link} from "react-router-dom";
import './Card.css';

const ShipperComponent = () => {
    const account = JSON.parse(localStorage.getItem("data"));

    return (
        <div>
            <body id="page-top">

            <div id="wrapper">

                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">POST OFFICE</div>
                    </a>

                    <hr className="sidebar-divider my-0"/>

                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Management</span></a>
                    </li>
                </ul>
                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                           placeholder="Search for..."
                                           aria-label="Search" aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                         aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                       placeholder="Search for..." aria-label="Search"
                                                       aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                <div className="topbar-divider d-none d-sm-block"></div>

                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span
                                            className="mr-2 d-none d-lg-inline text-gray-600 small">{account.username}</span>
                                        <img className="img-profile rounded-circle"
                                             src={account.avatar}/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                         aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-toggle="modal"
                                           data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>

                            </ul>

                        </nav>
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            </div>
                            <div className="row">

                                <Link to={"/home"} className="col-xl-3 col-md-6 mb-4 card-home">
                                    <div className="card border-left-primary shadow h-100 py-2 card-hover">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div
                                                        className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Information Orders
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800"> 100
                                                        Orders
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to={"/shipper"} className="col-xl-3 col-md-6 mb-4 card-home">
                                    <div className="card border-left-success shadow h-100 py-2 card-hover">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div
                                                        className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Information Shipper
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">5
                                                        Shipper
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fa-solid fa-truck-fast fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <div className="col-xl-3 col-md-6 mb-4 ">
                                    <div className="card border-left-info shadow h-100 py-2 card-hover">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div
                                                        className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                                    </div>
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-auto">
                                                            <div
                                                                className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="progress progress-sm mr-2">
                                                                <div className="progress-bar bg-info" role="progressbar"
                                                                     style={{width: "50%"}} aria-valuenow="50"
                                                                     aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-4 ">
                                    <div className="card border-left-warning shadow h-100 py-2 card-hover">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div
                                                        className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Pending Requests
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-xl-8 col-lg-7">
                                    <div className="card shadow mb-4">
                                        <div
                                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                            <div className="dropdown no-arrow">
                                                <a className="dropdown-toggle" href="#" role="button"
                                                   id="dropdownMenuLink"
                                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div
                                                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div className="dropdown-header">Dropdown Header:</div>
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="chart-area">
                                                <canvas id="myAreaChart"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-5">
                                    <div className="card shadow mb-4">
                                        <div
                                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                            <div className="dropdown no-arrow">
                                                <a className="dropdown-toggle" href="#" role="button"
                                                   id="dropdownMenuLink"
                                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div
                                                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div className="dropdown-header">Dropdown Header:</div>
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="chart-pie pt-4 pb-2">
                                                <canvas id="myPieChart"></canvas>
                                            </div>
                                            <div className="mt-4 text-center small">
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-primary"></i> Direct
                                        </span>
                                                <span className="mr-2">
                                            <i className="fas fa-circle text-success"></i> Social
                                        </span>
                                                <span className="mr-2">
                                            <i className="fas fa-circle text-info"></i> Referral
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2021</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current
                            session.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </div>
    );
};

export default ShipperComponent;