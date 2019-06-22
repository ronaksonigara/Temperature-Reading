import React from 'react';
import Form from './Form';
import Graph from './Graph';


class TemperatureReading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      graphActive: false,
      x: [], y: [],
      isFetching: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isFetching: true });
    fetch('/file', {
      method: 'POST',
      body: this.state.file
    })
      .then(res => res.json())
      .then((data) => this.setState({ x: data[0], y: data[1], graphActive: true, isFetching: false }))
      .catch(err => console.log(err));

  }

  onFileChange = (e) => {
    const file = e.currentTarget.files[0];
    this.setState({ file: file })
  };

  handleCloseModal = () => {
    this.setState({ graphActive: false });
  }

  render() {
    const {
      graphActive,
      x,
      y,
      isFetching,
    } = this.state;
    return (
      <React.Fragment>
        <Form
          onFileChange={this.onFileChange}
          handleSubmit={this.handleSubmit}
          isFetching={isFetching}
        />
        {graphActive &&
          <Graph isActive={graphActive} dataX={x} dataY={y} handleClose={this.handleCloseModal} />
        }
      </React.Fragment>
    )
  }
}

export default TemperatureReading;