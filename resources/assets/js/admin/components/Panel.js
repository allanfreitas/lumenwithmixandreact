import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import NameForm from './NameForm';

export default class Panel extends React.Component {

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
              <div className="panel-heading">Panel Component</div>

              <div className="panel-body">
                <h3>SomeTitle H3 AdminRoot</h3>
                <p style={{ color: 'green' }}>GREEN</p>
                <p style={{ color: 'red' }}>RED</p>
                <p style={{ color: 'blue' }}>BLUE</p>
                <p style={{ color: 'brown' }}>BROWN</p>
                <NameForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('adminroot')) {
  ReactDOM.render(<Panel />, document.getElementById('adminroot'));
}
