import {useEffect, useRef} from "react"
import './index.css'
import musicImg from '../../assets/music-image.png'
import btnGroup from '../../assets/btn-group.png'
import musicSrc from '../../assets/windy.mp3'


export const MusicPlayer = ({showMusic}) => {
  const musicRef = useRef(null)

  useEffect(() => {
    if(musicRef.current && showMusic) {
      musicRef.current.src = musicSrc
      musicRef.current.play()
    }
  }, [showMusic,musicRef])

  return showMusic && (<div className='music-player'>
    <div className='music-info'>
      <img src={musicImg} width='100px' height='100px' />
      <div className='music-name'>
        <div className='name'>Windy Hill</div>
        <div>Ryan Gosling</div>
      </div>
    </div>
    <img className='btn-group' src={btnGroup} width='200px' />
    <audio ref={musicRef} >
      <source type="audio/mpeg" />
    </audio>
  </div>)
}
