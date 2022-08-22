import { Box } from '@chakra-ui/react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
	return (
		<Box mx={4} mt={4}>

			<Header />

			<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >

				<Box w='20%'>
					<Sidebar />
				</Box>

				<Box w='100%'>
					{/* <Main/> */}
					Main Content
				</Box>

			</Box>


		</Box>

	);
}

export default App;
