import ThemeLayout from '../HOC/ThemeLayout';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import HomePage from '../pages/Homepage/Homepage';
import SearchProductPage from '../pages/SearchProductPage/SearchProductPage';

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
		path: '/searchproduct',
		component: <ThemeLayout Component={SearchProductPage} />,
	},
	{
		path: '*',
		component: <ThemeLayout Component={NotFoundPage} />,
	},
];
