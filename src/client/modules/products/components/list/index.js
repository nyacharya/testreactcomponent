import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/fetchdata";
import { Link } from "react-router-dom";
import { brand } from "../../../../constant";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataval: null,
    };
  }

  componentWillMount() {
    this.props.fetchData();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({
        dataval: nextProps.data,
      });
    }
  }

  editData(cell, row, rowIndex){
    return (<Link to = {`/edit-product/${row.id}`}> Edit </Link>);
  }

  detailData(cell, row, rowIndex){
    return (<Link to = {`/product/${row.id}`}> Detail </Link>);
  }

  getBrand(cell, row, rowIndex){
    return (_.filter(brand,  {  "value": row.brand })[0] ? _.filter(brand,  {  "value": row.brand })[0].label : "");
  }

  render() {
    const columns = [{
      dataField: "name",
      text: "Name",
    }, {
      dataField: "brand",
      text: "Brand",
      formatter: this.getBrand,
    }, {
      dataField: "price",
      text: "Price",
    }, {
      dataField: "quantity",
      text: "Quantity",
    }, {
      dataField: "id",
      text: "",
      formatter: this.editData,
    }, {
      dataField: "",
      text: "",
      formatter: this.detailData,
    }];
    return (
      <div>
        <center> <h3> List of Products </h3> </center>
        {this.state.dataval ?
          <BootstrapTable keyField='id' pagination={paginationFactory()}
            data={this.state.dataval} columns={columns}
          />
          : ""
        }
        {/* <table className="table">
          <thead>
            <tr>
              <th scope="col"> Name </th>
              <th scope="col"> Brand  </th>
              <th scope="col"> Price  </th>
              <th scope="col"> Quantity </th>
              <th scope="col"></th>
              <th></th>
            </tr>
          </thead>
          {this.state.dataval ?
            this.state.dataval.map((value, index) => <tr>
              <td>{value.name}</td>
              <td>{_.filter(brand,  {  "value": value.brand })[0] ? _.filter(brand,  {  "value": value.brand })[0].label : ""}</td>
              <td>{value.price}</td>
              <td>{value.quantity}</td>
              <td><Link to = {`/product/${value.id}`}> Detail </Link></td>
              <td><Link to = {`/edit-product/${value.id}`}> Edit </Link></td>
            </tr>
            )
            :
            ""}
        </table> */}
        <Link to = "/add-product"> Add Product </Link>
      </div>

    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    data: state.fetchdata.getdata,
  };
}

// Declaration = reduxForm({
//     form: "edit_account_declaration",
//     // validate,
// })(Declaration);

export default connect(mapStateToProps, { fetchData })(ListUsers);
