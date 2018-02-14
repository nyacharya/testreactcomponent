import _ from "lodash";
import React, { Component } from "react";
import { postData, editData } from "../../actions/postdata";
import { getDetail } from "../../../productdetail/actions/getdetaildata";
import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";
import { renderTextField, renderNumberField, renderSelect, RadioSelectValueField } from "../form";
import { brand } from "../../../../constant";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataval: null,
      firstname: null,
      isedit: false,
    };
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      this.setState({
        isedit: true,
      });
    }
    this.props.getDetail(this.props.match.params.id);
  }


  componentWillReceiveProps(nextProps, props) {
    if (nextProps.savedData) {
      this.setState({
        dataval: nextProps.savedData.postdata,
      });
    }
  }

  onSubmit(event){
    if (this.state.isedit) {
      this.props.editData(event);
    }
    else {
      this.props.postData(event);
    }
  }

  getBrand (cell, row, rowIndex){
    return (_.filter(brand,  {  "value": row.brand })[0] ? _.filter(brand,  {  "value": row.brand })[0].label : "");
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const columns = [{
      dataField: "name",
      text: "Name",
    }, {
      dataField: "brand",
      formatter: this.getBrand,
    }, {
      dataField: "price",
      text: "Price",
    }, {
      dataField: "quantity",
      text: "Quantity",
    }];
    return (
      <div>

        {this.state.dataval ?
          <BootstrapTable keyField='id' pagination={paginationFactory()} data={this.state.dataval} columns={columns} />
          :
          <div>
            <center><h2> {this.state.isedit ? "Edit Product" : "Add Product"} </h2></center>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-horizontal">
              <div className="form-body">
                <Field
                  name="name"
                  component={renderTextField}
                  label="Name"
                  placeholder="Enter Product Name"
                />
                <Field
                  name="brand"
                  component={renderSelect}
                  label="Brand"
                  options={brand}
                />
                <Field
                  name="price"
                  component={renderNumberField}
                  label="Price"
                  placeholder="Enter Price"
                />
                <Field
                  name="quantity"
                  component={renderNumberField}
                  label="Quantity"
                  placeholder="Enter Quantity"
                />
              </div>
              <center><button type="submit" className="btn btn-primary btn-lg btn-block"> {this.state.isedit ? "Edit" : "Add"} </button></center>


            </form>
          </div>
        }
        {/* {this.state.dataval ?
          <div>
            <table>
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Brand  </th>
                  <th> Price  </th>
                  <th> quantity </th>
                </tr>
              </thead>
              {this.state.dataval ?
                this.state.dataval.map((value, index) => <tr>
                  <td>{value.name}</td>
                  <td>{_.filter(brand,  {  "value": value.brand })[0] ? _.filter(brand,  {  "value": value.brand })[0].label : ""}</td>
                  <td>{value.price}</td>
                  <td>{value.quantity}</td>
                </tr>
                )
                :
                ""}
            </table>
          </div> : ""
        } */}
        <Link to="/products"> {this.state.isedit ? "Back to list" : "Go to list"} </Link>
      </div>

    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    savedData: state.postdata,
    vallength: state.postdata ? state.postdata.postdata ? state.postdata.postdata.length : "" : "",
    loading: state.postdata.isLoading,
    initialValues: state.getdetail ? state.getdetail.detaildata : "",
  };
}

AddProduct = reduxForm({
  form: "add_product",
  // validate,
})(AddProduct);

export default connect(mapStateToProps, { postData, editData, getDetail })(AddProduct);
