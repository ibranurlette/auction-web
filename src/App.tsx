import { Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/Auth/Sign-up";
import { SignIn } from "./pages/Auth/Sign-in";
import { Layout } from "./pages/Layout";
import { Beranda } from "./pages/Beranda";
import { Profile } from "./pages/Profile";
import { Message } from "./pages/Message";
import { Explore } from "./pages/Explore";

function App() {
	return (
		<Routes>
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route
				path="/"
				element={
					<Layout>
						<Beranda />
					</Layout>
				}
			/>
			<Route
				path="/explore"
				element={
					<Layout>
						<Explore />
					</Layout>
				}
			/>
			<Route
				path="/pesan"
				element={
					<Layout>
						<Message />
					</Layout>
				}
			/>
			<Route
				path="/profile"
				element={
					<Layout>
						<Profile />
					</Layout>
				}
			/>
		</Routes>
	);
}

export default App;
