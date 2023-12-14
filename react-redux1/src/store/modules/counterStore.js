import {createSlice} from '@reduxjs/toolkit'
const counterStore = createSlice({
    name: 'counter',
    // 初始化状态
    initialState: {
        count: 0
    },
    // 修改状态的方法 同步方法 支持直接修改
    reducers: {
        inscrement (state) {
            state.count ++
        },
        decrement (state) {
            state.count --
        },
        addTonNum(state, action) {
            state.count = state.count + action.payload
        }
    }
})
// 解构出来actioncreater函数
const {inscrement, decrement, addTonNum} = counterStore.actions
// 获取reducer
const counterReducer = counterStore.reducer
// 导出
export {inscrement, decrement, addTonNum}
export default counterReducer