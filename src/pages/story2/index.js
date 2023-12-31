import { useEffect, useRef, useState } from "react";
import agentImg from '../../assets/agent.png'
import './index.css'
import { AgentIcon, Background, DialogModal } from "../../components/DialogModal";

import usecase01Dialog01 from '../../assets/audio/storyline02/zh-CN-XiaoxiaoNeural-storyline02-usecase01-dialog-01.mp3'
import usecase01Dialog02 from '../../assets/audio/storyline02/zh-CN-XiaoxiaoNeural-storyline02-usecase01-dialog-02.mp3'
import usecase01Dialog03 from '../../assets/audio/storyline02/zh-CN-XiaoxiaoNeural-storyline02-usecase01-dialog-03.mp3'

import usecase02Dialog01 from '../../assets/audio/storyline02/zh-CN-XiaoxiaoNeural-storyline02-usecase02-dialog-01.mp3'
import usecase02Dialog02 from '../../assets/audio/storyline02/zh-CN-XiaoxiaoNeural-storyline02-usecase02-dialog-02.mp3'
import usecase02Dialog03 from '../../assets/audio/storyline02/zh-CN-XiaoxiaoNeural-storyline02-usecase02-dialog-03.mp3'

import crash from '../../assets/crash.mp3'

export const Story2 = () => {
  const [msg, setMsg] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [agentIconState, setAgentIconState] = useState('default')
  const [isStart, setIsStart] = useState(false)
  const [isActive, setisActive] = useState(false)
  useEffect(() => {
    setTimeout(() => {
    }, 1000)
  })
  const audioRef = useRef(null)

  const start = () => {
    setIsStart(true)
    setisActive(true)
    usecaseO1(setShowModal, setMsg, audioRef);
  }

  function usecaseO1(setShowModal, setMsg, audioRef) {
    setShowModal(true);
    setAgentIconState('inquire1')
    setMsg("嗨Eric，你是不是喝酒了？检测到驾车轨迹不稳车辆摇晃异常，有酒驾风险，建议尽快停车。需要帮你联系最近的代驾吗？");
    audioRef.current.src = usecase01Dialog01;
    audioRef.current.play();
    setTimeout(() => {
      setMsg("额，你在说什么？");
    }, 15000);

    setTimeout(() => {
      setMsg("酒驾有危险，需要对自己和他人负责。建议在200米前方停车。第二次确认需要代驾吗？");
      setAgentIconState('warning')
      audioRef.current.src = usecase01Dialog02;
      audioRef.current.play();

    }, 18000);

    setTimeout(() => {
      setAgentIconState('inquire2')
      setMsg("不需要，我没醉。");
    }, 28000);

    setTimeout(() => {
      setAgentIconState('inquire1')
      setMsg("那我很抱歉了，要小心驾驶哦");
      audioRef.current.src = usecase01Dialog03;
      audioRef.current.play();
      usecaseO2(setShowModal, setMsg, audioRef);
    }, 30000);
  }

  function usecaseO2(setShowModal, setMsg, audioRef) {
    setTimeout(() => {
      setAgentIconState('inquire2')
      setMsg("啊！");
      setTimeout(() => {
        audioRef.current.src = crash;
        audioRef.current.play();
      }, 1000);
    }, 3000);

    setTimeout(() => {
      audioRef.current.src = usecase02Dialog01;
      audioRef.current.play();
      setAgentIconState('sad')
      setMsg("Eric你还清醒吗？检测到发生了车祸碰撞，需要为你报警吗？");
    }, 10500);

    setTimeout(() => {
      audioRef.current.src = usecase02Dialog02;
      audioRef.current.play();
      setAgentIconState('sad')
      setMsg("Eric你受伤了，系统已自动拨打120急救电话。");
    }, 20000);

    setTimeout(() => {
      audioRef.current.src = usecase02Dialog03;
      audioRef.current.play();
      setAgentIconState('sad')
      setMsg("已为你拨打120，预计5分钟后救援到");
    }, 28000);

    setTimeout(() => {
      setMsg("");
      setShowModal(false)
    }, 32000);
  }


  return (<div className='story-page' >
    <Background isActive={isActive} />
    <AgentIcon className={'agent-icon'} state={'default'} isVisible={isActive ? false : true} onIconClick={start} />
    <DialogModal showModal={showModal} msg={msg} agentIconState={agentIconState} />
    <audio ref={audioRef} >
      <source type="audio/mpeg" />
    </audio>
  </div>)
}

