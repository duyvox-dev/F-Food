import ThemeLayout from '../HOC/ThemeLayout';
import Homepage from '../pages/Homepage/Homepage';
export const appRoutes = [
	{
		path: '/',
		component: <ThemeLayout Component={Homepage} />,
	},
];
