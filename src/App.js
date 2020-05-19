import React, { useState, useEffect } from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';
import axios from 'axios'
import configureStore  from './redux/store'
import { getListAction } from './redux/actions'
import './App.css';

const store = configureStore();

const App = () => {
  const [env, setEnv] = useState('')
  const [arr, setArray] = useState([])
  useEffect(() => {
    setEnv(process.env.REACT_APP_BASE_URL)
    console.log(env)
    const getArticleList = async ()=>{
      const result= await axios.get('http://api.baidu.com/default/getInfo').then((res) => {
        const data = res.data
        // const action = getListAction(data)
        const action = {
            type:'GET_LIST',
            value:data
        }
        console.log(store)
        store.dispatch(action)
      })
      setArray(result)
   }
   getArticleList()
  }, [env])
  return (
    <div>
      <Button type="primary">分环境测试:{env}</Button>
      <div>{arr}</div>
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
