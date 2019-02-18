import React, { Component } from "react";
import { Table, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { getMotionSensorData } from "../../actions/deviceActions";
import PropTypes from "prop-types";

class MotionSensor extends Component {
  componentDidMount() {
    this.props.getMotionSensorData();
  }

  render() {
    const { motionData } = this.props.devicesData;
    let motionDataItems;
    if (motionData === null) {
      motionDataItems = null;
    } else {
      if (motionData.length > 0) {
        motionDataItems = motionData.map(item => (
          <Table.Row key={item._id}>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell>{item.sensor1}</Table.Cell>
            <Table.Cell>{item.sensor2}</Table.Cell>
          </Table.Row>
        ));
      }
    }

    return (
      <div
        style={{ minHeight: "100vh", marginTop: "50px", marginRight: "20px" }}
      >
        <Header as="h1">Motion sensor</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Sensor 1</Table.HeaderCell>
              <Table.HeaderCell>Sensor 2</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{motionDataItems}</Table.Body>
        </Table>
      </div>
    );
  }
}

MotionSensor.propTypes = {
  getMotionSensorData: PropTypes.func.isRequired,
  devicesData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  devicesData: state.devices
});

export default connect(
  mapStateToProps,
  { getMotionSensorData }
)(MotionSensor);
