import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<SnackbarProvider
			maxSnack={3}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}>
			<App />
		</SnackbarProvider>
	</Provider>
);
