import _ from 'lodash';

const SHIPPING_FEE_CATALOG = {
	firstFee: 5000,
	nextFee: 2000,
};
const ORDER_TYPE_ENUM = [
	{
		id: 0,
		name: 'lorem',
	},

	{
		id: 1,
		name: 'Nhận tại cửa hàng',
	},
	{
		id: 2,
		name: 'Giao hàng tận nơi',
	},
];
const ORDER_STATUS_ENUM = [
	{
		id: 0,
		name: 'lorem',
	},

	{
		id: 1,
		name: 'Đã huỷ',
	},
	{
		id: 2,
		name: 'Chờ xác nhận',
	},
	{
		id: 3,
		name: 'Chờ lấy hàng',
	},
	{
		id: 4,
		name: 'Đã giao',
	},
];
const calculateShippingFee = (numOfStores = 0, orderType = 1) => {
	if (numOfStores !== 0 && orderType == 2) {
		return SHIPPING_FEE_CATALOG.firstFee + (numOfStores - 1) * SHIPPING_FEE_CATALOG.nextFee;
	}
	return 0;
};

const groupCarts = (rawCarts = []) => {
	const grouppedCarts = _.groupBy(rawCarts, 'product.storeName');
	return grouppedCarts;
};
export { groupCarts, ORDER_TYPE_ENUM, ORDER_STATUS_ENUM, calculateShippingFee };
