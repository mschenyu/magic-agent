import {useEffect, useRef, useState} from "react";
import './index.css'
import story10101 from '../../assets/audio/storyline01/zh-CN-XiaoxiaoNeural-storyline01-usecase01-dialog-01.mp3'
import story10102 from '../../assets/audio/storyline01/zh-CN-XiaoxiaoNeural-storyline01-usecase01-dialog-02.mp3'
import story10103 from '../../assets/audio/storyline01/zh-CN-XiaoxiaoNeural-storyline01-usecase01-dialog-03.mp3'
import story10201 from '../../assets/audio/storyline01/zh-CN-XiaoxiaoNeural-storyline01-usecase02-dialog-01.mp3'
import story10202 from '../../assets/audio/storyline01/zh-CN-XiaoxiaoNeural-storyline01-usecase02-dialog-02.mp3'
import story10203 from '../../assets/audio/storyline01/zh-CN-XiaoxiaoNeural-storyline01-usecase02-dialog-03.mp3'
import story10301 from '../../assets/audio/storyline01/zh-CN-XiaoxiaoNeural-storyline01-usecase03-dialog-01.mp3'
import {DialogModal} from "../../components/DialogModal";

export const Story1 = () => {
  const [started,setStarted] = useState(false)
  const [showModal, setShowMadal] = useState(false)
  const [msg, setMsg] = useState('')
  const audioRef = useRef(null)

  useEffect(() => {
    if(started && audioRef.current) {
      //上班导航
      setTimeout(() => {
        setShowMadal(true)
        setMsg('Eric,早上好！今天周一，要导航去公司吗')
        audioRef.current.src = story10101
        audioRef.current.play()
        audioRef.current.onended = () => {
          setMsg('早啊Taycan～我们现在出发去公司吧！')
        }
      }, 500)
      setTimeout(() => {
        setShowMadal(true)
        setMsg('好的Eric，正在导航去公司，已为你规划至最快的路线，我们出发吧.')
        audioRef.current.src = story10102
        audioRef.current.play()
        audioRef.current.onended = () => {
          setMsg('')
        }
      }, 10000)
      setTimeout(() => {
        setShowMadal(true)
        setMsg('Erirc需要播放你的歌单吗？')
        audioRef.current.src = story10103
        audioRef.current.play()
        audioRef.current.onended = () => {
          setMsg('谢谢，开始播放吧')
        }
      }, 20000)

      // 异常预警
      setTimeout(() => {
        setShowMadal(true)
        setMsg('噢，不妙！刚检测到胎压不稳，建议周末最好去售后检测下问题')
        audioRef.current.src = story10201
        audioRef.current.play()
        audioRef.current.onended = () => {
          setMsg('多谢提醒，那我这周六下午去售后检测吧')
        }
      }, 30000)
      setTimeout(() => {
        setShowMadal(true)
        setMsg('OK，已帮你把行程添加到日程中。需要帮你提前预约吗?')
        audioRef.current.src = story10202
        audioRef.current.play()
        audioRef.current.onended = () => {
          setMsg('谢谢，需要的')
        }
      }, 40000)
      setTimeout(() => {
        setShowMadal(true)
        setMsg('好滴，已帮你预约周六下午2点到4点陆家嘴店售后维修')
        audioRef.current.src = story10203
        audioRef.current.play()
        audioRef.current.onended = () => {
          setMsg('')
        }
      }, 50000)

      //达到目的地
      setTimeout(() => {
        setShowMadal(true)
        setMsg('到达目的地啦，您可以下车去上班啦，我来停车\n')
        audioRef.current.src = story10301
        audioRef.current.play()
        audioRef.current.onended = () => {
          setMsg('好的，下班见')
        }
      }, 60000)

      setTimeout(() => {
        setMsg('')
        setShowMadal(false)
      }, 68000)
    }
  }, [started, audioRef])



  return (<div className='story1-page'>
    <button onClick={() => setStarted(true)}>开始</button>
    <DialogModal showModal={showModal} msg={msg} />
    <audio ref={audioRef} >
      <source type="audio/mpeg" />
    </audio>
  </div>)
}
