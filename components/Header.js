import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.actionSS.addTodoMe(text);
      this.props.actionSS.saveToCloud();
      // console.log("Header->", text);
    }
  }

  render() {
    console.debug("Header.js");
    return (
      <header className="header">
          <h1>todos</h1>
          <TodoTextInput newTodo
          todoaction={this.props.actionSS}
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    )
  }
}

Header.propTypes = {
  actionSS: PropTypes.object.isRequired
}

export default Header
