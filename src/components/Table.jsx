import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const products = [
  { userId: 1, name: "apple", price: 1 },
  { userId: 2, name: "orange", price: 2 },
  { userId: 3, name: "banana", price: 3 },
  { userId: 4, name: "peach", price: 2 },
  { userId: 5, name: "carrot", price: 1 },
  { userId: 6, name: "grapes", price: 4 },
  { userId: 7, name: "mango", price: 1 },
  { userId: 8, name: "potatoe", price: 3 },
  { userId: 9, name: "onion", price: 3 },
  { userId: 10, name: "apple", price: 1 },
  { userId: 11, name: "apple", price: 1 },
  { userId: 12, name: "orange", price: 2 },
  { userId: 13, name: "banana", price: 3 },
  { userId: 14, name: "peach", price: 2 },
  { userId: 15, name: "carrot", price: 1 },
  { userId: 16, name: "grapes", price: 4 },
  { userId: 17, name: "mango", price: 1 },
  { userId: 18, name: "potatoe", price: 3 },
  { userId: 19, name: "apple", price: 1 },
  { userId: 20, name: "orange", price: 2 },
  { userId: 21, name: "banana", price: 3 },
  { userId: 22, name: "peach", price: 2 },
  { userId: 23, name: "carrot", price: 1 },
  { userId: 24, name: "grapes", price: 4 },
  { userId: 25, name: "mango", price: 1 },
  { userId: 26, name: "potatoe", price: 3 }
];

function test(row) {
  console.log("row value");
  console.log(row);
}

const columns = [
  {
    dataField: "userId",
    text: "userId",
    sort: true
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true,
    editable: false
  },
  {
    dataField: "dfd",
    isDummyField: true,
    text: "Action 1",
    editable: false,
    formatter: (cellContent, row, rowIndex, extraData) => {
      return (
        <h5>
          <button className="label label-danger" onClick={() => extraData(row)}>
            {row.name}
          </button>
        </h5>
      );
    },
    formatExtraData: test
  },
  {
    dataField: "price",
    text: "Product Price",
    sort: true,
    editor: {
      type: Type.SELECT,
      options: [
        {
          value: 1,
          label: 1
        },
        {
          value: 2,
          label: 2
        },
        {
          value: 3,
          label: 3
        },
        {
          value: 4,
          label: 4
        },
        {
          value: 5,
          label: 5
        }
      ]
    },
    validator: (newValue, row, column) => {
      if (isNaN(newValue)) {
        return {
          valid: false,
          message: "Price should be numeric"
        };
      }
      if (newValue > 5) {
        return {
          valid: false,
          message: "Price should less than 6"
        };
      }
      return true;
    }
  }
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc"
  }
];

export default class Table extends React.Component {
  render() {
    return (
      <ToolkitProvider search>
        {props => (
          <div>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable
              striped
              hover
              pagination={paginationFactory({
                sizePerPage: 5,
                showTotal: true,
                hidePageListOnlyOnePage: true,
              })}
              {...props.baseProps}
              bootstrap4
              keyField="userId"
              data={products}
              columns={columns}
              defaultSorted={defaultSorted}
              cellEdit={cellEditFactory({
                mode: "click",
                blurToSave: true
              })}
            />
          </div>
        )}
      </ToolkitProvider>
    );
  }
}
