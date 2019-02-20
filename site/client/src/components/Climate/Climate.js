import React, { Component } from "react";
import { Table, Header } from "semantic-ui-react";
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
    // console.log(Object.keys(climateData));
    // console.log(climateData.length);

    let climateDataItems;
    if (climateData === null) {
      climateDataItems = null;
    } else {
      if (undefined !== climateData && climateData.length > 0) {
        climateDataItems = climateData.map(item => (
          <Table.Row key={item._id}>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell>{item.temperature}</Table.Cell>
            <Table.Cell>{item.humidity}</Table.Cell>
          </Table.Row>
        ));
      }
    }

    return (
      <div
        style={{ minHeight: "100vh", marginTop: "50px", marginRight: "20px" }}
      >
        <Header as="h1">Digital Humidity and Temperature Sensor</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Temperature</Table.HeaderCell>
              <Table.HeaderCell>Humidity</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{climateDataItems}</Table.Body>
        </Table>
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
