import React from 'react'

// Получаем props из Index
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    // Вычисляем количество страниц
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="main__pagination">
            <ul className="pagination justify-content-center">
                {/* Для каждой страницы получаем элемент списка */}

                {/* Используем bootstrap для красоты*/}
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link pagination__btn">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;