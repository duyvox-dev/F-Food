import React from 'react';
import ThemeLayout from '../HOC/ThemeLayout';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import HomePage from '../pages/Homepage/Homepage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';
import SearchProductPage from '../pages/SearchProductPage/SearchProductPage';

import OrderDetailPage from '../pages/OrderDetailPage/OrderDetailPage';
import DeliveryOrderPage from '../pages/DeliveryOrderPage/DeliveryOrderPage';
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
		path: '/order-history',
		component: <ThemeLayout Component={OrderHistoryPage} />,
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
		path: 'order-detail/:id',
		component: <ThemeLayout Component={OrderDetailPage} />,
	},
	{
		path: 'order-delivery',
		component: <ThemeLayout Component={DeliveryOrderPage} />,
	},
	{
		path: '*',
		component: <ThemeLayout Component={NotFoundPage} />,
	},
];
