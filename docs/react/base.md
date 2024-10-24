# es6

// es6: ECMAScript6  2015年发布的语法
// ESLint： 规范约束代码

## webpack

// webpack 的作用，以及打包。

## babel

// 将最新的javascript转换为老版本的javascript
// 替代者：swc esbuild  rolldown rollup rspack farm
// babel.config.js
// [babel官网](https://www.babeljs.cn/docs/configuration)

## prettier

prettier

### CommonJS 跟 ES Modules

1.导入导出
CommonJS: module.exports require()
ES Modules: export import

2.加载方式
CommonJS: require() 动态引入
ES Modules: import() 动态引入，返回一个promise

``` javascript
  import('./moduleA').then(module => {
    // 使用 module
  });
```

3.缓存机制
CommonJS 模块加载后会被缓存，而 ES Modules 默认不缓存，除非明确指定。
