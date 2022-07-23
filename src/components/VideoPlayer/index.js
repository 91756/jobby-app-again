import ReactPlayer from 'react-player'
import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://www.youtube.com/watch?v=kK9HfKFy4Gs" />
    </div>
  </div>
)
export default VideoPlayer
