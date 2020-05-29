# spa项目构建过程
##### create-react-app 项目搭建教程，手把手教学o(∩_∩)o 

## create-react-app mobile

## npm install antd-mobile --save

## npm install babel-plugin-import --save
##### (按需引入，添加.babelrc)

## npm install dotenv-cli --save-dev
##### (要在命令行中使用，所以使用 dotenv-cli, dotenv可将环境变量从 .env 文件加载到 process.env中。)

## npm install react-app-rewired --save
##### (使用react-app-rewired，安装这个工具后，在项目根目录中新建文件config-overrides.js文件。可以不eject操作webpack)

### 多环境打包配置
##### 根目录下创建 .env.development .env.test .env.production配置文件，用以分环境打包，对应package.json的相关入口
##### 命名规范：REACT_APP_ + '变量' 如：REACT_APP_BASE_URL
##### 调用示例: process.env.REACT_APP_BASE_URL
##### 注意事项: 修改配置文件需要重新运行项目

## npm install react-router-dom --save

## npm install axios --save

## npm install redux --save

## npm install redux-saga --save

##### 中间件的选择：redux-thunk VS redux-saga

##### redux-thunk的优缺点
##### 优点：简单，学习成本低
##### 缺点：使得action不易维护。
##### （1）action的形式不统一
##### （2）就是异步操作太为分散，分散在了各个action中

##### redux-saga的优缺点
##### 优点：
##### （1）集中处理了所有的异步操作，异步接口部分一目了然
##### （2）action是普通对象，这跟redux同步的action一模一样
##### （3）通过Effect，方便异步接口的测试
##### （4）通过worker 和watcher可以实现非阻塞异步调用，并且同时可以实现非阻塞调用下的事件监听
##### （5） 异步操作的流程是可以控制的，可以随时取消相应的异步操作。
##### 缺点：太复杂，学习成本较高

## npm install redux-devtools-extension --save

## npm install redux-logger --save-dev 

## npm install http-proxy-middleware --save-dev
##### (引入本地开发所需要的反向代理,创建 src/setupProxy.js 文件)

## 开始配置vw 移动端可以按照设计图直接写px自动适配的神器
## npm install postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-viewport-units cssnano cssnano-preset-advanced postcss-preset-env --save-dev
## npm install react-app-rewire-postcss --save-dev
##### (这里要注意，使用antd这UI框架的时候，已经设置了关键字'am'不进行vw处理，所以命名样式类名的时候应该避免关键词'am')
##### (安装完需要配置config-overrides.js文件)

## npm install node-sass --save-dev 

# ----- 暂时配置到这里 ------

## npm install moment --save
##### (日期处理类库)
