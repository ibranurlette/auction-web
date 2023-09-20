// import "./App.css";
import { SignUp } from "./pages/Auth/Sign-up";
import { SignIn } from "./pages/Auth/Sign-in";
import { Layout } from "./pages/Layout";
import { Beranda } from "./pages/Beranda";
import { Profile } from "./pages/Profile";
import { Message } from "./pages/Message";

function App() {
	return (
		// <div className="w-screen flex flex-col justify-center items-center text-center">
		// 	{/* <SignUp /> */}
		// </div>
		<Layout>
			<Message />
		</Layout>
	);
}

export default App;
