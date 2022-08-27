// pages
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import ChannelPage from './pages/ChannelPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Homepage />} />
				<Route path="c/:id" element={<ChannelPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
