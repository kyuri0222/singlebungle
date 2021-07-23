import { React }  from "react";
import { Route, Switch } from 'react-router-dom';
import { Login, Signup, Findpw } from './';
const AuthNav = () => {
	return (
		<>
			<Switch>
				<Route exact path="/login" component={ Login }/>
				<Route exact path="/Signup" component={ Signup }/>
				<Route exact path="/Findpw" component={ Findpw }/>
			</Switch>
		</>
	);
};

export default AuthNav;
