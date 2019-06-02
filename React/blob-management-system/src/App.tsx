import React from 'react';
import './App.css';
import Login from './containers/Login';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* 判断是否有登录，如果没登录，就到登录页面 */}
      <Login />
      {/* 登录了，就进入首页 */}
    </div>
  );
}

export default App;
