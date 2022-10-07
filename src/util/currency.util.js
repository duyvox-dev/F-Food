const vndCurrencyFormat = (rawPrice) => {
	return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(rawPrice);
};

export { vndCurrencyFormat };
