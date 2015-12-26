### 安装 react-router

```
npm install --save history@1.13.1 react-router@1.0.0
```

### 组件规范

ES6 模块的导出方式可以分为两类：named export && default export

下面是 default export 的实例，
```
// App.jsx
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>App block</div>
    );
  }
}

export default App;

// 在 main.jsx 文件中使用 App 组件

import App from './App.jsx'
```

按照 named export 方式导出模块：

```
// App.jsx
import React, { Component } from 'react';

export class App extends React.Component {
  ...
}

// main.jsx
// 注意模块名必须用花括号括起来
import { App } from './App.jsx'
```

另外，把 React 导入到 ES6 模块并没有标准规则，不过下面的语句，

```
 import React, { Component } from 'react';
```

是多数人都认可的写法，参考 React 论坛中的一篇[帖子](https://discuss.reactjs.org/t/es6-import-as-react-vs-import-react/360)

### 借助 devtool 配置选项生成 sourcemaps

[devtool](https://webpack.github.io/docs/configuration.html#devtool)

* Chrome and FF 不能更新 sourcemaps, Safari 可以

>Note that sourcemaps won't get updated in [Chrome](https://code.google.com/p/chromium/issues/detail?id=492902) and Firefox due to browser level bugs!

[github issue](https://github.com/survivejs/webpack_react/issues/204)

### node

>npm tip: if you switched Node version and binary packages broke, run "npm rebuild"

### 安装 material-ui

```
npm install --save material-ui@0.14.0-rc2
```
