import React, { Component } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import Climate from "../../components/Climate/Climate";
import LineChartComponent from "../../components/LineChartComponent/LineChartComponent";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { getDhtSensorData } from "../../actions/deviceActions";
import PropTypes from "prop-types";

class DhtSensor extends Component {
  componentDidMount() {
    this.props.getDhtSensorData();
  }

  componentWillReceiveProps(nextProps) {
    this.props.getDhtSensorData();
  }

  render() {
    const { climateData } = this.props.devicesData;
    let climateDataSet;
    // data = Object.keys(climateData).map(item => climateData[item]);
    // console.log(typeof data);
    if (climateData === null) {
      climateDataSet = null;
    } else {
      if (undefined !== climateData && climateData.length > 0) {
        climateDataSet = Object.keys(climateData)
          .sort((a, b) => b - a)
          .map(item => climateData[item])
          .sort((a, b) => b - a);
      }
    }

    return (
      <div>
        <TopMenu />
        <Grid>
          <Grid.Column width={2}>
            <LeftMenu />
          </Grid.Column>
          <Grid.Column width={14}>
            <LineChartComponent deviceData={climateDataSet} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

DhtSensor.propTypes = {
  getDhtSensorData: PropTypes.func.isRequired,
  devicesData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  devicesData: state.devices
});

export default connect(
  mapStateToProps,
  { getDhtSensorData }
)(DhtSensor);
