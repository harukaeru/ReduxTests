import React, { Component } from 'react'

class TodoTextInput extends Component {
  render() {
    const { newTodo, onSave, placeHolder } = this.props
    return <div onClick={() => onSave()}>{newTodo}:{placeHolder}</div>
  }
}

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }
  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <TodoTextInput newTodo={true}
          onSave={this.handleSave.bind(this)}
          placeholder='What needs to be done?' />
      </header>
    )
  }
}

export default Header
