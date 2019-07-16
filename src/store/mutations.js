import { SOME_INCREMENT } from './mutation-types'
import { SOME_DECREMENT } from './mutation-types'
export default {
    //使用ES6的箭头函数来给count增值
    SOME_INCREMENT:state => state.count ++,
    SOME_DECREMENT:state => state.count --,
}