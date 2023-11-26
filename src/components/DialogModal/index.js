import agentImg from "../../assets/agent.png";
import agentImgInquire01 from "../../assets/agent-inquire-01.png";
import agentImgInquire02 from "../../assets/agent-inquire-02.png";
import agentImgwarning from "../../assets/agent-safety-warning.png";
import agentImgTired from "../../assets/agent-inquire-tired.png";
import agentImgSad from "../../assets/agent-inquire-sad.png";
import './index.css'


export const DialogModal = ({ showModal, msg, agentIconState }) => {
  return (
    <div className={[showModal ? 'agent-modal' : 'agent-modal-invisible'].join(' ')}>
      <AgentIcon state={agentIconState} />
      <p>
        {msg}
      </p>
    </div>)
}

export const AgentIcon = ({ state, isVisible = true, onIconClick }) => {
  let agentImgSrc = agentImg
  switch (state) {
    case 'inquire1':
      agentImgSrc = agentImgInquire01
      break;
    case 'inquire2':
      agentImgSrc = agentImgInquire02
      break;
    case 'warning':
      agentImgSrc = agentImgwarning
      break;
    case 'tired':
      agentImgSrc = agentImgTired
      break;
    case 'sad': 
      agentImgSrc = agentImgSad
      break;
    default:
      agentImgSrc = agentImg
      break;
  }
  return (
    <div className={isVisible ? 'agent-icon' : 'agent-icon-invisible'} >
      <img src={agentImgSrc} onClick={onIconClick} />
    </div>)
}

export const Background = ({ children, isActive }) => {
  return (<div className={isActive ? 'backgound-active' : 'backgound-inactive'}>
    {children}
  </div>)
}