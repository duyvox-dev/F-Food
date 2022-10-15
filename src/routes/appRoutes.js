import ThemeLayout from '../HOC/ThemeLayout';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import HomePage from '../pages/Homepage/Homepage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';
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
		path: '/order-history',
		component: <ThemeLayout Component={OrderHistoryPage} />,
	},
	{
		path: '*',
		component: <ThemeLayout Component={NotFoundPage} />,
	},
];
