import React from 'react';
import { useSelector } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import './Loading.scss';
export default function Loading() {
	const { loading } = useSelector((state) => state.misc);
	return (
		<>
			{loading ? (
				<div className='loading'>
					<CircleLoader color='rgba(243, 101, 34)' loading={true} />
				</div>
			) : (
				<></>
			)}
		</>
	);
}
