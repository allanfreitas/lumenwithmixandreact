import React, { Component, PropTypes } from 'react';

import { formatBytes } from 'kui';

class NameForm extends React.Component {

  static propTypes = {
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    isLoading: false,
  }

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('Formated:', formatBytes(this.state.value));
    // alert('A name was submitted: ' + this.state.value);
    if (this.props.isLoading) {
      this.setState({ isLoading: true });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="try">
          Name:
          <input
            name="try"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
