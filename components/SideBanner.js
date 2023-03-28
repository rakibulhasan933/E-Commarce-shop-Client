"use client"
import Image from 'next/image';
import React from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import computer from '../public/assets/banner-16.jpg';
import shoe from '../public/assets/banner-17.jpg';

function SideBanner() {
	return (
		<div>
			<div className="flex flex-col my-2">
				<div className="relative w-full h-64 mb-5 bg-slate-50">
					<Image className='object-cover w-full h-full' src={computer} />
					<div className="absolute left-0 top-10">
						<div className="pl-4">
							<h2 className='text-xl font-medium'>NEW ARRIVALS</h2>
							<h1 className='text-xl font-semibold'>SUMMER</h1>
							<h1 className='text-xl font-semibold'>SALE <span className='text-red-500 '>20% OFF</span></h1>
						</div>
						<button className='pl-4 font-bold'>Shop now <ArrowForwardOutlinedIcon fontSize='small' /> </button>
					</div>
				</div>

				<div className="relative w-full h-64 mt-5 bg-slate-50">
					<Image className='object-cover w-full h-full' src={shoe} />
					<div className="absolute left-0 top-10">
						<div className="pl-4">
							<h2 className='text-xl font-medium'>NEW ARRIVALS</h2>
							<h1 className='text-xl font-semibold'>SUMMER</h1>
							<h1 className='text-xl font-semibold'>SALE <span className='text-red-500 '>20% OFF</span></h1>
						</div>
						<button className='pl-4 font-bold'>Shop now <ArrowForwardOutlinedIcon fontSize='small' /> </button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBanner