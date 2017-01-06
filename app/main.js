//通用
import React, {Component, PropTypes} from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

//导入css
import "./lib/bootstrap/css/bootstrap.min.css" 
import "./lib/adminui/css/font-awesome.min.css"
import "./lib/adminui/css/ionicons.min.css"
import "./lib/adminui/css/AdminLTE.min.css"
import "./lib/adminui/css/skins/_all-skins.min.css"

import "./sass/index"

//第三方插件
import './lib/bootstrap/js/bootstrap'
import './lib/fastclick/fastclick'
import './lib/slimScroll/jquery.slimscroll.min'
import './lib/adminui/js/app.min'


//自定义
import reducer from './reducer/reducer_index'
import router from './router/router_index'
 
//定义我们的store对象,并把合并reducer，和中间件（中间件使得reducer可以返回函数）作为参数传入
const store=createStore(reducer,applyMiddleware(thunk));
store.subscribe(function () {
//监听action触发
//console.log(store.getState());
console.log(2222);
});  

ReactDom.render(
<Provider store={store}>
	{router}
</Provider>
, document.getElementById('app'))

  