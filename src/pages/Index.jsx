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
    dataField: "userId",
    text: "userId",
  },
  {
    dataField: "title",
    text: "title",
    editable: false,
  },
  {
    dataField: "body",
    text: " body",
    editable: false,
  },
  {
    dataField: "id",
    text: "id",
    editable: false,
  },
];
function Index() {
  // Массив записей
  const [posts, setPosts] = useState([]);
  // Загрузка данных
  const [loading, setLoading] = useState(false);
  // Номер страницы по умолчанию
  const [currentPage, setCurrentPage] = useState(1);
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

  // Получение index последней записи
  const indexOfLastPost = currentPage * postsPerPage;
  // Получение index первой записи
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Получение текущей записи
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Изменение номера страницы
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { SearchBar } = Search;
  {
    /* Отображение компонентов */
  }
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
