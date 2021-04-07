import React, {useState} from "react"
import CommentCard from "./CommentCard";

function Comments({comments}) {

    // props = {comments: [{}, {}], name: "greg"}

    // props.comments = [{}, {}]
    // const {comments, name} = props
    // comments = [{}, {}]



    const createComentCard = () => {
        return comments.map(comment => <CommentCard user={comment.user} comment={comment.comment} />)
    }


    return (
        <div>
            {createComentCard()}
        </div>
    )
    
}

// <button onClick={setSeeComments}></button>

export default Comments