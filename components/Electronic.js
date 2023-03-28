
import Image from 'next/image';
import img1 from '../public/assets/product-1.png';
import img2 from '../public/assets/product-2.png';

function Electronic() {
	return (
		<div>
			<div className=" flex flex-row px-8 py-4">
				<div className=" basis-1/5  bg-white px-5 py-2 mr-4 rounded">
					<h2 className=' font-semibold text-lg p-2'>Electronic</h2>
					<h3 className=' mr-3 pl-3'>Phone</h3>
					<h3 className=' mr-3 pl-3'>Phone</h3>
					<h3 className=' mr-3 pl-3'>Phone</h3>
					<h3 className=' mr-3 pl-3'>Phone</h3>
					<h3 className=' mr-3 pl-3'>Phone</h3>
					<h3 className=' mr-3 pl-3'>Phone</h3>
				</div>
				<div className=" basis-4/5">
					<div className="flex flex-row">
						<div className=" basis-1/4 border-0 mr-2 bg-white p-2 h-96 hover:border-2 hover:border-black rounded-md">
							<div className=" flex flex-col">
								<Image className=' w-52 h-52 hover:scale-110' src={img2} />
								<div className=" text-center pt-3">
									<h2 className=' font-semibold'>Black white Sweater</h2>
									<h1 className=' font-bold text-lg'>$100</h1>
									<div className="rating rating-xs flex justify-center items-center">
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 mr-4" />
										<h6>(4)</h6>
									</div>
									<br />
									<button className=' w-full py-2 px-8 border border-black rounded font-bold mb-3 hover:bg-black hover:text-white '>Add To Cart</button>
								</div>
							</div>
						</div>
						<div className=" basis-1/4 border-0 mr-2 bg-white p-2 h-96 hover:border-2 hover:border-black rounded-md">
							<div className=" flex flex-col">
								<Image className=' w-52 h-52 hover:scale-110' src={img1} />
								<div className=" text-center pt-3">
									<h2 className=' font-semibold'>Black white Sweater</h2>
									<h1 className=' font-bold text-lg'>$100</h1>
									<div className="rating rating-xs flex justify-center items-center">
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 mr-4" />
										<h6>(4)</h6>
									</div>
									<br />
									<button className=' w-full py-2 px-8 border border-black rounded font-bold mb-3 hover:bg-black hover:text-white '>Add To Cart</button>
								</div>
							</div>
						</div>
						<div className=" basis-1/4 border-0 mr-2 bg-white p-2 h-96 hover:border-2 hover:border-black rounded-md">
							<div className=" flex flex-col">
								<Image className=' w-52 h-52 hover:scale-110' src={img2} />
								<div className=" text-center pt-3">
									<h2 className=' font-semibold'>Black white Sweater</h2>
									<h1 className=' font-bold text-lg'>$100</h1>
									<div className="rating rating-xs flex justify-center items-center">
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 mr-4" />
										<h6>(4)</h6>
									</div>
									<br />
									<button className=' w-full py-2 px-8 border border-black rounded font-bold mb-3 hover:bg-black hover:text-white '>Add To Cart</button>
								</div>
							</div>
						</div>
						<div className=" basis-1/4 border-0 mr-2 bg-white p-2 h-96 hover:border-2 hover:border-black rounded-md">
							<div className=" flex flex-col">
								<Image className=' w-52 h-52 hover:scale-110' src={img1} />
								<div className=" text-center pt-3">
									<h2 className=' font-semibold'>Black white Sweater</h2>
									<h1 className=' font-bold text-lg'>$100</h1>
									<div className="rating rating-xs flex justify-center items-center">
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
										<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 mr-4" />
										<h6>(4)</h6>
									</div>
									<br />
									<button className=' w-full py-2 px-8 border border-black rounded font-bold mb-3 hover:bg-black hover:text-white '>Add To Cart</button>
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