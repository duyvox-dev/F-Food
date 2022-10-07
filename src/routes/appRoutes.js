import ThemeLayout from '../HOC/ThemeLayout';
import HomePage from '../pages/Homepage/Homepage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import HomePage from '../pages/Homepage/Homepage';
export const appRoutes = [
	{
		path: '/',
		component: <ThemeLayout Component={HomePage} />,
	},
	{
		path: '/detail/:id',
		component: <ThemeLayout Component={ProductDetailPage} />,
	},
	{
		path: '/order',
		component: <ThemeLayout Component={OrderPage} />,
	},
	{
		path: '*',
		component: <ThemeLayout Component={NotFoundPage} />,
	},
];
