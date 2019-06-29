import React from 'react';
import classNames from 'classnames';
import Chart from 'chart.js'
import PropTypes from 'prop-types';

const propTypes = {
  dataX: PropTypes.array,
  dataY: PropTypes.array
}

class Graph extends React.Component {

  componentDidMount() {
    this.handleChart();
  }

  handleChart = () => {
    var ctx = document.getElementById('myChart');
    const {
      dataX,
      dataY
    } = this.props;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataX,
        datasets: [{
          data: dataY,
          borderColor: "#3e95cd",
          fill: false
        }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Temperature Reading per month'
        },
        scales: {
          xAxes: [{
            stacked: true
          }]
        }
      }
    });
  }

  render() {
    const {
      handleClose,
      isActive,
    } = this.props;

    let modal = classNames('modal', { 'modal--active': isActive })
    return (
      <div className={modal}>
        <div className="overlay"></div>
        <span className="close-btn" onClick={handleClose}></span>
        <div className="modal-body">
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    )
  }
}

Graph.propTypes = propTypes;

export default Graph;