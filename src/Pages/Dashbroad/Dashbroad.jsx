import React from 'react';
import deniAvatar from '~/Assets/img/jm_denis.jpg'
import talhaAvatar from '~/Assets/img/talha.jpg'
import chadAvatar from '~/Assets/img/chadengle.jpg'

function Dashbroad(props) {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-primary bubble-shadow-small">
                                        <i className="fas fa-users"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Visitors</p>
                                        <h4 className="card-title">1,294</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-info bubble-shadow-small">
                                        <i className="fas fa-user-check"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Subscribers</p>
                                        <h4 className="card-title">1303</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-success bubble-shadow-small">
                                        <i className="fas fa-luggage-cart"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Sales</p>
                                        <h4 className="card-title">$ 1,345</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-secondary bubble-shadow-small">
                                        <i className="far fa-check-circle"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Order</p>
                                        <h4 className="card-title">576</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="card card-round">
                        <div className="card-header">
                            <div className="card-head-row">
                                <div className="card-title">User Statistics</div>
                                <div className="card-tools">
                                    <a href="#" className="btn btn-label-success btn-round btn-sm me-2">
                                        <span className="btn-label">
                                            <i className="fa fa-pencil"></i>
                                        </span>
                                        Export
                                    </a>
                                    <a href="#" className="btn btn-label-info btn-round btn-sm">
                                        <span className="btn-label">
                                            <i className="fa fa-print"></i>
                                        </span>
                                        Print
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-container" style={{ minHeight: '375px' }}>
                                <canvas id="statisticsChart"></canvas>
                            </div>
                            <div id="myChartLegend"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-primary card-round">
                        <div className="card-header">
                            <div className="card-head-row">
                                <div className="card-title">Daily Sales</div>
                                <div className="card-tools">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-sm btn-label-light dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Export
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">
                                                Action
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-category">March 25 - April 02</div>
                        </div>
                        <div className="card-body pb-0">
                            <div className="mb-4 mt-2">
                                <h1>$4,578.58</h1>
                            </div>
                            <div className="pull-in">
                                <canvas id="dailySalesChart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card card-round">
                        <div className="card-body pb-0">
                            <div className="h1 fw-bold float-end text-primary">+5%</div>
                            <h2 className="mb-2">17</h2>
                            <p className="text-muted">Users online</p>
                            <div className="pull-in sparkline-fix">
                                <div id="lineChart"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="card card-round">
                        <div class="card-body">
                            <div class="card-head-row card-tools-still-right">
                                <div class="card-title">New Customers</div>
                                <div class="card-tools">
                                    <div class="dropdown">
                                        <button
                                            class="btn btn-icon btn-clean me-0"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i class="fas fa-ellipsis-h"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">
                                                Action
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                Another action
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-list py-4">
                                <div class="item-list">
                                    <div class="avatar">
                                        <img
                                            src={deniAvatar}
                                            alt="..."
                                            class="avatar-img rounded-circle"
                                        />
                                    </div>
                                    <div class="info-user ms-3">
                                        <div class="username">Jimmy Denis</div>
                                        <div class="status">Graphic Designer</div>
                                    </div>
                                    <button class="btn btn-icon btn-link op-8 me-1">
                                        <i class="far fa-envelope"></i>
                                    </button>
                                    <button class="btn btn-icon btn-link btn-danger op-8">
                                        <i class="fas fa-ban"></i>
                                    </button>
                                </div>
                                <div class="item-list">
                                    <div class="avatar">
                                        <span class="avatar-title rounded-circle border border-white">CF</span>
                                    </div>
                                    <div class="info-user ms-3">
                                        <div class="username">Chandra Felix</div>
                                        <div class="status">Sales Promotion</div>
                                    </div>
                                    <button class="btn btn-icon btn-link op-8 me-1">
                                        <i class="far fa-envelope"></i>
                                    </button>
                                    <button class="btn btn-icon btn-link btn-danger op-8">
                                        <i class="fas fa-ban"></i>
                                    </button>
                                </div>
                                <div class="item-list">
                                    <div class="avatar">
                                        <img src={talhaAvatar} alt="..." class="avatar-img rounded-circle" />
                                    </div>
                                    <div class="info-user ms-3">
                                        <div class="username">Talha</div>
                                        <div class="status">Front End Designer</div>
                                    </div>
                                    <button class="btn btn-icon btn-link op-8 me-1">
                                        <i class="far fa-envelope"></i>
                                    </button>
                                    <button class="btn btn-icon btn-link btn-danger op-8">
                                        <i class="fas fa-ban"></i>
                                    </button>
                                </div>
                                <div class="item-list">
                                    <div class="avatar">
                                        <img
                                            src={chadAvatar}
                                            alt="..."
                                            class="avatar-img rounded-circle"
                                        />
                                    </div>
                                    <div class="info-user ms-3">
                                        <div class="username">Chad</div>
                                        <div class="status">CEO Zeleaf</div>
                                    </div>
                                    <button class="btn btn-icon btn-link op-8 me-1">
                                        <i class="far fa-envelope"></i>
                                    </button>
                                    <button class="btn btn-icon btn-link btn-danger op-8">
                                        <i class="fas fa-ban"></i>
                                    </button>
                                </div>
                                <div class="item-list">
                                    <div class="avatar">
                                        <span class="avatar-title rounded-circle border border-white bg-primary">
                                            H
                                        </span>
                                    </div>
                                    <div class="info-user ms-3">
                                        <div class="username">Hizrian</div>
                                        <div class="status">Web Designer</div>
                                    </div>
                                    <button class="btn btn-icon btn-link op-8 me-1">
                                        <i class="far fa-envelope"></i>
                                    </button>
                                    <button class="btn btn-icon btn-link btn-danger op-8">
                                        <i class="fas fa-ban"></i>
                                    </button>
                                </div>
                                <div class="item-list">
                                    <div class="avatar">
                                        <span class="avatar-title rounded-circle border border-white bg-secondary">
                                            F
                                        </span>
                                    </div>
                                    <div class="info-user ms-3">
                                        <div class="username">Farrah</div>
                                        <div class="status">Marketing</div>
                                    </div>
                                    <button class="btn btn-icon btn-link op-8 me-1">
                                        <i class="far fa-envelope"></i>
                                    </button>
                                    <button class="btn btn-icon btn-link btn-danger op-8">
                                        <i class="fas fa-ban"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card card-round">
                        <div class="card-header">
                            <div class="card-head-row card-tools-still-right">
                                <div class="card-title">Transaction History</div>
                                <div class="card-tools">
                                    <div class="dropdown">
                                        <button
                                            class="btn btn-icon btn-clean me-0"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i class="fas fa-ellipsis-h"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">
                                                Action
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                Another action
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table align-items-center mb-0">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">Payment Number</th>
                                            <th scope="col" class="text-end">
                                                Date & Time
                                            </th>
                                            <th scope="col" class="text-end">
                                                Amount
                                            </th>
                                            <th scope="col" class="text-end">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <button class="btn btn-icon btn-round btn-success btn-sm me-2">
                                                    <i class="fa fa-check"></i>
                                                </button>
                                                Payment from #10231
                                            </th>
                                            <td class="text-end">Mar 19, 2020, 2.45pm</td>
                                            <td class="text-end">$250.00</td>
                                            <td class="text-end">
                                                <span class="badge badge-success">Completed</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <button class="btn btn-icon btn-round btn-success btn-sm me-2">
                                                    <i class="fa fa-check"></i>
                                                </button>
                                                Payment from #10231
                                            </th>
                                            <td class="text-end">Mar 19, 2020, 2.45pm</td>
                                            <td class="text-end">$250.00</td>
                                            <td class="text-end">
                                                <span class="badge badge-success">Completed</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <button class="btn btn-icon btn-round btn-success btn-sm me-2">
                                                    <i class="fa fa-check"></i>
                                                </button>
                                                Payment from #10231
                                            </th>
                                            <td class="text-end">Mar 19, 2020, 2.45pm</td>
                                            <td class="text-end">$250.00</td>
                                            <td class="text-end">
                                                <span class="badge badge-success">Completed</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <button class="btn btn-icon btn-round btn-success btn-sm me-2">
                                                    <i class="fa fa-check"></i>
                                                </button>
                                                Payment from #10231
                                            </th>
                                            <td class="text-end">Mar 19, 2020, 2.45pm</td>
                                            <td class="text-end">$250.00</td>
                                            <td class="text-end">
                                                <span class="badge badge-success">Completed</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <button class="btn btn-icon btn-round btn-success btn-sm me-2">
                                                    <i class="fa fa-check"></i>
                                                </button>
                                                Payment from #10231
                                            </th>
                                            <td class="text-end">Mar 19, 2020, 2.45pm</td>
                                            <td class="text-end">$250.00</td>
                                            <td class="text-end">
                                                <span class="badge badge-success">Completed</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <button class="btn btn-icon btn-round btn-success btn-sm me-2">
                                                    <i class="fa fa-check"></i>
                                                </button>
                                                Payment from #10231
                                            </th>
                                            <td class="text-end">Mar 19, 2020, 2.45pm</td>
                                            <td class="text-end">$250.00</td>
                                            <td class="text-end">
                                                <span class="badge badge-success">Completed</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <button class="btn btn-icon btn-round btn-success btn-sm me-2">
                                                    <i class="fa fa-check"></i>
                                                </button>
                                                Payment from #10231
                                            </th>
                                            <td class="text-end">Mar 19, 2020, 2.45pm</td>
                                            <td class="text-end">$250.00</td>
                                            <td class="text-end">
                                                <span class="badge badge-success">Completed</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashbroad;
