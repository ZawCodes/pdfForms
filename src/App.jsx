// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MAYBANK from "./pages/MAYBANK";
import UOB from "./pages/UOB";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MAYBANK />} />
				<Route path="/uob" element={<UOB />} />
			</Routes>
		</Router>
	);
}

export default App;
