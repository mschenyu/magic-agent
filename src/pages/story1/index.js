import {Agent} from "../../components/Agent";
import { ANSWERS } from '../../constants/index'

export const Story1 = () => {
  return (<div>
    <Agent dictionary={ANSWERS} />
  </div>)
}
