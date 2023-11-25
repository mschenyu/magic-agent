import agentImg from "../../assets/agent.png";
import './index.css'


export const DialogModal = ({showModal, msg}) => {
  return (<div>
    <div className={['agent-modal', showModal? 'fade-in': ''].join(' ')}>
      {msg}
      <div className="agent-icon">
        <img src={agentImg}/>
      </div>
    </div>
  </div>)
}
