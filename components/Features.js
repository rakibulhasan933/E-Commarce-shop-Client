"use client";
import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

function Features() {
	return (
		<div className="flex flex-row px-8 py-8 mx-8 my-8 bg-white rounded">
			<div className="flex items-center justify-center basis-1/4">
				<div className="flex flex-row items-center justify-center">
					<div className="mr-2">
						<LocalShippingOutlinedIcon sx={{ fontSize: 50 }} />
					</div>
					<div>
						<h1 className="text-xl font-semibold">Fast Delivery</h1>
						<h1 className="text-base font-normal">Start From $10</h1>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center basis-1/4">
				<div className="flex flex-row items-center justify-center">
					<div className="mr-2">
						<CurrencyExchangeIcon sx={{ fontSize: 50 }} />
					</div>
					<div>
						<h1 className="text-xl font-semibold">Money Guarantee</h1>
						<h1 className="text-base font-normal">7 Days Back</h1>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center basis-1/4">
				<div className="flex flex-row items-center justify-center">
					<div className="mr-2">
						<AccessAlarmOutlinedIcon sx={{ fontSize: 50 }} />
					</div>
					<div>
						<h1 className="text-xl font-semibold">356 Days</h1>
						<h1 className="text-base font-normal">For Free return</h1>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center basis-1/4">
				<div className="flex flex-row items-center justify-center">
					<div className="mr-2">
						<PaymentOutlinedIcon sx={{ fontSize: 50 }} />
					</div>
					<div>
						<h1 className="text-xl font-semibold">Payment</h1>
						<h1 className="text-base font-normal">Secure system</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Features