"use client";
import Image from 'next/image';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import React from 'react';
import img from '../public/assets/long-banner.jpg';


function LongBanner() {
	return (
		<div className=' flex flex-row px-8 py-8 '>
			<div className=" flex justify-center items-center bg-gray-200 mr-3 relative ">
				<Image src={img} className=" object-cover w-full rounded-2" />
				<div className="absolute left-1/4 z-10 p-5">
					<h2 className=' font-semibold  text-4xl'>GIFT <span className=' text-red-500'>50% OFF</span> PERFECT STYLES</h2>
					<h2 className=' text-lg'>Only until the end of this week. Terms and conditions apply</h2>
				</div>
				<div className=" absolute right-5 rounded p-5 bg-white">
					<button className='pl-4 font-bold'>Shop now <ArrowForwardOutlinedIcon fontSize='small' /> </button>
				</div>
			</div>

		</div>
	)
}

export default LongBanner