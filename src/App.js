import React, { useState, useEffect } from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';
import './App.css';

const App = () => {
  const [env, setEnv] = useState('')
  useEffect(() => {
    setEnv(process.env.REACT_APP_BASE_URL)
    console.log(env)
  }, [env])
  return (
    <div>
      <Button type="primary">分环境测试:{env}</Button>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >antd按需引入测试</NavBar>
    </div>
  );
}

export default App;
