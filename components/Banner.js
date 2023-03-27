"use client"
import Image from 'next/image';
import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import image from '../public/assets/banner-15.jpg';
import image1 from '../public/assets/banner-25.jpg';
function Banner() {
	return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item relative w-full">
				<Image src={image1} className="w-full" />
				{/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide4" className="btn btn-circle">❮</a>
					<a href="#slide2" className="btn btn-circle">❯</a>
				</div> */}
				<div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10">
					<a href="#slide4" className="w-4 h-12 p-6 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
						<ArrowBackOutlinedIcon />
					</a>

					<a href="#slide2" className="w-4 h-12 p-6 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
						<ArrowForwardOutlinedIcon />
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<Image src={image} className="w-full" />
				<div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10">
					<a href="#slide1" className="w-4 h-12 p-6 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
						<ArrowBackOutlinedIcon />
					</a>

					<a href="#slide3" className="w-4 h-12 p-6 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
						<ArrowForwardOutlinedIcon />
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<Image src={image1} className="w-full" />
				<div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10">
					<a href="#slide2" className="w-4 h-12 p-6 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
						<ArrowBackOutlinedIcon />
					</a>

					<a href="#slide4" className="w-4 h-12 p-6 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
						<ArrowForwardOutlinedIcon />
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<Image src={image} className="w-full" />
				<div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10">
					<a href="#slide1" className="w-4 h-12 p-6 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
						<ArrowBackOutlinedIcon />
					</a>

					<a href="#slide3" className="w-4 h-12 p-6 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
						<ArrowForwardOutlinedIcon />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Banner