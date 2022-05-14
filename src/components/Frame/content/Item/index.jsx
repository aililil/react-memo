import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render () {
    const { text, done } = this.props;
    return (
      <div className="item">
        <input type="checkbox"
          defaultChecked={done}
          className="check-box"
        />
        <p>{text}</p>
        <input
          type="button"
          value="删除"
          className="item-btn"
          onClick={this.delete}
        />
      </div>
    )
  }

  delete = () => {
    console.log('hahahaha');
  }
}
