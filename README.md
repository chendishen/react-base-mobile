This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## spa项目构建过程

# create-react-app mobile

# npm install antd-mobile --save

# npm install babel-plugin-import --save
(按需引入，添加.babelrc)

# npm install dotenv-cli --save-dev
(要在命令行中使用，所以使用 dotenv-cli, dotenv可将环境变量从 .env 文件加载到 process.env中。)

# npm install react-app-rewired --save
(使用react-app-rewired，安装这个工具后，在项目根目录中新建文件config-overrides.js文件。可以不eject操作webpack)

根目录下创建 .env.development .env.test .env.production配置文件，用以分环境打包，对应package.json的相关入口:
命名规范：REACT_APP_ + '变量' 如：REACT_APP_BASE_URL
注意事项: 修改配置文件需要重新运行项目

# ----- 暂时配置到这里 ------

# npm install axios --save

React Hooks(个别使用Hooks语法) 

# npm install redux --save

# npm install redux-saga --save

中间件的选择：redux-thunk VS redux-saga

redux-thunk的优缺点
优点：简单，学习成本低
缺点：使得action不易维护。
（1）action的形式不统一
（2）就是异步操作太为分散，分散在了各个action中

redux-saga的优缺点
优点：
（1）集中处理了所有的异步操作，异步接口部分一目了然
（2）action是普通对象，这跟redux同步的action一模一样
（3）通过Effect，方便异步接口的测试
（4）通过worker 和watcher可以实现非阻塞异步调用，并且同时可以实现非阻塞调用下的事件监听
（5） 异步操作的流程是可以控制的，可以随时取消相应的异步操作。
缺点：太复杂，学习成本较高

# npm install redux-devtools-extension --save

# npm install redux-logger --save-dev 

# npm install moment --save
(日期处理类库)
