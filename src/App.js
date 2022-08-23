import { Box } from '@chakra-ui/react';
import Header from './Components/main/Header';
import Main from './Components/main/Main';
import Sidebar from './Components/main/Sidebar';

function App() {
	return (
		<Box>

			<Header />

			<Box display={'flex'} flexDir={'row'} zIndex='200'>

				<Box w='20%'>
					<Sidebar />
				</Box>

				<Box w='80%'>
					<Main />
				</Box>

			</Box>

		</Box >
	);
}

export default App;
