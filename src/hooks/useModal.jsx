import { useState } from 'react';
const useModal = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const closeModal = () => {
		setModalVisible(false);
	};
	const openModal = () => {
		setModalVisible(true);
	};
	return [modalVisible, openModal, closeModal];
};
export default useModal;
