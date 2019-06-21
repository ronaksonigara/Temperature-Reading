import React from 'react';
import Form from './Form';
import Graph from './Graph';

class TemperatureReading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      graphData: [],
      date: [],
      error: {},
      graphActive: false
    }
  }

  // componentWillUpdate(newProps, newState) {
  //   console.log(this.state.graphData, newState.graphData);
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/file', {
      method: 'POST', // or 'PUT'
      body: this.state.file // data can be `string` or {object}!
    })
      .then(res => res.json())
      .then(data => this.setState({ graphData: data, graphActive: true }))
      .then(response => console.log('Success:', response))
      .catch(err => this.setState({ error: err }));
  }

  onFileChange = (e) => {
    // console.log(e.target.files);
    const file = e.currentTarget.files[0];
    this.setState({ file: file })
    console.log(file);
    // fetch('/file', {
    //   method: 'POST', // or 'PUT'
    //   body: file // data can be `string` or {object}!
    // })
    //   .then(res => res.json())
    //   .then(data => this.setState({ date: data }))
    //   .then(response => console.log('Success:', response))
    //   .catch(err => this.setState({ error: err }));
  };

  handleCloseModal = () => {
    this.setState({ graphActive: false });
  }

  render() {
    console.log('data', this.state.graphData);
    const {
      graphActive,
      graphData
    } = this.state;
    return (
      <React.Fragment>
        <Form
          onFileChange={this.onFileChange}
          handleSubmit={this.handleSubmit}
        />
        {graphActive &&
          <Graph isActive={graphActive} data={graphData} handleClose={this.handleCloseModal} />
        }
      </React.Fragment>
    )
  }
}

export default TemperatureReading;