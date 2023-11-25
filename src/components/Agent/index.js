import {useRef, useState} from "react";
import { ANSWERS } from '../../constants/index'
import agentImg from '../../assets/agent.png'
import audioMp3 from '../../assets/audio/zh-CN-XiaoxiaoNeural-storyline01-usecase01.mp3'
import './index.css'

export const Agent = () => {
  const [msg, setMsg] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [audioSrc,setAudioSrc] = useState(audioMp3)
  const audioRef = useRef(null)

  //语音识别
  const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  const newRecognition = new SpeechRecognition()
  newRecognition.lang = 'zh-CN';
  newRecognition.continuous = true;
  newRecognition.interimResults = false;//true;

  newRecognition.onresult = ({ results }) => {
    const { transcript, confidence } = results[results.length - 1][0];
    setMsg(transcript)
    setShowModal(true)
    // if(ANSWERS[transcript]) {
    //   // 播放录音
    // }
    setAudioSrc(audioMp3)
    audioRef.current.play()
  }
  newRecognition.onend = () => { newRecognition.start() }

  const handleClick = () => {
    newRecognition.start()
  }


  return (<div>
    <button onClick={handleClick}>开始</button>
    <div className={['agent-modal', showModal? 'fade-in': ''].join(' ')}>
      {msg}
      <div className="agent-icon">
        <img src={agentImg}/>
      </div>
      <audio ref={audioRef} >
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </div>
  </div>)
}
