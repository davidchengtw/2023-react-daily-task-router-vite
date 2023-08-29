import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/register';
import Login from './pages/login';
import Todo from './pages/todo';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route exact  path="register" element={<Register />} />
          <Route exact  path="login" element={<Login />} />
          <Route exact  path="todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;

