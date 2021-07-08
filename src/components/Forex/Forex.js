import React from 'react';
import { Table } from 'react-bootstrap';

import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

export const Dashboard = () => {
  return (
    <div>
      <div className='container p-md-0'>
        <div className='az-content-body'>
          <div className='az-dashboard-one-title'>
            <div>
              <div className='az-content-breadcrumb'>
                <span>Home</span>
                <span>Forex</span>
              </div>
              <h2 className='az-content-title'>Forex Dashboard</h2>
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
          <div>
            <div className='row row-sm mg-b-20'>
              <div className='col-lg-7 ht-lg-100p'>
                <div className='card card-table-one'>
                  <div className='az-content-label mg-b-5'>
                    Hoverable Rows Table
                  </div>
                  <p className='mg-b-20'>
                    To enable a hover state on table rows
                  </p>

                  <div className='table-responsive'>
                    <Table hover className='mg-b-0'>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Daily</th>
                          <th>Monthly</th>
                          <th>Yearly</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope='row'>FX Spot & Cat</th>
                          <td>$3320,800</td>
                          <td>$32440,800</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <th scope='row'>FX Option</th>
                          <td>$77320,800</td>
                          <td>$67320,800</td>
                          <td>$15670,750</td>
                        </tr>
                        <tr>
                          <th scope='row'>Global</th>
                          <td>$21320,800</td>
                          <td>$98320,800</td>
                          <td>$9987986,000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 mg-t-20 mg-lg-t-0'>
                <div className='card card-table-one'>
                  <h6 className='card-title'>What pages do your users visit</h6>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th className='wd-6p'>&nbsp;</th>
                          <th>Paire de devise</th>
                          <th>spot rate</th>
                          <th>Trend</th>
                          <th>Evolution Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <i
                              style={{ paddingTop: '5px' }}
                              className='flag-icon flag-icon-eu flag-icon-squared'></i>
                            <i
                              style={{ paddingBottom: '5px' }}
                              className='flag-icon flag-icon-us flag-icon-squared'></i>
                          </td>
                          <td>
                            <strong>EUR/USD</strong>
                          </td>
                          <td>
                            <strong style={{ color: '#dc3545' }}>1,19</strong>
                          </td>
                          <td>
                            <i
                              style={{ fontSize: '25px' }}
                              className='icon ion-md-trending-down tx-danger'></i>
                          </td>
                          <td>15.09%</td>
                        </tr>
                        <tr>
                          <td>
                            <i
                              style={{ paddingTop: '5px' }}
                              className='flag-icon flag-icon-eu flag-icon-squared'></i>
                            <i
                              style={{ paddingBottom: '5px' }}
                              className='flag-icon flag-icon-ma flag-icon-squared'></i>
                          </td>
                          <td>
                            <strong>EUR/MAD</strong>
                          </td>
                          <td>
                            <strong style={{ color: '#ffc107' }}>1,19</strong>
                          </td>
                          <td>
                            <i
                              style={{ fontSize: '30px' }}
                              className='icon  ion-ios-remove tx-warning'></i>
                          </td>
                          <td>7.99%</td>
                        </tr>{' '}
                        <tr>
                          <td>
                            <i
                              style={{ paddingTop: '5px' }}
                              className='flag-icon flag-icon-us flag-icon-squared'></i>
                            <i
                              style={{ paddingBottom: '5px' }}
                              className='flag-icon flag-icon-ma flag-icon-squared'></i>
                          </td>
                          <td>
                            <strong>USD/MAD</strong>
                          </td>
                          <td>
                            <strong style={{ color: '#3BB001' }}>0.94</strong>
                          </td>
                          <td>
                            <i
                              style={{ fontSize: '25px' }}
                              className='icon ion-md-trending-up tx-success'></i>
                          </td>
                          <td>15.47%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{' '}
                </div>
              </div>
            </div>
            <div className='row row-sm mg-b-20'>
              <div className='col-lg-7 ht-lg-100p'>
                {' '}
                <div className='card card-table-one'>
                  <Nouislider
                    range={{ min: 40, max: 100 }}
                    start={72}
                    connect
                    className='slider-primary mg-t-25'
                  />
                  <Nouislider
                    range={{ min: 0, max: 100 }}
                    start={92}
                    connect={[10, 155]}
                    className='slider-danger mg-t-25'
                  />
                  <Nouislider
                    range={{ min: 0, max: 100 }}
                    start={43}
                    connect={[true, true]}
                    className='slider-warning mg-t-25'
                  />
                  <Nouislider
                    range={{ min: 0, max: 100 }}
                    start={20}
                    connect
                    className='slider-info mg-t-25'
                  />
                  <Nouislider
                    range={{ min: 10, max: 500 }}
                    start={75}
                    accessibility
                    connect={[true, false]}
                    className='slider-success mg-t-25'
                  />

                  <div className='col-md-6 col-lg-5 mg-lg-l-auto mg-t-20 mg-md-t-0'>
                    <div className='az-traffic-detail-item'>
                      <div>
                        <span>Min</span>
                        <span>Max</span>
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar bg-purple wd-25p'
                          role='progressbar'
                          aria-valuenow='25'
                          aria-valuemin='0'
                          aria-valuemax='100'></div>
                      </div>
                      {/* progress */}
                    </div>
                  </div>
                </div>{' '}
              </div>

              <div className='col-lg-5 mg-t-20 mg-lg-t-0'>
                <div className='card card-table-one'>
                  {' '}
                  <div className='card card-dashboard-pageviews'>
                    <div className='card-header'>
                      <div className='az-content-label mg-b-5'>Flash Info </div>
                      <p className='card-text'>
                        This report is based on 100% of sessions.
                      </p>
                    </div>
                    {/* card-header */}
                    <div className='card-body'>
                      <div className='az-list-item'>
                        <div>
                          <h6>Admin Home</h6>
                          <span>/demo/admin/index.html</span>
                        </div>
                        <div>
                          <h6 className='tx-primary'>7,755</h6>
                          <span>31.74% (-100.00%)</span>
                        </div>
                      </div>
                      {/* list-group-item */}
                      <div className='az-list-item'>
                        <div>
                          <h6>Form Elements</h6>
                          <span>/demo/admin/forms.html</span>
                        </div>
                        <div>
                          <h6 className='tx-primary'>5,215</h6>
                          <span>28.53% (-100.00%)</span>
                        </div>
                      </div>
                      {/* list-group-item */}
                      <div className='az-list-item'>
                        <div>
                          <h6>Utilities</h6>
                          <span>/demo/admin/util.html</span>
                        </div>
                        <div>
                          <h6 className='tx-primary'>4,848</h6>
                          <span>25.35% (-100.00%)</span>
                        </div>
                      </div>
                      {/* list-group-item */}
                      <div className='az-list-item'>
                        <div>
                          <h6>Form Validation</h6>
                          <span>/demo/admin/validation.html</span>
                        </div>
                        <div>
                          <h6 className='tx-primary'>3,275</h6>
                          <span>23.17% (-100.00%)</span>
                        </div>
                      </div>
                      {/* list-group-item */}
                      <div className='az-list-item'>
                        <div>
                          <h6>Modals</h6>
                          <span>/demo/admin/modals.html</span>
                        </div>
                        <div>
                          <h6 className='tx-primary'>3,003</h6>
                          <span>22.21% (-100.00%)</span>
                        </div>
                      </div>
                      {/* list-group-item */}
                    </div>
                    {/* card-body */}
                  </div>
                  {/* card */}
                </div>
              </div>
            </div>

            {/* az-content-body */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
