"use client";
import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import glass from '../../public/assets/sunglass-1.png';
import watch from '../../public/assets/watch.png';
import Link from 'next/link';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Search() {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className='p-4 bg-slate-200'>
			<div className="p-4 m-4 rounded-md">
				<div className="flex items-center justify-center ">
					<div className="absolute flex md:w-1/2 md:items-center md:justify-center ">
						<div className="flex flex-row w-full gap-0 mr-3 text-sm bg-white border rounded-full ">
							<input type="search" placeholder="Searching for ..." className="w-full py-2 pl-5 pr-2 rounded-md focus:outline-none " />
							<select className='rounded cursor-pointer'>
								<option value="name">All Category</option>
								<option value="name">Electronic</option>
								<option value="name">Man</option>
								<option value="name">Woman</option>
								<option value="name">Child</option>
								<option value="name">Food</option>
								<option value="name">Others</option>
							</select>
						</div>
						<div className="absolute left-0 flex items-center justify-center ml-1 top-3">
							<SearchOutlinedIcon fontSize="small" />
						</div>
						<button className='px-5 py-2 bg-teal-500 rounded'>Search</button>
					</div>
				</div>
			</div>
			<div className="p-4 m-4 bg-white rounded-md">
				<div className="flex justify-between px-5">
					<div className="">
						<h2 className='mb-1 text-lg font-semibold '>Searching For "key"</h2>
						<h2 className='font-light '> <span className='text-red-400 '>48</span> result found</h2>
					</div>
					<div className="flex flex-row items-center justify-center gap-2 ">

						<h3 className='font-semibold '>Sort by:-</h3>
						<div className="px-2 py-1 border rounded ">
							<select >
								<option value="a-z">A-Z</option>
								<option value="a-z">Z-A</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div className="p-4">
				<div className="flex flex-row gap-3">
					<div className="p-4 bg-white rounded basis-1/4">
						<h2 className='m-2 font-semibold '>Price Range</h2>
						<div className="flex flex-row gap-0 mb-4">
							<input type="number" placeholder='0' className='w-1/4 px-1 mr-3 border-2 rounded' />
							<h4 className='font-extrabold '>-</h4>
							<input type="number" placeholder='100' className='w-1/4 px-1 ml-3 border-2 rounded' />
						</div>
						<hr className='px-2 my-4' />
						<h2 className='m-2 font-bold '>Brands</h2>
						<div className="flex flex-col gap-1 ">
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">Tesla</span>
							</label>
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">Sony</span>
							</label>
						</div>
						<hr className='px-2 my-4' />
						<h2 className='p-2 font-bold '>Status</h2>
						<div className="flex flex-col gap-1 ">
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">On Sale</span>
							</label>
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">In Stock</span>
							</label>
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">Featured</span>
							</label>
						</div>
						<hr className='px-2 my-4' />
						<h2 className='m-2 font-bold '>Ratings</h2>
						<div className="flex flex-col gap-1 ">
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">
									<StarIcon fontSize='small' className='text-orange-400 ' />
									<StarIcon fontSize='small' className='text-orange-400 ' />
									<StarIcon fontSize='small' className='text-orange-400 ' />
									<StarIcon fontSize='small' className='text-orange-400 ' />
									<StarIcon fontSize='small' className='text-orange-400 ' />
								</span>
							</label>
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">
									<span className="ml-2 text-gray-700">
										<StarIcon fontSize='small' className='text-orange-400 ' />
										<StarIcon fontSize='small' className='text-orange-400 ' />
										<StarIcon fontSize='small' className='text-orange-400 ' />
										<StarIcon fontSize='small' className='text-orange-400 ' />
									</span>
								</span>
							</label>
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">
									<span className="ml-2 text-gray-700">
										<StarIcon fontSize='small' className='text-orange-400 ' />
										<StarIcon fontSize='small' className='text-orange-400 ' />
										<StarIcon fontSize='small' className='text-orange-400 ' />
									</span>
								</span>
							</label>
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">
									<span className="ml-2 text-gray-700">
										<StarIcon fontSize='small' className='text-orange-400 ' />
										<StarIcon fontSize='small' className='text-orange-400 ' />
									</span>
								</span>
							</label>
							<label className="inline-flex items-center my-1">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={handleCheckboxChange}
									className="w-5 h-5 text-blue-600 form-checkbox"
								/>
								<span className="ml-2 text-gray-700">
									<span className="ml-2 text-gray-700">
										<StarIcon fontSize='small' className='text-orange-400 ' />
									</span>
								</span>
							</label>
						</div>
					</div>
					<div className=" basis-3/4">
						<div className="grid grid-cols-3 gap-3">
							{Array.from({ length: 9 }).map((_, i) => (
								<div className="p-2 bg-white border rounded-md">
									<Image src={glass} className="object-cover w-full" />
									<div className="px-3 py-2 ">
										<h2 className='font-bold'>Police Gray Eyeglasses</h2>
										<span className="text-gray-700">
											<StarIcon fontSize='small' className='text-orange-400 ' />
											<StarIcon fontSize='small' className='text-orange-400 ' />
											<StarIcon fontSize='small' className='text-orange-400 ' />
											<StarIcon fontSize='small' className='text-orange-400 ' />
											<StarIcon fontSize='small' className='text-orange-400 ' />
										</span>
										<div className="flex justify-between mt-2">
											<h2 className='font-semibold text-red-400 '>$100</h2>
											<button className='px-1 text-xl font-bold border-2 border-red-200 rounded'>
												<AddOutlinedIcon />
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

				</div>
			</div>
			<div className="flex justify-center my-4">
				<nav className="bg-white rounded-lg shadow-md">
					<ul className="flex divide-x divide-gray-300">
						<li className="px-3 py-2 cursor-pointer hover:bg-gray-100">
							<Link href="#">1</Link>
						</li>
						<li className="px-3 py-2 cursor-pointer hover:bg-gray-100">
							<Link href="#">2</Link>
						</li>
						<li className="px-3 py-2 cursor-pointer hover:bg-gray-100">
							<Link href="#">3</Link>
						</li>
						<li className="px-3 py-2 cursor-pointer hover:bg-gray-100">
							<Link href="#">4</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Search