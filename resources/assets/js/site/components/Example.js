import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends React.Component {

  static propTypes = {
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    isLoading: false,
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">Example Component</div>
              <div className="panel-body">
                {'I\'m an example component! - Try-TwoThings Tree'}
                <p style={{ color: 'green' }}>GREEN</p>
                <p style={{ color: 'red' }}>RED</p>
                <p style={{ color: 'white' }}>WHITE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (window.document.getElementById('siteroot')) {
  ReactDOM.render(<Example />, window.document.getElementById('siteroot'));
}
