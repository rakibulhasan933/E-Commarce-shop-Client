import Image from 'next/image';
import React from 'react';
import img from '../public/assets/cat-3.png';

function Category() {
	return (
		<div className="flex flex-row px-8 py-8 mx-8 my-8 rounded">
			<div className="relative flex items-center justify-center mr-5 bg-white basis-1/6">
				<Image className='w-full' src={img} alt="shoe" />
				<div className="absolute flex items-center justify-center bottom-2">
					<button className='w-full px-12 py-2 text-base font-bold hover:bg-black hover:text-white'>Gaming</button>
				</div>
			</div>
			<div className="relative flex items-center justify-center mr-5 bg-white basis-1/6">
				<Image className='w-full' src={img} alt="shoe" />
				<div className="absolute flex items-center justify-center bottom-2">
					<button className='w-full px-12 py-2 text-base font-bold hover:bg-black hover:text-white'>Gaming</button>
				</div>
			</div>
			<div className="relative flex items-center justify-center mr-5 bg-white basis-1/6">
				<Image className='w-full' src={img} alt="shoe" />
				<div className="absolute flex items-center justify-center bottom-2">
					<button className='w-full px-12 py-2 text-base font-bold hover:bg-black hover:text-white'>Gaming</button>
				</div>
			</div>
			<div className="relative flex items-center justify-center mr-5 bg-white basis-1/6">
				<Image className='w-full' src={img} alt="shoe" />
				<div className="absolute flex items-center justify-center bottom-2">
					<button className='w-full px-12 py-2 text-base font-bold hover:bg-black hover:text-white'>Gaming</button>
				</div>
			</div>
			<div className="relative flex items-center justify-center mr-5 bg-white basis-1/6">
				<Image className='w-full' src={img} alt="shoe" />
				<div className="absolute flex items-center justify-center bottom-2">
					<button className='w-full px-12 py-2 text-base font-bold hover:bg-black hover:text-white'>Gaming</button>
				</div>
			</div>
			<div className="relative flex items-center justify-center mr-5 bg-white basis-1/6">
				<Image className='w-full' src={img} alt="shoe" />
				<div className="absolute flex items-center justify-center bottom-2">
					<button className='w-full px-12 py-2 text-base font-bold hover:bg-black hover:text-white'>Gaming</button>
				</div>
			</div>
		</div>

	)
}

export default Category