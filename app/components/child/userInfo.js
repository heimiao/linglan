import React, { Component, PropTypes } from 'react';

 class userInfo extends Component{
 	/*componentWillMount (){
		console.log("componentWillMount在渲染前调用,在客户端也在服务端");
	}
	componentDidMount(){
		console.log("componentDidMount:在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)")
	}
	componentWillReceiveProps(){
		console.log("componentWillReceiveProps:在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用");
	}
	componentWillUpdate (){
		console.log("componentWillUpdate:组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用");
	}
	componentDidUpdate  (){
		console.log("componentDidUpdate:在组件完成更新后立即调用。在初始化时不会被调用。");
	}
	componentWillUnmount(){
		console.log("componentWillUnmount:在组件从 DOM 中移除的时候立刻被调用。");
	}*/
	render(){
		return (
			 <h1>用户信息</h1>
		);
	}
}
 
export default userInfo