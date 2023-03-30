"use client";
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import React from 'react';
import image from '../../../public/assets/watch-full.png';

const SingleProduct = () => {
	return (
		<div className='p-4 bg-slate-200'>
			<div className="flex flex-row gap-2 px-4">
				<div className="basis-1/2">
					<Image className='object-cover w-full ' src={image} />
				</div>
				<div className="basis-1/2">
					<h1 className='text-2xl font-bold '>Kossil Watch Brown</h1>
					<h2 className='text-base font-medium '>Brand:Xiaomi</h2>
					<h3>Rated:
						<span className="ml-2 text-gray-700">
							<span className="ml-2 text-gray-700">
								<StarIcon fontSize='small' className='text-orange-400 ' />
								<StarIcon fontSize='small' className='text-orange-400 ' />
								<StarIcon fontSize='small' className='text-orange-400 ' />
								<StarIcon fontSize='small' className='text-orange-400 ' />
								<StarIcon fontSize='small' className='text-orange-400 ' />
							</span>
							<span>(50)</span>
						</span>
					</h3>
					<h1 className='text-xl font-bold text-red-400 '>$100</h1>
					<h2 className='font-bold'>Stock Available</h2>
					<button className="px-10 py-2 text-lg font-bold text-white bg-red-500 rounded-md">ADD TO CART</button>
					<h2 className='text-base ' >Sold by: <span className='font-semibold ' >MObile Store</span> </h2>
				</div>
			</div>
		</div>
	)
}

export default SingleProduct