const baseURL = 'https://ffptprojectapi20221008031045.azurewebsites.net/api/v1.0';

const apiLinks = {
	customer: {
		login: `${baseURL}/customer/login`,
		getCustomer: `${baseURL}/customer`,
		update: `${baseURL}/customer`,
	},
	product: {
		getAllProduct: `${baseURL}/product-in-menu/GetProductInMenuByTimeSlot`,
		getProductDetail: `${baseURL}/product-in-menu/GetProductInMenuById`,
		getProductByCategory: `${baseURL}/product-in-menu/GetProductByCategory`,
		getProductByMenu: `${baseURL}/product-in-menu/GetProductInMenuByMenu`,
		searchProduct: `${baseURL}/product-in-menu/SearchProduct`,
	},
	menu: {
		getMenuByTimeSlot: `${baseURL}/menu/GetMenuByTimeSlot`,
	},
	category: {
		getAllCategory: `${baseURL}/category/GetListCategory`,
	},
	order: {
		createOrder: `${baseURL}/order/CreateOrder`,
		getListOrderByOrderStatus: `${baseURL}/order/GetListOrderByOrderStatus`,
		getOrderDetail: `${baseURL}/order/`,
		updateOrderStatus: `${baseURL}/order/`,
	},

	settings: {
		getListTimeSlot: `${baseURL}/settings/GetListTimeslot`,
		getRoomList: `${baseURL}/settings/GetRoomList`,
	},
};
export default apiLinks;
