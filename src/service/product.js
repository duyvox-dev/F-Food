import apiLinks from '../util/apiLink';
import { httpService } from '../api/http.service';
const getAllProduct = (timeSlot) => {
	return httpService.get(`${apiLinks.product.getAllProduct}?timeSlotId=${timeSlot}&Page=1&PageSize=999`);
	// return httpService.get(
	// 	'https://ffptprojectapi20221008031045.azurewebsites.net/api/v1.0/product-in-menu/GetProductInMenuByTimeSlot?timeSlotId=2&Page=1&PageSize=999'
	// );
};
const getProductDetail = (id) => {
	return httpService.get(`${apiLinks.product.getProductDetail}/?Id=${id}`);
};

const getProductByCategory = (timeSlot, categoryId) => {
	return httpService.get(
		`${apiLinks.product.getProductByCategory}?cateId=${categoryId}&timeSlotId=${timeSlot}&Page=1&PageSize=999`
	);
};
const getProductByMenu = (menuId) => {
	return httpService.get(`${apiLinks.product.getProductByMenu}?menuId=${menuId}&Page=1&PageSize=999`);
};

const searchProduct = async (timeSlot, searchText) => {
	return httpService.get(
		`${apiLinks.product.searchProduct}?searchString=${searchText}&timeSlotId=${timeSlot}&Page=1&PageSize=999`
	);
};

const productService = {
	getAllProduct,
	getProductDetail,
	getProductByCategory,
	searchProduct,
	getProductByMenu,
};
export default productService;
