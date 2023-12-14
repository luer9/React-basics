import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channelList: []
    },
    reducers: {
        setChannels(state, action) {
            state.channelList = action.payload
        }
    }
})
// 同步解构
const {setChannels} = channelStore.actions
const reducer = channelStore.reducer

// 异步请求
const fetchChannelList = () => {
    const url = "http://127.0.0.1:80/api/get"
    return async(dispatch) => {
       const res = await axios.get(url)
       dispatch(setChannels(res.data.data))
    }
}

export {fetchChannelList}
export default reducer