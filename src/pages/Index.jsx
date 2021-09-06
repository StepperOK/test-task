// Импорт хуков
import React, { useState, useEffect } from "react";
import "../App.css";

// Импорт Posts и Pagination из компонентов
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

// Импорт axios для получения данных с сервера и стилей bootstrap
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Table from "../components/Table";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

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

  //  Сохраняем данные из imput
  const [value, setValue] = useState("");

  // Сравнение value с массивом
  // const filterPosts = posts.filter((post) => {
  //   return post.title.toLowerCase().includes(value.toLowerCase());
  // });

  return (
    <div className="container">
      <Table />
      {/* Отображение компонентов */}

      <input
        type="text"
        className="main__input"
        placeholder=""
        onChange={(event) => console.log(event.target.value)}
      ></input>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
}

export default Index;
