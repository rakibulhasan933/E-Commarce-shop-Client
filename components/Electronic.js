
import Image from 'next/image';
import img1 from '../public/assets/product-1.png';
import img2 from '../public/assets/product-2.png';

function Electronic() {
	return (
		<div>
			<div className="flex flex-row px-8 py-4 ">
				<div className="px-5 py-2 mr-4 bg-white rounded  basis-1/5">
					<h2 className='p-2 text-lg font-semibold '>Electronic</h2>
					<h3 className='pl-3 mr-3 '>Phone</h3>
					<h3 className='pl-3 mr-3 '>Phone</h3>
					<h3 className='pl-3 mr-3 '>Phone</h3>
					<h3 className='pl-3 mr-3 '>Phone</h3>
					<h3 className='pl-3 mr-3 '>Phone</h3>
					<h3 className='pl-3 mr-3 '>Phone</h3>
				</div>
				<div className=" basis-4/5">
					<div className="flex flex-row">
						<div className="p-2 mr-2 bg-white border-0 rounded-md  basis-1/4 h-96 hover:border-2 hover:border-black">
							<div className="flex flex-col ">
								<Image className=' w-52 h-52 hover:scale-110' src={img2} />
								<div className="pt-3 text-center ">
									<h2 className='font-semibold '>Black white Sweater</h2>
									<h1 className='text-lg font-bold '>$100</h1>
									<div className="flex items-center justify-center rating rating-xs">
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="mr-4 bg-orange-400 mask mask-star-2" />
										<h6>(4)</h6>
									</div>
									<br />
									<button className='w-full px-8 py-2 mb-3 font-bold border border-black rounded  hover:bg-black hover:text-white'>Add To Cart</button>
								</div>
							</div>
						</div>
						<div className="p-2 mr-2 bg-white border-0 rounded-md  basis-1/4 h-96 hover:border-2 hover:border-black">
							<div className="flex flex-col ">
								<Image className=' w-52 h-52 hover:scale-110' src={img1} />
								<div className="pt-3 text-center ">
									<h2 className='font-semibold '>Black white Sweater</h2>
									<h1 className='text-lg font-bold '>$100</h1>
									<div className="flex items-center justify-center rating rating-xs">
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="mr-4 bg-orange-400 mask mask-star-2" />
										<h6>(4)</h6>
									</div>
									<br />
									<button className='w-full px-8 py-2 mb-3 font-bold border border-black rounded  hover:bg-black hover:text-white'>Add To Cart</button>
								</div>
							</div>
						</div>
						<div className="p-2 mr-2 bg-white border-0 rounded-md  basis-1/4 h-96 hover:border-2 hover:border-black">
							<div className="flex flex-col ">
								<Image className=' w-52 h-52 hover:scale-110' src={img2} />
								<div className="pt-3 text-center ">
									<h2 className='font-semibold '>Black white Sweater</h2>
									<h1 className='text-lg font-bold '>$100</h1>
									<div className="flex items-center justify-center rating rating-xs">
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="mr-4 bg-orange-400 mask mask-star-2" />
										<h6>(4)</h6>
									</div>
									<br />
									<button className='w-full px-8 py-2 mb-3 font-bold border border-black rounded  hover:bg-black hover:text-white'>Add To Cart</button>
								</div>
							</div>
						</div>
						<div className="p-2 mr-2 bg-white border-0 rounded-md  basis-1/4 h-96 hover:border-2 hover:border-black">
							<div className="flex flex-col ">
								<Image className=' w-52 h-52 hover:scale-110' src={img1} />
								<div className="pt-3 text-center ">
									<h2 className='font-semibold '>Black white Sweater</h2>
									<h1 className='text-lg font-bold '>$100</h1>
									<div className="flex items-center justify-center rating rating-xs">
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="bg-orange-400 mask mask-star-2" />
										<input type="radio" name="rating-5" className="mr-4 bg-orange-400 mask mask-star-2" />
										<h6>(4)</h6>
									</div>
									<br />
									<button className='w-full px-8 py-2 mb-3 font-bold border border-black rounded  hover:bg-black hover:text-white'>Add To Cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Electronic