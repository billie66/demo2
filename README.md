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
