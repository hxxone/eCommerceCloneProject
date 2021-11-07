import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/Sidebar.jsx/Sidebar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/pages/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import "./app.css"
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from './components/pages/newProduct/NewProduct';



function App() {
	return (
		<Router>
			<Topbar />
			<div className="container">
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/users">
						<UserList />
					</Route>
					<Route path="/user/:userId">
						<User />
					</Route>
					<Route path="/newUser">
						<NewUser />
					</Route>
					<Route path="/products">
						<ProductList />
					</Route>
					<Route path="/product/:productId">
						<Product />
					</Route>
					<Route path="/newProduct">
						<NewProduct/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
