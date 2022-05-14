import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Item from './content/Item';
import './index.css';

export default class Frame extends Component {
  state = {
    list: [
      { id: 1, text: '吃饭', done: true },
      { id: 2, text: '睡觉', done: true },
      { id: 3, text: '打代码', done: true }
    ],
  }

  render () {
    return (
      <div className="frame">
        <input
          type="text"
          placeholder="请输入你的任务名,按回车键确认"
          className="focus"
          onKeyUp={this.addList}
        />

        <div className="item-box">
          {this.state.list.map(el =>
            <Item key={el.id} {...el} />
          )}
        </div>

        <div className="footer">
          hahaha
        </div>
      </div>
    )
  }

  addList = event => {
    const { keyCode, target } = event;

    if (keyCode !== 13) return
    if (target.value.trim() === '') return

    const newListItem = { id: nanoid(), text: target.value, done: false }
    const oldList = this.state.list
    this.setState({ list: [newListItem, ...oldList] })
  }
}