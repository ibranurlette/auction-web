// import "./App.css";
import { SignUp } from "./pages/Auth/Sign-up";
import { SignIn } from "./pages/Auth/Sign-in";
import { Layout } from "./pages/Layout";
import { Profile } from "./pages/Profile";
import { Beranda } from "./pages/Beranda";

function App() {
	return (
		<div className="w-screen">
			<Layout>
				<Beranda />
			</Layout>
		</div>
	);
}

export default App;
