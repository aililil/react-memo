import React, { Component } from 'react'
import { formatReactClass } from '../../utils/utils'
import './index.css'

export default class Picker extends Component {

  state = {
    dataArry: [],
    text: null,
    // 下拉选择器开关
    pickerSwitch: false,
    // 是否使用下拉选择器
    showPicker: true,
    // 是否使用上下一步
    showPointer: true,

  }

  componentDidMount () {
    this.init()
  }

  render () {
    const { text, pickerSwitch, showPointer, dataArry, showPicker } = this.state
    const _class = formatReactClass({
      text: [
        'text',
        showPicker ? 'text-after' : null
      ]
    })

    return (
      < div className="header" >
        {
          /* 左箭头 */
          showPointer
            ? <p
              className='pointer'
              onClick={() => this.pointerOnClick(-1)}
            >
              &lt;
            </p>
            : null
        }

        <div className={_class.text} onClick={this.pickerOnclick}>
          <p>{text}</p>
          {
            /* 下拉选择框 */
            showPicker
              ? <ul className="picker" style={{ display: pickerSwitch ? null : 'none' }}>
                {dataArry.map(i =>
                  <li
                    style={{ backgroundColor: text === String(i) ? '#eee' : null }}
                    onClick={event => this.choose(event)}
                    key={i}
                  >
                    {i}
                  </li>
                )}
              </ul>
              : null
          }
        </div>
        {
          /* 右箭头 */
          showPointer
            ? <p
              className='pointer'
              onClick={() => this.pointerOnClick(1)}
            >
              &gt;
            </p>
            : null
        }

      </div>
    )
  }

  init () {
    const { defaultText, dataArry } = this.props
    let text;
    if (dataArry.findIndex(i => i === defaultText) > -1) {
      text = defaultText
    } else {
      text = dataArry[0]
    }
    this.setState({
      dataArry,
      text,
    })
  }

  pickerOnclick = () => {
    const { pickerSwitch } = this.state
    this.setState({ pickerSwitch: !pickerSwitch })
  }

  choose = event => {
    const text = event.target.innerText
    this.setState(
      {
        text,
        pickerSwitch: false,
      },
      this.props.onChange
    )
  }

  pointerOnClick = el => {
    const { text, dataArry } = this.state
    const preIndex = dataArry.findIndex(el => String(el) === String(text))
    const nextIndex = preIndex + el
    let res;
    if (nextIndex > -1 && nextIndex < dataArry.length) {
      res = dataArry[nextIndex]
    }
    if (nextIndex <= -1) {
      res = dataArry[dataArry.length - 1]
    }
    if (nextIndex >= dataArry.length) {
      res = dataArry[0]
    }
    this.setState(
      { text: res },
      this.props.onChange
    )
  }
}
