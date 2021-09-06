import React from 'react';
import '../App.css';

const Posts = ({ posts, loading }) => {
    // Во время загрузки данных появится надпись "Loading..."
    if (loading) {
        return <h2>Loading...</h2>;
    }

    // Возвращаем таблицу
    return (
        <table className="posts__table">
            {posts.map(post => (
                <tr className="posts__cell">
                    <td key={post.id} className="posts__item">
                    <h3 className="posts__title">{post.title}</h3>
                    <p className="posts__body">{post.body}</p>
                    </td>
                </tr>
            ))}
        </table>
    )
}

export default Posts;