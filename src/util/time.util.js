import moment from 'moment';
import { dayConstants } from '../constansts/constants';
const getDayString = (lastCheckoutTime) => {
	const newLastCheckoutTime = moment(lastCheckoutTime, 'HH:mm').format('HH:mm');
	const now = moment().format('HH:mm');

	const minutes = moment(now, 'HH:mm').minutes() - moment(newLastCheckoutTime, 'HH:mm').minutes();
	const hours = moment(now, 'HH:mm').hours() - moment(newLastCheckoutTime, 'HH:mm').hours();
	if (hours > 0) return dayConstants.NGAY_MAI;
	else if (hours == 0 && minutes > 0) {
		return dayConstants.NGAY_MAI;
	}
	return dayConstants.HOM_NAY;
};
const getIsValidDate = (arriveTime, checkoutTime) => {
	const newArriveTime = moment(arriveTime, 'HH:mm').format('HH:mm');
	const now = moment().format('HH:mm');
	const minutes = moment(newArriveTime, 'HH:mm').minutes() - moment(now, 'HH:mm').minutes();
	const hours = moment(newArriveTime, 'HH:mm').hours() - moment(now, 'HH:mm').hours();
	if (hours > 0) {
		return true;
	} else if (hours == 0) {
		if (minutes >= 20) return true;
	}
	return false;
};
export { getIsValidDate, getDayString };
