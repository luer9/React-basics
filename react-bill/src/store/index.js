// 组合子模块 导出store实例

import { configureStore } from "@reduxjs/toolkit";
import billReduce from '@/store/modules/billStore'

const store = configureStore({
    reducer: {
        bill: billReduce
    }
})

export default store