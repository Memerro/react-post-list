import React from "react"

const Commentary = props =>

    <React.Fragment>
        {props.comments.map(comment => {
            const {id, name, email, body} = comment;
            return (
                <div key={id}>
                    <p key={id}>{name}</p>
                    <p key={id}>{email}</p>
                    <p key={id}>{body}</p>
                </div>
            )
        })}
    </React.Fragment>

export default Commentary;