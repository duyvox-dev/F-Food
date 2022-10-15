import ThemeLayout from '../HOC/ThemeLayout';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import HomePage from '../pages/Homepage/Homepage';
import SearchProductPage from '../pages/SearchProductPage/SearchProductPage';
import ProductByCategoryPage from '../pages/ProductByCategoryPage/ProductByCategoryPage';

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
		path: '/search',
		component: <ThemeLayout Component={SearchProductPage} />,
	},
	{
		path: '/category/:id',
		component: <ThemeLayout Component={ProductByCategoryPage} />,
	},
	{
		path: '*',
		component: <ThemeLayout Component={NotFoundPage} />,
	},
];
