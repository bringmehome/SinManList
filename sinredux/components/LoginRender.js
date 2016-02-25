import React, { Component, PropTypes } from 'react'

class LoginRender extends Component {
  constructor(props, context) {
      super(props, context);
      console.debug("LoginRender", this.props.todos);
      this.state = {
          phone: this.props.phone || '',
          password: this.props.password || ''
      }
  }

  handleSubmit(e) {
      const text = e.target.value.trim()
      if(e.target.type == "text"){
        if (e.which === 13) {
            this.setState({ phone: text })
        }
      }else if(e.target.type == "password"){
            this.setState({ password: text })
      }
  }

  handleChange(e) {
      if(e.target.type == "text"){
            this.setState({ phone: e.target.value })
      }else if(e.target.type == "password"){
            this.setState({ password: e.target.value })
      }
  }

  handleBlur(e) {
      console.log('handleBlur -- > ' + e.target.value);
  }

  handleSaveMessge() {
      console.log('handleSaveMessge  phone-- > ' + this.state.phone);
      console.log('handleSaveMessge  password-- > ' + this.state.password);
      this.props.sinaction.login(this.state.phone, this.state.password);
  }


    render() {
        return ( 
            <div>
              <input type = 'text'
                      value = { this.state.phone }
                      autoFocus = "true"
                      placeholder = { this.props.phone }
                      onBlur = { this.handleBlur.bind(this) }
                      onChange = { this.handleChange.bind(this) }
                      onKeyDown = { this.handleSubmit.bind(this) }/> 
              <br />
              <br />
              <input type = 'password'
                      value = { this.state.password }
                      placeholder = { this.props.password }
                      onBlur = { this.handleBlur.bind(this) }
                      onChange = { this.handleChange.bind(this) }
                      onKeyDown = { this.handleSubmit.bind(this) }/> 
              <br />
              <br />
              <button onClick = { this.handleSaveMessge.bind(this) }> 登录 </button> 
            </div>
        )
    }
}

LoginRender.propTypes = {
    password: PropTypes.string,
    phone: PropTypes.string,
    sinaction: PropTypes.object.isRequired
}

export default LoginRender
