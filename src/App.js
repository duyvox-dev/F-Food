import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { appRoutes } from './routes/appRoutes';

function App() {
	return (
		<div className='App'>
			<Helmet>
				<title>F-Food</title>
			</Helmet>
			<BrowserRouter>
				<Routes>
					{appRoutes.map((route, index) => {
						return <Route key={index} path={route.path} element={route.component} />;
					})}
				</Routes>
			</BrowserRouter>
			{/* <h1>HomePage</h1> */}
		</div>
	);
}

export default App;
