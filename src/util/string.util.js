const formatPhoneNumber = (rawPhoneNumber) => {
	if (rawPhoneNumber)
		return `${rawPhoneNumber.substring(0, 4)} ${rawPhoneNumber.substring(4, 7)} ${rawPhoneNumber.substring(7, 10)}`;
	else return null;
};
export { formatPhoneNumber };
