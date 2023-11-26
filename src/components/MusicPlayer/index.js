import {useEffect, useRef, useState} from "react"
import './index.css'
import musicImg from '../../assets/music-image.png'
import btnGroup from '../../assets/btn-group.png'
import musicSrc from '../../assets/windy.mp3'
import musicFull from '../../assets/music-full.jpg'


export const MusicPlayer = ({showMusic, volume=1}) => {
  const [showFull, setShowFull] = useState(false)
  const musicRef = useRef(null)

  useEffect(() => {
    if(musicRef.current && showMusic) {
      musicRef.current.src = musicSrc
      musicRef.current.play()
    }
  }, [showMusic, musicRef])

  useEffect(() => {
    if(musicRef.current && showMusic && volume) {
      musicRef.current.volume = volume
    }
  }, [volume])

  return showMusic && (<>
    <div className='music-player' onClick={() => setShowFull(true)}>
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
    </div>
    {showFull && <img className='full-image' src={musicFull} onClick={() => setShowFull(false)} />}
  </>)
}
