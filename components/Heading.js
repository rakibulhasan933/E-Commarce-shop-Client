"use client";
import Image from 'next/image'
import image from '../public/assets/banner-18.jpg';
import image2 from '../public/assets/banner-19.jpg';
import image3 from '../public/assets/banner-20.jpg';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Heading() {
	return (
		<div className=' flex flex-row px-8 py-8 '>
			<div className=" flex justify-center items-center bg-gray-200 mr-3 relative ">
				<Image src={image} className=" object-cover w-full rounded-2" />
				<div className="absolute left-2 top-2 z-10 p-5">
					<h1 className='mr-2' >NEW ARRIVALS</h1>
					<h2 className=' font-semibold text-lg'>SKI CLOTHES SALE</h2>
					<h2 className=' font-semibold text-lg text-red-400'>Up to 35% Off</h2>
					<button className='pl-4 font-bold'>Shop now <ArrowForwardOutlinedIcon fontSize='small' /> </button>
				</div>
			</div>
			<div className=" flex justify-center items-center bg-gray-200 mr-3 relative ">
				<Image src={image2} className=" object-cover w-full rounded-2" />
				<div className="absolute left-2 top-2 z-10 px-2 py-5">
					<h1 className='mr-2 text-white' >BEST SELLER</h1>
					<h2 className=' font-semibold text-lg text-white'>TRENDING WOMEN
						SUNGLASSES</h2>
					<button className='pl-4 font-bold text-white'>Shop now <ArrowForwardOutlinedIcon fontSize='small' /> </button>
				</div>
			</div>
			<div className=" flex justify-center items-center bg-gray-200 mr-3 relative ">
				<Image src={image3} className=" object-cover w-full rounded-2" />
				<div className="absolute left-2 top-2 z-10 p-5">
					<h1 className='mr-2' >NEW ARRIVALS</h1>
					<h2 className=' font-semibold text-lg'>NEW LATEST  BAG <br />
						COLLECTION</h2>
					<button className='pl-4 font-bold'>Shop now <ArrowForwardOutlinedIcon fontSize='small' /> </button>
				</div>
			</div>

		</div>
	)
}

export default Heading