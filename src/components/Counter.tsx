import React, {Component} from "react";
import Control from "./Control";
import Value from "./Value";
import {connect} from "react-redux";
import * as actions from "../reducers";

interface StateProps {
  number: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

type Props = StateProps;

class Counter extends Component<Props>{
  constructor(props:any) {
    super(props);
  }
  render() {
    return(
      <div>
        <Value number={this.props.number}></Value>
        <Control onPlus={this.props.handleIncrement} onSubtract={this.props.handleDecrement}></Control>
      </div>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    number: state.counter.number
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleIncrement: () => {dispatch(actions.increment());},
    handleDecrement: () => {dispatch(actions.decrement());}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);