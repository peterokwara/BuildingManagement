import React, { Component } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import SingleLineChartComponent from "../../components/SingleLineChartComponent/SingleLineChartComponent";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { getOccupancyData } from "../../actions/deviceActions";
import PropTypes from "prop-types";

class Occupancy extends Component {
  componentDidMount() {
    this.props.getOccupancyData();
  }

  componentWillReceiveProps(nextProps) {
    this.props.getOccupancyData();
  }

  render() {
    const { occupancyData } = this.props.devicesData;
    let occupancyDataSet;
    // data = Object.keys(climateData).map(item => climateData[item]);
    // console.log(typeof data);
    if (occupancyData === null) {
      occupancyDataSet = null;
    } else {
      if (undefined !== occupancyData && occupancyData.length > 0) {
        occupancyDataSet = Object.keys(occupancyData)
          .sort((a, b) => b - a)
          .map(item => occupancyData[item])
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
            <SingleLineChartComponent
              deviceData={occupancyDataSet}
              title={"Occupancy Data"}
              xaxis={"date"}
              line1={"occupancy"}
              y_axis={"Occupancy Number"}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Occupancy.propTypes = {
  getOccupancyData: PropTypes.func.isRequired,
  devicesData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  devicesData: state.devices
});

export default connect(
  mapStateToProps,
  { getOccupancyData }
)(Occupancy);
