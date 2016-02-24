import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e) {
    // console.log('handleSubmit');
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange(e) {
    // console.log('handleChange');
    this.setState({ text: e.target.value })
  }

  handleBlur(e) {
    // console.log('handleBlur');
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  handleSaveMessge(){
    console.log('handleSaveMessge'+this.state.text);
    this.props.todoaction.saveToCloud(this.state.text);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSaveMessge.bind(this)}>保存</button>
        <input className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })}
          type="text"
          placeholder={this.props.placeholder}
          autoFocus="true"
          value={this.state.text}
          onBlur={this.handleBlur.bind(this)}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)} />
        </div>
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  todoaction: PropTypes.object.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput
