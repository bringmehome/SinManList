// Action向store派发指令，action 函数会返回一个带有 type 属性的 Javascript Plain Object，
// store将会根据不同的action.type来执行相应的方法。addItem函数的异步操作我使用了一点小技巧，
// 使用redux-thunk中间件去改变dispatch，dispatch是在View层中用bindActionCreators绑定的。
// 使用这个改变的dispatch我们可以向store发送异步的指令。
// 比如说，可以在action中放入向服务端的请求(ajax)，也强烈推荐这样去做。
// 

import * as types from '../constants/ActionTypes'

console.debug("action-->")
export function addTodoMe(text) {
	console.log("action text --->", text);

 	// return dispatch => {
  //       console.log("嘿hehe");
  //   };

   return { type: types.ADD_TODO, text }
}

export function deleteTodo(id) {
    return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
    return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
    return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
    return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
    return { type: types.CLEAR_COMPLETED }
}

export function saveToCloud(text) {
    return dispatch => {
        console.log("保存去云端"+text + " Sino");
    }
}

