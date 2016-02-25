// import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, SAVETOCLOUD } from '../constants/ActionTypes'
const initialState = [{
    phone: 'Redux Item',
    password: '123456'
}]
export default function todos(state = initialState, action) {
    // switch (action.type) {
    //     case ADD_TODO:
    //         console.debug("reduce-->ADD_TODO.js");

    //         var dd = [{
    //                 id: state.reduce((maxId, todo) => {
    //                     console.log("todo.id", todo.id);
    //                     console.log("maxId", maxId);
    //                     return Math.max(todo.id, maxId);
    //                 }, -1) + 1,
    //                 completed: false,
    //                 text: action.text
    //             },
    //             ...state
    //         ];
    //         console.log("reduce-->ADD_TODO.js", state);
    //         console.log("reduce-->ADD_TODO.js", dd);

    //         return dd;

    //     case DELETE_TODO:
    //         return state.filter(todo =>
    //             todo.id !== action.id
    //         )

    //     case EDIT_TODO:
    //         return state.map(todo =>
    //             todo.id === action.id ?
    //             Object.assign({}, todo, { text: action.text }) :
    //             todo
    //         )

    //     case COMPLETE_TODO:
    //         return state.map(todo =>
    //             todo.id === action.id ?
    //             Object.assign({}, todo, { completed: !todo.completed }) :
    //             todo
    //         )

    //     case COMPLETE_ALL:
    //         console.log("reduce-->COMPLETE_ALL.js");
    //         const areAllMarked = state.every(todo => todo.completed)
    //         return state.map(todo => Object.assign({}, todo, {
    //             completed: !areAllMarked
    //         }))

    //     case CLEAR_COMPLETED:
    //         return state.filter(todo => todo.completed === false)


    //     case SAVETOCLOUD:
    //         return state

    //     default:
    //         console.log("reduce-->default.js");
    //         return state
    // }

            return state
}
