import React from "react"

const PostList = props =>

    <React.Fragment>
        {props.articles.map(article => {
            const {id, title} = article;
            return (
                <div className="post" key={id}>
                    <h3 key={id}>{title}</h3>
                </div>
            )
        })}
    </React.Fragment>

export default PostList;