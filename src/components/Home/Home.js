import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className='container p-md-0'>
          <div className='az-content-body'>
            <div className='az-dashboard-one-title'>
              <div>
                <h2 className='az-dashboard-title'>Hi, welcome back!</h2>
                <p className='az-dashboard-text'>
                  Your web analytics dashboard.
                </p>
              </div>
              <div className='az-content-header-right'>
                <div className='media'>
                  <div className='media-body'>
                    <label>Start Date</label>
                    <h6>Oct 10, 2018</h6>
                  </div>
                  {/* media-body */}
                </div>
                {/* media */}
                <div className='media'>
                  <div className='media-body'>
                    <label>End Date</label>
                    <h6>Oct 23, 2018</h6>
                  </div>
                  {/* media-body */}
                </div>
                {/* media */}
                <div className='media'>
                  <div className='media-body'>
                    <label>Event Category</label>
                    <h6>All Categories</h6>
                  </div>
                  {/* media-body */}
                </div>
                {/* media */}
                <a href='#/' className='btn btn-purple'>
                  Export
                </a>
              </div>
            </div>
            {/* az-dashboard-one-title */}

            <div className='az-dashboard-nav'>
              <nav className='nav'>
                <a className='nav-link active' data-toggle='tab' href='#/'>
                  Overview
                </a>
                <a className='nav-link' data-toggle='tab' href='#/'>
                  Audiences
                </a>
                <a className='nav-link' data-toggle='tab' href='#/'>
                  Demographics
                </a>
                <a className='nav-link' data-toggle='tab' href='#/'>
                  More
                </a>
              </nav>

              <nav className='nav'>
                <a className='nav-link' href='#/'>
                  <i className='far fa-save'></i> Save Report
                </a>
                <a className='nav-link' href='#/'>
                  <i className='far fa-file-pdf'></i> Export to PDF
                </a>
                <a className='nav-link' href='#/'>
                  <i className='far fa-envelope'></i>Send to Email
                </a>
                <a className='nav-link' href='#/'>
                  <i className='fas fa-ellipsis-h'></i>
                </a>
              </nav>
            </div>

            <div className='row row-sm mg-b-20'>
              <div className='col-lg-4'>
                <Link to='/Forex' className='nav-link'>
                  <div className='card card-dashboard-pageviews'>
                    <div className='card-header'>
                      <h6 className='card-title'>FOREX</h6>
                      <p className='card-text'>
                        This report is based on 100% of sessions.
                      </p>
                    </div>
                    {/* card-header */}
                    <div className='card-body'>{/* list-group-item */}</div>
                    {/* card-body */}
                  </div>
                </Link>
                {/* card */}
              </div>
              {/* col */}
              <div className='col-lg-4'>
                <Link to='/FixedIncome' className='nav-link'>
                  <div className='card card-dashboard-pageviews'>
                    <div className='card-header'>
                      <h6 className='card-title'>FIXED INCOME</h6>
                      <p className='card-text'>
                        This report is based on 100% of sessions.
                      </p>
                    </div>
                    {/* card-header */}
                    <div className='card-body'>{/* list-group-item */}</div>
                    {/* card-body */}
                  </div>
                  {/* card */}
                </Link>
              </div>
              {/* col */}
              <div className='col-lg-4'>
                <Link to='/Equity' className='nav-link'>
                  <div className='card card-dashboard-pageviews'>
                    <div className='card-header'>
                      <h6 className='card-title'>EQUITY</h6>
                      <p className='card-text'>
                        This report is based on 100% of sessions.
                      </p>
                    </div>
                    {/* card-header */}
                    <div className='card-body'>{/* list-group-item */}</div>
                    {/* card-body */}
                  </div>
                </Link>
                {/* card */}
              </div>
              {/* col */}
            </div>
          </div>
          {/* az-content-body */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
