import React from "react"

const Commentary = props =>

    <React.Fragment>
        {props.comments.map(comment => {
            const {id, name, email, body} = comment;
            return (
                <div key={id} className="comment">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{body}</p>
                </div>
            )
        })}
    </React.Fragment>

export default Commentary;