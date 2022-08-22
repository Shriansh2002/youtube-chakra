import { Box } from '@chakra-ui/react';
import Header from './Components/main/Header';
import Sidebar from './Components/main/Sidebar';

function App() {
	return (
		<Box>

			<Header />

			<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} zIndex='200'>

				<Box w='20%'>
					<Sidebar />
				</Box>

				<Box w='100%'>
					{/* <Main/> */}
					Main Content
				</Box>

			</Box>


		</Box >

	);
}

export default App;
