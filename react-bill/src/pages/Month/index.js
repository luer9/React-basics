// import TwoLineOverview from "@/components/TwoLineOverview"
import { DatePicker, NavBar } from "antd-mobile"
import { useEffect, useMemo, useState} from 'react'
import './index.scss'
import classNames from "classnames"
import dayjs from "dayjs"
import { useSelector } from 'react-redux'
import _ from 'lodash'
import DailyBill from "./components/DayBill"
const Month = () => {


  // 按月做数据的分组
const billList = useSelector(state => state.bill.billList)

const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
    // return出去计算之后的值
}, [billList])

 

  // 控制弹框的打开关闭
const [dateVisible, setDateVisible] = useState(false)
// 控制时间显示
const [currentDate, setCurrentDate] = useState(() => {
  return dayjs(new Date()).format('YYYY-MM')
})

const [currentMonthList, setCurrentMonthlist] = useState([])

const monthResult = useMemo(() => {
  // 支出pay ，收入income，结余
  const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
  const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
  return {
    pay,
    income,
    total: pay + income
  }
}, [currentMonthList])

const onConfirm = (date) => {
  setDateVisible(false)
  const formatDate = dayjs(date).format('YYYY-MM')
  setCurrentMonthlist(monthGroup[formatDate])
  setCurrentDate(formatDate)
}

  
// 当前月
useEffect(() => {
  const nowDate = dayjs(new Date()).format('YYYY-MM')
  // 边界值的控制
  if(monthGroup[nowDate]) {
    setCurrentMonthlist(monthGroup[nowDate])
  }
}, [monthGroup])

// 当前月按照日做分组
const dayGroup = useMemo(() => {
  const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD'))
  const keys = Object.keys(groupData)
  return {
    groupData,
    keys
  }
}, [currentMonthList])

  return (
      <div className="monthlyBill">
        <NavBar className="nav" backArrow={false}>
          月度收支
        </NavBar>
  
        <div className="content">
          <div className="header">
              {/* 时间切换 */}
            <div className="date" onClick={() => setDateVisible(true)}>
              <span className="text">
                {currentDate + ""}月账单
              </span>
              {/* 根据当前弹框状态控制expand类名是否存在 */}
              <span className={classNames('arrow', dateVisible && 'expand')}></span>
            </div>
        {/* 统计区域 */}
          <div className="twoLineOverview">
              <div className="item">
                <span className="money">{monthResult.pay.toFixed(2)}</span>
                <span className="type">支出</span>
              </div>
              <div className="item">
                <span className="money">{monthResult.income.toFixed(2)}</span>
                <span className="type">收入</span>
              </div>
              <div className="item">
                <span className="money">{monthResult.total.toFixed(2)}</span>
                <span className="type">结余</span>
              </div>
            </div>
            {/* 时间选择器 */}
            <DatePicker
              className="kaDate"
              title="记账日期"
              precision="month"
              visible={dateVisible}
              onCancel={() => setDateVisible(false)} // 取消
              onClose={() => setDateVisible(false)} // 蒙层
              onConfirm={onConfirm} // 确定
              max={new Date()}
            
            />
        
            {/* <TwoLineOverview
              pay={overview.pay}
              income={overview.income}
              type="month"
            /> */}
          </div>
          {/* 单日列表统计 */}
          {
            dayGroup.keys.map(key => {
              return <DailyBill key = {key} date = {key} billList={dayGroup.groupData[key]}/>
            })
          }
          
          
          {/* {renderMonthBills()} */}
        </div>
      </div>
    )
}
export default Month