import React, { useState } from "react"


function Likes({video}) {
    const [likes, setLikes] = useState(0)
    const [downLikes, setDownLikes] = useState(0)
    // const {upvotes, downvotes} = video

    function handleLikeClick() {
        setLikes(likes + 1)
    }

    function downClick() {
        setDownLikes(downLikes - 1)
    }

    return (
        <div>
            <button onClick={handleLikeClick}>{likes} Likes</button>
            <button onClick={downClick}>{downLikes} Down Likes</button>
        </div>
    )
}


export default Likes

