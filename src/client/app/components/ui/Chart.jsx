import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Chart extends React.Component {
  componentDidMount() {
    if (__CLIENT__) { // eslint-disable-line
      const c3 = require('c3');
      this.chart = c3.generate({
        bindto: ReactDOM.findDOMNode(this.refs.chart),
        data: { columns: this.props.columns, type : 'pie' }
      });
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.chart.load({ columns: nextProps.columns });
    }
  }

  render() {
    return (
      <div ref="chart"> </div>
    );
  }
}

Chart.propTypes = {
  columns: PropTypes.array
};

export default Chart;
