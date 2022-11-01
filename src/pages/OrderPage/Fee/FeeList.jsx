import React from 'react';
import './Fee.scss';
import FeeItem from './FeeItem';
import _ from 'lodash';
export default function FeeList({ fees = {} }) {
	return (
		<div className='fee'>
			<h3 className='fee-heading'>Thanh toán</h3>
			<div className='fee-list'>
				{_.isEmpty(fees) == false ? (
					<>
						{fees?.originCost.cost && fees?.discountCost.cost && fees?.originCost.cost == fees?.discountCost.cost ? (
							<>
								<FeeItem fee={fees?.originCost}></FeeItem>
							</>
						) : (
							<>
								<FeeItem fee={fees?.originCost} dash={true}></FeeItem>
								<FeeItem fee={fees?.discountCost}></FeeItem>
							</>
						)}

						<FeeItem fee={fees?.shippingCost}></FeeItem>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
