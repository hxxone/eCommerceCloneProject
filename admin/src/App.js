import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NewProduct from './pages/newProduct/NewProduct';
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";



function App() {
	
	return (
		<Router>
			<Topbar/>
			<div className="container">
				<Sidebar/>
				<Switch>
					<Route exact path="/">
						<Home/>
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
