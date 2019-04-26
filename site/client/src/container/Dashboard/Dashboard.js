import React, { Component } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import { Grid, Header } from "semantic-ui-react";
import {
  getClimateData,
  getDevicesData,
  getOccupancyData,
  getPowerData
} from "../../actions/deviceActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getClimateData();
    this.props.getDevicesData();
    this.props.getOccupancyData();
    this.props.getPowerData();
  }

  componentWillReceiveProps(nextProps) {
    this.props.getClimateData();
    this.props.getDevicesData();
    this.props.getOccupancyData();
    this.props.getPowerData();
  }

  render() {
    const { climateData } = this.props.devicesData;
    const { devicesData } = this.props.devicesData;
    const { occupancyData } = this.props.devicesData;
    const { powerData } = this.props.devicesData;
    let temperature;
    let humidity;
    if (climateData === null) {
      temperature = null;
      humidity = null;
    } else {
      if (undefined !== climateData && climateData.length > 0) {
        temperature = Object.values(climateData)[0].temperature;
        humidity = Object.values(climateData)[0].humidity;
      }
    }
    let bulb_state;
    let fan_state;
    if (devicesData === null) {
      bulb_state = null;
      fan_state = null;
    } else {
      if (undefined !== devicesData && devicesData.length > 0) {
        bulb_state = Object.values(devicesData)[0].bulb_state;
        fan_state = Object.values(devicesData)[0].fan_state;
      }
    }
    let occupancy;
    if (occupancyData === null) {
      occupancy = null;
    } else {
      if (undefined !== occupancyData && occupancyData.length > 0) {
        occupancy = Object.values(occupancyData)[0].occupancy;
      }
    }
    let power;
    let current;
    if (powerData === null) {
      power = null;
      current = null;
    } else {
      if (undefined !== powerData && powerData.length > 0) {
        power = Object.values(powerData)[0].power;
        current = Object.values(powerData)[0].current;
      }
    }
    return (
      <div>
        <TopMenu />
        <Grid>
          <Grid.Column width={2}>
            <LeftMenu />
          </Grid.Column>
          <Grid.Column
            width={10}
            style={{ paddingTop: "200px", paddingLeft: "300px" }}
          >
            <Grid columns="two">
              <Grid.Row>
                <Grid.Column style={{ paddingBottom: "100px" }}>
                  <Header as="h1">Climate</Header>
                  <Header as="h1" color="grey">
                    Temperature: {temperature}
                  </Header>
                  <Header as="h1" color="grey">
                    Humidity: {humidity}
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <h1>Devices</h1>
                  <Header as="h1" color="grey">
                    Fan state: {fan_state}
                  </Header>
                  <Header as="h1" color="grey">
                    Bulb state: {bulb_state}
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <h1>Occupancy</h1>
                  <Header as="h1" color="grey">
                    Occupancy: {occupancy}
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <h1>Power</h1>
                  <Header as="h1" color="grey">
                    Current: {current}
                  </Header>
                  <Header as="h1" color="grey">
                    Power: {power}
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getClimateData: PropTypes.func.isRequired,
  getDevicesData: PropTypes.func.isRequired,
  getOccupancyData: PropTypes.func.isRequired,
  getPowerData: PropTypes.func.isRequired,
  devicesData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  devicesData: state.devices
});

export default connect(
  mapStateToProps,
  { getClimateData, getDevicesData, getOccupancyData, getPowerData }
)(Dashboard);
