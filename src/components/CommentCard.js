import React, {useState} from "react"

function CommentCard({user, comment}) {
    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}
 
export default CommentCard