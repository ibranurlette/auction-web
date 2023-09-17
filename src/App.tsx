// import "./App.css";
import { SignUp } from "./pages/Auth/Sign-up";
import { SignIn } from "./pages/Auth/Sign-in";
import { Layout } from "./pages/Layout";
import { Profile } from "./pages/Profile";

function App() {
	return (
		<>
			<Layout>
				<Profile />
			</Layout>
		</>
	);
}

export default App;
