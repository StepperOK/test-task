import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const products = [
  { userId: 1, title: "apple", body:"bodybody", id: 1 },
  { userId: 2, title: "orange", body:"bodybody", id: 2 },
  { userId: 3, title: "banana", body:"bodybody", id: 3 },
  { userId: 4, title: "peach", body:"bodybody", id: 2 },
  { userId: 5, title: "carrot", body:"bodybody", id: 1 },
  { userId: 6, title: "grapes", body:"bodybody", id: 4 },
  { userId: 7, title: "mango", body:"bodybody", id: 1 },
  { userId: 8, title: "potatoe", body:"bodybody", id: 3 },
  { userId: 9, title: "onion", body:"bodybody", id: 3 },
  { userId: 10, title: "apple", body:"bodybody", id: 1 },
  { userId: 11, title: "apple", body:"bodybody", id: 1 },
  { userId: 12, title: "orange", body:"bodybody", id: 2 },
  { userId: 13, title: "banana", body:"bodybody", id: 3 },
  { userId: 14, title: "peach", body:"bodybody", id: 2 },
  { userId: 15, title: "carrot", body:"bodybody", id: 1 },
  { userId: 16, title: "grapes", body:"bodybody", id: 4 },
  { userId: 17, title: "mango", body:"bodybody", id: 1 },
  { userId: 18, title: "potatoe", body:"bodybody", id: 3 },
  { userId: 19, title: "apple", body:"bodybody", id: 1 },
  { userId: 20, title: "orange", body:"bodybody", id: 2 },
  { userId: 21, title: "banana", body:"bodybody", id: 3 },
  { userId: 22, title: "peach", body:"bodybody", id: 2 },
  { userId: 23, title: "carrot", body:"bodybody", id: 1 },
  { userId: 24, title: "grapes", body:"bodybody", id: 4 },
  { userId: 25, title: "mango", body:"bodybody", id: 1 },
  { userId: 26, title: "potatoe", body:"bodybody", id: 3 }
];

const columns = [
  {
    dataField: "userId",
    text: "userId",
    sort: true
  },
  {
    dataField: "title",
    text: "title",
    editable: false
  },
  {
    dataField: "body",
    text: " body",
    editable: false,
  },
  {
    dataField: "id",
    text: "id",
    sort: true,
    editable: false,
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
