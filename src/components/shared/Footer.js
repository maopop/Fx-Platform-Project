import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className='az-footer ht-40'>
          <div className='container ht-100p pd-t-0-f'>
            <div className='d-sm-flex justify-content-center justify-content-sm-between py-2 w-100'>
              <span className='text-muted text-center text-sm-left d-block d-sm-inline-block'>
                Copyright 2021
              </span>
            </div>
          </div>
          {/* container */}
        </div>
        {/* az-footer */}
      </div>
    );
  }
}

export default Footer;
