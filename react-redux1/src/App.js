import {useSelector, useDispatch} from 'react-redux'
import {inscrement, decrement, addTonNum} from './store/modules/counterStore'
import { fetchChannelList } from './store/modules/channelStore'
import { useEffect } from 'react'
function App() {
  const {count} = useSelector(state => state.counter)
  const {channelList} = useSelector(state => state.channel)
  console.log(channelList.data)
  const dispatch = useDispatch()
  // 使用 useEffect触发异步请求
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{ count }</span>
      <button onClick={() => dispatch(inscrement())}>+</button>

      <button onClick={() => dispatch(addTonNum(10))}>add to 10</button>

      <button onClick={() => dispatch(addTonNum(20))}>add to 20</button>

      <ul>
         {channelList.map(item => <li key = {item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
