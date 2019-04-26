import React, { Component } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import LineChartComponent from "../../components/LineChartComponent/LineChartComponent";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { getDevicesData } from "../../actions/deviceActions";
import PropTypes from "prop-types";

class Devices extends Component {
  componentDidMount() {
    this.props.getDevicesData();
  }

  componentWillReceiveProps(nextProps) {
    this.props.getDevicesData();
  }

  render() {
    const { devicesData } = this.props.devicesData;
    let theDevicesDataSet;
    // data = Object.keys(climateData).map(item => climateData[item]);
    // console.log(typeof data);
    if (devicesData === null) {
      theDevicesDataSet = null;
    } else {
      if (undefined !== devicesData && devicesData.length > 0) {
        theDevicesDataSet = Object.keys(devicesData)
          .sort((a, b) => b - a)
          .map(item => devicesData[item])
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
            <LineChartComponent
              deviceData={theDevicesDataSet}
              title={"Devices Data"}
              xaxis={"date"}
              line1={"bulb_state"}
              line2={"fan_state"}
              y_axis={"Devices State"}

            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Devices.propTypes = {
  getDevicesData: PropTypes.func.isRequired,
  devicesData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  devicesData: state.devices
});

export default connect(
  mapStateToProps,
  { getDevicesData }
)(Devices);
