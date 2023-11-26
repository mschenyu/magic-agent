import agentImg from "../../assets/agent.png";
import agentImgInquire01 from "../../assets/agent-inquire-01.png";
import agentImgInquire02 from "../../assets/agent-inquire-02.png";
import agentImgwarning from "../../assets/agent-safety-warning.png";
import './index.css'


export const DialogModal = ({ showModal, msg, onIconClick, agentIconState }) => {
  return (<div>
    <div className={['agent-modal', showModal ? 'fade-in' : ''].join(' ')}>
      {msg}
      <AgentIcon state={agentIconState} onIconClick={onIconClick} />
    </div>
  </div>)
}

export const AgentIcon = ({ state, onIconClick }) => {
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
    default:
      agentImgSrc = agentImg
      break;
  }
  return (
    <div className="agent-icon" >
      <img src={agentImgSrc} onClick={onIconClick}/>
    </div>)
}

export const Background = ({ children, isActive }) => {
  return (<div className={isActive ? 'backgound-active' : 'backgound-inactive'}>
    {children}
  </div>)
}