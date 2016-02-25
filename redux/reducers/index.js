// Redux有且只有一个State状态树，为了避免这个状态树变得越来越复杂，
// Redux通过 Reducers来负责管理整个应用的State树，而Reducers可以被分成一个个Reducer。
// Reduce在javascript Array的方法中出现过，只是不太常用。简单快速的用代码样例来回顾一下：
// 回到Redux中来看，整个的状态就相当于从[初始状态]merge一个[action.state]从而得到一个新的状态，
// 随着action的不断传入，不断的得到新的状态的过程。(previousState, action) => newState，
// 注意：任何情况下都不要改变previousState，因为这样View层在比较State的改变时只需要简单比较即可，
// 而避免了深度循环比较。Reducer的数据结构我们可以用immutable-js，
// 这样我们在View层只需要react-immutable-render-mixin插件就可以轻松的跳过更新那些state没有发生改变的组件子树。
// 
// Redux提供的combineReducers函数可以帮助我们把reducer组合在一起，这样我们就可以把Reducers拆分成一个个小的Reducer来管理Store了
// 

import { combineReducers } from 'redux'
import todos from './todos'
console.debug("reduce-->index.js");
const rootReducer = combineReducers({
  todos
})

export default rootReducer
