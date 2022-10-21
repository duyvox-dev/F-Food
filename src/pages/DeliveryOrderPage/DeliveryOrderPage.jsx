import React from 'react';
import './DeliveryOrderPage.scss';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { styled } from '@mui/material/styles';
import { vndCurrencyFormat } from '../../util/currency.util';
import Logo7eleven from '../../img/logo7eleven.png'
const CheckoutButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '100%',
	marginTop: '1rem',
	boxShadow: 'inherit',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function DeliveryOrderPage() {
	return (
		<>
			<Container maxWidth='lg' sx={{
                padding: '1rem 0'
            }}>
            <Typography variant='h4' align='center' fontWeight='bold' style={{color: '#F36522'}} >
            Đơn hàng cần giao
			</Typography>
            <div className="content-header">
                <div>Mã đơn: 8468343885</div>
                <div className='sub-content-header'>Giao ngay</div>
            </div>
            <div className='pickup-content'>
                <div className="main-content">
                    <div className='left-content'>
                        <CircleIcon style={{color: '#F36522'}}/>
                        <div>Lấy: Mì Ý Tôm Sốt Bơ Tỏi , Cơm Trộn Poke ,2 Ép Cam ...</div>
                    </div>
                    <div>Trả: <span className='style-price-pickup style-content'>{vndCurrencyFormat(0)}</span></div>
                </div>
                <div className="address-content">
                    <PlaceOutlinedIcon/>
                    <div >Lấy hàng tại: <span className='style-content'>Seven Eleven</span></div>
                    <img src={Logo7eleven} alt="logo" className='logo7eleven'/>
                </div>
            </div>
            <div className='drop-off-content'>
                <div className="main-content">
                    <div className='left-content'>
                        <CircleIcon style={{color: '#00B386'}}/>
                        <div>Giao: N******</div>
                    </div>
                    <div>Thu: <span className='style-price-drop-off style-content'>{vndCurrencyFormat(45000)}</span></div>
                </div>
                <div className="delivery-address">
                    <div className='sub-delivery-address'>
                        <PlaceOutlinedIcon/>
                        <div >Giao hàng tại: <span className='style-content'>Phòng 202</span></div>
                    </div>
                    <div className='time-content'>
                        <CalendarTodayOutlinedIcon/>
                        <div >Nhận hàng: <span className='style-content'>16h, thứ 7(8/10)</span></div>
                    </div>
                </div>
            </div>
            <CheckoutButton size='large' variant='contained'>
			NHẬN ĐƠN
			</CheckoutButton>
			</Container>
		</>
	);
}
