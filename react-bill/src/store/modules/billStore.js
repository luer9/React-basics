// 账单列表相关的store

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billStore = createSlice({
    name: 'bill',

    initialState: {
        billList: []
    },
    reducers: {
        // 同步修改方法
        setBillList(state, action) {
            state.billList = action.payload
        },
        // 同步添加账单方法
        addBill(state, action) {
            state.billList.push(action.payload)
        }
    }
})
// 解构 action
const { setBillList, addBill } = billStore.actions

// 编写异步请求
const getBillList = () => {
    return async (dispatch) => {
        const res = axios.get('http://localhost:8888/ka')
        dispatch(setBillList((await res).data))
    }
}
// 异步
const addBillList = (data) => {
    return async(dispatch) => {
        const res = axios.post('http://localhost:8888/ka', data)
        dispatch(addBill((await res).data))
    }
}

export {getBillList, addBillList}

// 导出 reducer
const reducer = billStore.reducer

export default reducer