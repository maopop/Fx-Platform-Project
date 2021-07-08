import React, { Component } from 'react';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className='container p-md-0'>
          <div className='az-content-body'>
            <div className='az-dashboard-one-title'>
              <div>
                <div className='az-content-breadcrumb'>
                  <span>Home</span>
                  <span>Fixed Income</span>
                </div>
                <h2 className='az-content-title'>Fixed Income Dashboard</h2>
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

            <h1>Fixed Income Dashboard ..</h1>
          </div>
          {/* az-content-body */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
