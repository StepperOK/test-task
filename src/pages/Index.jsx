// Импорт хуков
import React, { useState, useEffect } from "react";
import "../App.css";

// Импорт axios для получения данных с сервера и стилей bootstrap
import axios from "axios";

// Импорт bootstart таблицы и стилей
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const columns = [
  {
    dataField: "id",
    text: "id",
    editable: false,
    headerStyle: () => {
      return { width: "5%", textAlign: "center" };
    },
  },
  {
    dataField: "userId",
    text: "userId",
    headerStyle: () => {
      return { width: "7%", textAlign: "center" };
    },
  },
  {
    dataField: "title",
    text: "title",
    editable: false,
    headerStyle: () => {
      return {textAlign: "center" };
    },
  },
  {
    dataField: "body",
    text: " body",
    editable: false,
    headerStyle: () => {
      return {textAlign: "center" };
    },
  },
];
function Index() {
  // Массив записей
  const [posts, setPosts] = useState([]);
  // Загрузка данных
  const [loading, setLoading] = useState(false);
  // Номер страницы по умолчанию

  // Количество записей на странице
  const [postsPerPage] = useState(5);

  // Запрашиваем данные
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);


  const { SearchBar } = Search;
  
    /* Отображение компонентов */
  
  return (
    <div className="container">
      <ToolkitProvider search>
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable
            
              striped
              hover
              pagination={paginationFactory({
                sizePerPage: 5,
                showTotal: true,
              })}
              {...props.baseProps}
              bootstrap4
              keyField="id"
              data={posts}
              columns={columns}
              
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}

export default Index;
