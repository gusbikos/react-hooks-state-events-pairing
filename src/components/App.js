import video from "../data/video.js";
import {useState} from "react"
import Likes from "./Likes"
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);
  const [hideComments, setHideComments] = useState(false)

  function showComments() {
      setHideComments(!hideComments)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
    <h1>{video.title}</h1>
    <h3>{video.views} Views | Uploaded {video.createdAt}</h3>
    <Likes video={video.upvotes}/>
    <button onClick={showComments}> {hideComments ? "Show Comments" : "Hide Comments" }</button>
    {hideComments ? null : <Comments comments={video.comments}/> }

    </div>
  );
}

export default App;
