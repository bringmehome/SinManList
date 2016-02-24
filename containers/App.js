// 智能组件和木偶组件，因为本文主要是介绍Redux，
// 对这个感兴趣的同学可以看一下这篇文章Smart and Dumb Components。
// 本项目中在结构上会把智能组件放在containers中，木偶组件放于components中。
// 

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/todos'

class App extends Component {
  render() {
    console.debug("App.js");
    const { todos, actions } = this.props;
    // console.log("App->", actions.addTodo);
    return (
      <div>
        <Header actionSS={actions}/>
        <MainSection todos={todos} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
