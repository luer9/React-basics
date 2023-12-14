import {useEffect, useState} from 'react'
const URL = 'http://127.0.0.1:80/api/get'

function App() {
  const [lis, setList] = useState([])
  useEffect(() => {
    // 获取列表
    async function getData() {
      const res = await fetch(URL)
      const ans = await res.json()
      console.log(ans)
      setList(ans.data)
    }
    getData()
  }, [])
  return (
    <div >
     this is app
     {lis.map(item => <li key = {item.id}> {item.name} </li>)}
    </div>
  );
}

export default App;
