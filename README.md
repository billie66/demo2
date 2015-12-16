### 安装 react-router

```
npm install --save history@1.13.1 react-router@1.0.0
```

### 组件规范

编写一个 App 组件，文件名为 App.js
```
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>App block</div>
    );
  }
}

export default App;
```

按照以上规范定义的组件，可以正常显示，若按照下面的规范则不可以：

```
import React from 'react'

export class App extends React.Component {
  ...
}
```

### 借助 devtool 配置选项生成 sourcemaps

[devtool](https://webpack.github.io/docs/configuration.html#devtool)

* Chrome and FF 不能更新 sourcemaps, Safari 可以

>Note that sourcemaps won't get updated in [Chrome](https://code.google.com/p/chromium/issues/detail?id=492902) and Firefox due to browser level bugs!

[github issue](https://github.com/survivejs/webpack_react/issues/204)

### node

>npm tip: if you switched Node version and binary packages broke, run "npm rebuild"

### 安装 material-ui

```
npm install --save material-ui
```
