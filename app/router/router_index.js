//第三方组件
import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory,Link} from 'react-router';
 //自定义组件
import signIn from '../components/signIn'
import signUp from '../components/signUp'

import child_index from '../components/child/child_index'
import systemSet from '../components/child/systemSet'
import userInof  from '../components/child/userInfo'


class Roots extends Component{
	render(){
		return (
			<div>
				{/*头部*/}
				<div className='main-header'>
					 <a href="" className="logo"> 
				      <span className="logo-mini"><b>R</b>C</span> 
				      <span className="logo-lg">灵兰系统管理</span>
				    </a>
				    <nav className="navbar navbar-static-top"> 
				      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
				        <span className="sr-only">切换导航</span>
				      </a>
				   </nav>
				</div>
				{/*左侧菜单*/}
				<div className='main-sidebar'>
					<section className="sidebar">
						<div className="user-panel">
					        <div className="pull-left image">
					         头像
					        </div>
					        <div className="pull-left info">
					          <p>黑猫</p>
					          <a href="#"><i className="fa fa-circle text-success"></i> 在线</a>
					        </div>
					     </div>
						 <ul className="sidebar-menu">
						 	<li className="header">主导航</li>
						 	<li  className="treeview">
						 		<Link to="/" className="active">
							 		<i className="fa fa-dashboard"></i> <span>默认首页</span> 
							 	</Link>
						 	</li>
						 	<li><Link to="/userinfo" className="active">用户信息</Link></li>
						 	<li><Link to="/systemset" className="active">系统设置</Link></li>
						 </ul>
					 </section>
				</div>
				{/*内容部分*/}
				<div className="content-wrapper">
					<section className="content">
				        {this.props.children}
				    </section>
				</div>
				{/*底部*/}
				<footer className="main-footer">
				    <div className="pull-right hidden-xs">
				       版本号1.0
				    </div>
				    <strong>Copyright &copy; 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
				    reserved.
			  </footer>
			</div> 
		)
	}
}
const RouteConfig=(
	<Router history={hashHistory}>
		 <Route path="/" component={Roots}>
             <IndexRoute component={child_index} /> 
             <Route path="userinfo" component={userInof} />
             <Route path="systemset" component={systemSet} />
        </Route>   
        
        <Route path="signin" component={signIn} />
       	<Route path="signup" component={signUp} />
	</Router>
)

//导出路由
export default RouteConfig;