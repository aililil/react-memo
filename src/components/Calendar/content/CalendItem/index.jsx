import React, { Component } from 'react'
import { formatDate, formatLunarDate, formatReactClass } from '../../../../utils/utils'
import './index.css'

export default class CalendItem extends Component {
  state = {
    //当前组件月份
    month: 0,
    //父级选择的月份
    monthSelected: 0,
    //实际工作日
    work: true,
    //调休日
    sabbatical: false,
    //是否被选中
    checked: false,
    //日期数字
    date: '',
    //阴历日期
    lunarDate: ''
  }

  componentDidMount () {
    this.init()
  }

  render () {
    const { work, sabbatical, month, monthSelected, date, lunarDate } = this.state;
    const { holiday_cn, holiday_today } = this.props;

    let _class = formatReactClass({
      item: [
        'calend-item',
        work ? null : "off-day",
        sabbatical ? "sabbatical" : null,
      ]
    })

    return (
      <div
        className={_class.item}
        style={{
          opacity: month === monthSelected ? "100%" : "30%",
        }}
        onClick={this.checkDate}
      >
        <span className="sign">{work ? '休' : '班'}</span>
        <p className="num-date">{date}</p>
        <p className="lunar-date">{holiday_today !== 2 ? holiday_cn : lunarDate}</p>
      </div >
    )
  }

  init = () => {
    const { week, monthSelected, month, workday, date, lunar_date } = this.props
    //周末
    const weekend = week > 5 ? true : false
    //当天实际工作
    const work = (workday === 1 ? true : false)
    //调休
    const sabbatical = weekend === work

    this.setState({
      work,
      weekend,
      sabbatical,
      monthSelected,
      month: Number(String(month).slice(-2)),
      date: formatDate(String(date)),
      lunarDate: formatLunarDate(String(lunar_date))
    })
  }

  checkDate = () => {
    console.log(this.props);
  }
}
