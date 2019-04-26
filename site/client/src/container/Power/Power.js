import React, { Component } from "react";
import TopMenu from "../../components/TopMenu/TopMenu";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import LineChartComponent from "../../components/LineChartComponent/LineChartComponent";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { getPowerData } from "../../actions/deviceActions";
import PropTypes from "prop-types";

class Power extends Component {
  componentDidMount() {
    this.props.getPowerData();
  }

  componentWillReceiveProps(nextProps) {
    this.props.getPowerData();
  }

  render() {
    const { powerData } = this.props.devicesData;
    let powerDataSet;
    // data = Object.keys(climateData).map(item => climateData[item]);
    // console.log(typeof data);
    if (powerData === null) {
      powerDataSet = null;
    } else {
      if (undefined !== powerData && powerData.length > 0) {
        powerDataSet = Object.keys(powerData)
          .sort((a, b) => b - a)
          .map(item => powerData[item])
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
              deviceData={powerDataSet}
              title={"Power Data"}
              xaxis={"date"}
              line1={"power"}
              line2={"current"}
              y_axis={"Power(W) and Current(A)"}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Power.propTypes = {
  getPowerData: PropTypes.func.isRequired,
  devicesData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  devicesData: state.devices
});

export default connect(
  mapStateToProps,
  { getPowerData }
)(Power);
