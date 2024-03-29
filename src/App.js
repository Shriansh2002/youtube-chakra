// pages
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import ChannelPage from './pages/ChannelPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Header from './Components/main/Header';
import Sidebar from './Components/main/Sidebar';

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.scss';

function App() {
	return (
		<BrowserRouter>
			<Box>
				<Header />
				<Box display={'flex'} flexDir={'row'} zIndex='200'>

					<Box w='15%'>
						<Sidebar />
					</Box>

					<Box w='85%'>
						<Routes>
							<Route exact path='/' element={<Homepage />} />
							<Route path="user/:id" element={<ChannelPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</Box>

				</Box>
			</Box>
		</BrowserRouter>
	);
}

export default App;
