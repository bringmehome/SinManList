//   ╔═════════╗       ╔════════╗       ╔═════════════════╗
//   ║ Actions ║──────>║ Stores ║──────>║ View Components ║
//   ╚═════════╝       ╚════════╝       ╚═════════════════╝
//        ^                                      │
//        └──────────────────────────────────────┘
//   注意：图片仅仅是FLUX思想，而不是Facebook的实现
//   在入口文件中，我们需要把App和redux建立起联系。
//   Provider是react-redux提供的组件，它的作用是把store和视图绑定在了一起，
//   这里的Store就是那个唯一的State树。当Store发生改变的时候，整个App就可以作出对应的变化。
//   {() => }是声明了一个返回的函数传进Provider的props.children里，
//   这个方法将会在React的 0.14版本得到简化。


import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import App from './redux/containers/App'
// import configureStore from './redux/store/configureStore'
import App from './sinredux/containers/App'
import configureStore from './sinredux/store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore();
console.debug("index.js");
render( < Provider store = { store } >
    < App / >
    < /Provider>,
    document.getElementById('root')
)
