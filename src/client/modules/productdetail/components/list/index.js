import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDetail } from "../../actions/getdetaildata";
import { brand } from "../../../../constant";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
    };
  }

  componentWillMount() {
    this.props.getDetail(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.detaildata) {
      this.setState({
        details: nextProps.detaildata,
      });
    }
  }

  render() {
    return (
      <div>
        <center><h1> Product Detail </h1></center>
        {this.state.details &&
          <div>
            Name : {this.state.details.name}
            <br />
            Brand : {_.filter(brand,  {  "value": this.state.details.brand })[0] ? _.filter(brand,  {  "value": this.state.details.brand })[0].label : ""}
            <br />
            Price: {this.state.details.price}
            <br />
            Quantity: {this.state.details.quantity}
          </div>
        }
        <Link to="/list"> Go to listing </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    detaildata: state.getdetail ? state.getdetail.detaildata : "",
    datais: state.getdetail,
  };
}
export default connect(mapStateToProps, { getDetail })(ProductDetail);

