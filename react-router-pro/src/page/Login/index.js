import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            我是登录页
            <button onClick={() => navigate('/article')}>跳转到文章页</button>
            <button onClick={() => navigate('/article?id=123&name=ruru')}>searchParams参数传递</button>
            <button onClick={() => navigate('/article/1001')}>params参数传递</button>
        </div>
    )
}
export default Login