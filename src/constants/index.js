import dialog03 from '../assets/audio/storyline01/zh-CN-XiaoxiaoNeural-storyline01-usecase01-dialog-03.mp3'

export const ANSWERS = {
  '你好': dialog03,
  '是的': '好的，为您导航到公司，预计二十分钟后到达',

}

export const STORY2_ANSWERS = {
  '早啊Taycan，我们现在出发去公司吧！': '../assets/audio/storyline01/zh-CN-XiaoxiaoNeural-storyline01-usecase01-dialog-01.mp3',
  '开始': dialog03,
}

export const AUTO_DETECTION = {
  fatigueDriving: '检测到您已驾驶超过4小时，前方12km处是临潼服务区，建议主人及时休息，避免疲劳驾驶',
  drinkDriving: '检测到车身偏移摇晃，行车轨迹不正，主人您可能醉酒，建议立即靠路边安全停车'
}
