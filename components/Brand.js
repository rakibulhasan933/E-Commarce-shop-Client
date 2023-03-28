"use client";
import Image from 'next/image';
import img1 from '../public/assets/alibaba.png';
import img2 from '../public/assets/levis.png';
import img3 from '../public/assets/raymond.png';
import img4 from '../public/assets/lotto.png';
import img5 from '../public/assets/samsung.png';
import Marquee from 'react-fast-marquee';

function Brand() {
	return (
		<div className=' bg-white mx-8 my-5 flex flex-row'>
			<Marquee>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img1} />
				</div>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img2} />
				</div>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img3} />
				</div>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img4} />
				</div>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img5} />
				</div>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img1} />
				</div>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img2} />
				</div>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img3} />
				</div>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img4} />
				</div>
				<div className=" basis-1/4 flex justify-center items-center">
					<Image className='p-5 w-1/2' src={img5} />
				</div>
			</Marquee>
		</div>
	)
}

export default Brand