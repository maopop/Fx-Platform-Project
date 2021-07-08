import React from 'react';
import { Table } from 'react-bootstrap';
import { Line, Pie } from 'react-chartjs-2';

const FxSpotCAT = () => {
  const sessionsChannelChartData = {
    labels: ['USD', 'EUR', 'MAD'],
    datasets: [
      {
        data: [25, 20, 30],
        backgroundColor: ['#6f42c1', '#007bff', '#17a2b8'],
      },
    ],
  };

  const sessionsChannelChartOptions = {
    cutoutPercentage: 50,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  const LineChartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
        borderColor: '#f10075',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const LineChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
    },
  };
  return (
    <div>
      <div className='container p-md-0'>
        <div className='az-content-body'>
          <div className='ht-20'></div>
          <div className='ht-20'></div>
          <h5 style={{ textAlign: 'center' }}>Fx Spot & CAT</h5>
          <div className='az-dashboard-nav'></div>
          <div className='az-dashboard-one-title'>
            <div className='media'>
              <div className='media-body'>
                <label>La Date</label>
                <h6>Mars 16, 2021</h6>
              </div>
              {/* media-body */}
            </div>
            {/* media */}
            <div className='media'>
              <div className='media-body'>
                <label>MTM CAT</label>
                <h6>454098</h6>
              </div>
              {/* media-body */}
            </div>
            <div className='az-content-header-right'>
              <div className='media'>
                <div className='media-body'>
                  <label>P&L</label>
                  <h6>66090006646,4979</h6>
                </div>
                {/* media-body */}
              </div>
              {/* media */}
              <div className='media'>
                <div className='media-body'>
                  <label>Effet produit</label>
                  <h6>68686868,686</h6>
                </div>
                {/* media-body */}
              </div>
              {/* media */}
              <div className='media'>
                <div className='media-body'>
                  <label>Effet Position</label>
                  <h6>56564646,363</h6>
                </div>
                {/* media-body */}
              </div>
              {/* media */}
            </div>
          </div>
          <div className='ht-20'></div> <div className='ht-20'></div>
          <div className='row row-sm mg-b-20'>
            <div className='col-lg-7 ht-lg-100p'>
              <div className='card card-table-one'>
                <div className='row row-sm'>
                  <div className='col-sm-8 col-md-12'>
                    <div className='az-content-label mg-b-5'>
                      Evolution/Month
                    </div>
                    <p className='mg-b-20'>
                      Below is the basic line chart example.
                    </p>
                    <div className='chartjs-wrapper-demo'>
                      <Line data={LineChartData} options={LineChartOptions} />
                    </div>
                  </div>
                </div>
                {/* row */}
              </div>
              {/* row */}
            </div>{' '}
            <div className='col-lg-5 mg-t-20 mg-lg-t-0'>
              {' '}
              <div className='card card-table-one'>
                <div className='row row-sm'>
                  <div className='col-sm-8 col-md-12'>
                    <div className='az-content-label mg-b-5'>
                      Evolution/Year
                    </div>
                    <p className='mg-b-20'>
                      Below is the basic line chart example.
                    </p>
                    <div className='chartjs-wrapper-demo'>
                      <Line data={LineChartData} options={LineChartOptions} />
                    </div>

                    {/* col-6 */}
                  </div>
                  {/* row */}
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
        <div>
          <div className='row row-sm mg-b-20'>
            <div className='col-lg-7 ht-lg-100p'>
              <div className='card card-table-one'>
                <div className='az-content-label mg-b-5'>
                  Hoverable Rows Table
                </div>
                <p className='mg-b-20'>To enable a hover state on table rows</p>

                <div className='table-responsive'>
                  <Table hover className='mg-b-0'>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nouveau Produit</th>
                        <th>Annulation</th>
                        <th>Modification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>Effet Produit</th>
                        <td>$3320,800</td>
                        <td>$32440,800</td>
                        <td>$320,800</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className='ht-20'></div>
                <div className='ht-20'></div>
                <div className='table-responsive'>
                  <Table hover className='mg-b-0'>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Max Profit</th>
                        <th>Max Loss</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>Effet Produit</th>
                        <td>$32440,800</td>
                        <td>$320,800</td>
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
                        <th>Position</th>
                        <th>Daily</th>
                        <th>Monthly</th>
                        <th>Yearly</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <strong>EUR</strong>
                        </td>
                        <td>
                          <strong style={{ color: '#dc3545' }}>1,19</strong>
                        </td>
                        <td>34</td>
                        <td>15.09%</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <strong>USD</strong>
                        </td>
                        <td>
                          <strong style={{ color: '#ffc107' }}>1,19</strong>
                        </td>
                        <td>98</td>
                        <td>7.99%</td>
                      </tr>{' '}
                      <tr>
                        <td></td>
                        <td>
                          <strong>MAD</strong>
                        </td>
                        <td>
                          <strong style={{ color: '#3BB001' }}>0.94</strong>
                        </td>
                        <td>90</td>
                        <td>15.47%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>{' '}
              </div>
            </div>
          </div>{' '}
        </div>
        <div>
          <div className='row row-sm mg-b-20'>
            <div className='col-lg-7 ht-lg-100p'>
              <div className='card card-dashboard-four'>
                <div className='card-header'>
                  <h6 className='card-title'>Sessions by Channel</h6>
                </div>
                {/* card-header */}
                <div className='card-body row'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div className='chart'>
                      <Pie
                        data={sessionsChannelChartData}
                        options={sessionsChannelChartOptions}
                      />
                    </div>
                  </div>
                  {/* col */}
                  <div className='col-md-6 col-lg-5 mg-lg-l-auto mg-t-20 mg-md-t-0'>
                    <div className='az-traffic-detail-item'>
                      <div>
                        <span>MAD</span>
                        <span>
                          1,320 <span>(25%)</span>
                        </span>
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
                    <div className='az-traffic-detail-item'>
                      <div>
                        <span>USD</span>
                        <span>
                          987 <span>(20%)</span>
                        </span>
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar bg-primary wd-20p'
                          role='progressbar'
                          aria-valuenow='20'
                          aria-valuemin='0'
                          aria-valuemax='100'></div>
                      </div>
                      {/* progress */}
                    </div>
                    <div className='az-traffic-detail-item'>
                      <div>
                        <span>EUR</span>
                        <span>
                          2,010 <span>(30%)</span>
                        </span>
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar bg-info wd-30p'
                          role='progressbar'
                          aria-valuenow='30'
                          aria-valuemin='0'
                          aria-valuemax='100'></div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                </div>
                {/* card-body */}
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
                        <th>Position</th>
                        <th>Daily</th>
                        <th>Monthly</th>
                        <th>Yearly</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <strong>EUR</strong>
                        </td>
                        <td>
                          <strong style={{ color: '#dc3545' }}>1,19</strong>
                        </td>
                        <td>34</td>
                        <td>15.09%</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <strong>USD</strong>
                        </td>
                        <td>
                          <strong style={{ color: '#ffc107' }}>1,19</strong>
                        </td>
                        <td>98</td>
                        <td>7.99%</td>
                      </tr>{' '}
                      <tr>
                        <td></td>
                        <td>
                          <strong>MAD</strong>
                        </td>
                        <td>
                          <strong style={{ color: '#3BB001' }}>0.94</strong>
                        </td>
                        <td>90</td>
                        <td>15.47%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>{' '}
              </div>
            </div>
          </div>{' '}
        </div>
        <div>
          <div className='row row-sm mg-b-20'>
            <div className='col-lg-7 ht-lg-100p'>
              <div className='card card-table-one'>
                <div className='az-content-label mg-b-5'>
                  Hoverable Rows Table
                </div>
                <p className='mg-b-20'>To enable a hover state on table rows</p>
                <Table hover className='mg-b-0'>
                  <thead>
                    <tr>
                      <th></th>
                      <th>MTM CAT</th>
                      <th>Monthly Evolution</th>
                      <th>Yearly Evolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row'>Daily</th>
                      <td>$3320,800</td>
                      <td>$32440,800</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                </Table>
                <div className='ht-20'></div>
                <div className='ht-20'></div>
                <div className='table-responsive'>
                  <Table hover className='mg-b-0'>
                    <thead>
                      <tr>
                        <th></th>
                        <th>P&L</th>
                        <th>Effet Produit</th>
                        <th>Effet Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>Daily</th>
                        <td>$3320,800</td>
                        <td>$32440,800</td>
                        <td>$320,800</td>
                      </tr>
                    </tbody>
                  </Table>{' '}
                </div>

                <div className='table-responsive'></div>
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
                        <th>Position</th>
                        <th>Daily</th>
                        <th>Monthly</th>
                        <th>Yearly</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <strong>EUR</strong>
                        </td>
                        <td>
                          <strong style={{ color: '#dc3545' }}>1,19</strong>
                        </td>
                        <td>34</td>
                        <td>15.09%</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <strong>USD</strong>
                        </td>
                        <td>
                          <strong style={{ color: '#ffc107' }}>1,19</strong>
                        </td>
                        <td>98</td>
                        <td>7.99%</td>
                      </tr>{' '}
                      <tr>
                        <td></td>
                        <td>
                          <strong>MAD</strong>
                        </td>
                        <td>
                          <strong style={{ color: '#3BB001' }}>0.94</strong>
                        </td>
                        <td>90</td>
                        <td>15.47%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>{' '}
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default FxSpotCAT;
