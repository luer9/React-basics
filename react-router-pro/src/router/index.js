import Login from '../page/Login'
import Article from '../page/Article'
import { createBrowserRouter} from 'react-router-dom'
import Layout from '../page/Layout'
import Board from '../page/Board'
import About from '../page/About'
import NotFound from '../page/NotFound'

// 1. 创建router实例对象并且配置路由对应关系

const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>
    },
    { 
      path: '/article/:id',
      element: <Article/>
    },
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          // 默认二级路由
          index: true,
          element: <Board />
        },
        {
          path: 'about',
          element: <About />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  

export default router