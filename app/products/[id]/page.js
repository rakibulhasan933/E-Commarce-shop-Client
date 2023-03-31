"use client";
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import React from 'react';
import image from '../../../public/assets/watch-full.png';
import review from '../../../public/assets/review.png';

const SingleProduct = () => {
	return (
		<div className='p-4 bg-slate-100'>
			<div className="flex flex-row gap-2 px-4">
				<div className="p-5 basis-1/2">
					<Image className='object-cover w-full ' src={image} />
				</div>
				<div className="p-5 basis-1/2">
					<h1 className='mb-5 text-2xl font-bold '>Kossil Watch Brown</h1>
					<h2 className='mb-5 text-base font-medium'>Brand: <span className='font-bold '>Xiaomi</span></h2>
					<h3 className='mb-5 '>Rated:
						<span className="ml-2 text-gray-700">
							<span className="ml-2 text-gray-700">
								<StarIcon fontSize='small' className='mr-2 text-orange-400' />
								<StarIcon fontSize='small' className='mr-2 text-orange-400' />
								<StarIcon fontSize='small' className='mr-2 text-orange-400' />
								<StarIcon fontSize='small' className='mr-2 text-orange-400' />
								<StarIcon fontSize='small' className='mr-2 text-orange-400' />
							</span>
							<span>(50)</span>
						</span>
					</h3>
					<h1 className='mb-2 text-xl font-bold text-red-400'>$100</h1>
					<h2 className='mb-3 font-bold'>Status:- Stock Available</h2>
					<button className="px-10 py-2 mb-4 text-lg font-bold text-white bg-red-500 rounded-md">ADD TO CART</button>
					<h2 className='mb-5 text-base ' >Sold by: <span className='font-semibold' >MObile Store</span> </h2>
					<hr className='w-full px-5 border-black border-1' />
					<div className="flex flex-col px-5">
						<h2 className='mt-4 text-xl font-bold '>Specification:</h2>
						<h4 className="">Brand:- Beats</h4>
						<h4 className="">Model:-S450</h4>
						<h4 className="">Type:-Wireless Bluetooth Headset</h4>
						<h4 className="">FM Frequency Response: 87.5 – 108 MHz</h4>
						<h4 className="">Feature: FM Radio, Card Supported (Micro SD / TF)</h4>
						<h4 className="">Made in China</h4>
					</div>
				</div>
			</div>
			<hr className='w-full px-5 border-1' />
			<div className="flex flex-col gap-1 p-5 ">
				<h2 className='mb-5 text-xl font-semibold '>Reviews</h2>
				<div className="flex flex-col gap-1 ">
					<div className="flex flex-row gap-1">
						<div className="">
							<Image src={review} />
						</div>
						<div className="px-4">
							<h2>Jenifer Tulio</h2>
							<div className="mb-4 ">
								<span className="ml-2 text-gray-700">
									<StarIcon fontSize='small' className='text-orange-400 ' />
									<StarIcon fontSize='small' className='text-orange-400 ' />
									<StarIcon fontSize='small' className='text-orange-400 ' />
									<StarIcon fontSize='small' className='text-orange-400 ' />
									<StarIcon fontSize='small' className='text-orange-400 ' />
								</span>
								<span className='mr-2 '>(5)</span>
								<span className="mr-3 ">2.5 years ago</span>
							</div>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illum cumque eligendi quasi perspiciatis quidem perferendis debitis? Aut blanditiis nihil nobis at distinctio veritatis dolor in maiores consequatur. Vitae, ea.</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default SingleProduct