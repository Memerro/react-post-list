import React from "react"
import {Link} from 'react-router-dom';

const PostList = props =>

    <React.Fragment>
        {props.articles.map(article => {
            const {id, title} = article;
            return (
                <div className="post" key={id}>
                    <Link to={`/post/${id}`}>
                        <h3 key={id}>{title}</h3>
                    </Link>
                </div>
            )
        })}
    </React.Fragment>

export default PostList;