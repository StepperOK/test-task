// Импорт хуков
import React, { useState, useEffect } from "react";
import "../App.css";

// Импорт Posts и Pagination из компонентов
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

// Импорт axios для получения данных с сервера
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Index() {
  // — state values — //

  // Массив записей
  const [posts, setPosts] = useState([]);
  // Загрузка данных
  const [loading, setLoading] = useState(false);
  // Номер страницы по умолчанию
  const [currentPage, setCurrentPage] = useState(1);
  // Количество записей на странице
  const [postsPerPage] = useState(5);

  // Get запрос
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

  return (
    <div className="container">
      <input className="main__input" placeholder=""></input>

      {/* Передача компонентов */}
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
