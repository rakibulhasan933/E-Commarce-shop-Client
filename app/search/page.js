"use client";
import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search() {
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
				<div className="flex flex-row gap-1">
					<div className="p-4 bg-white basis-1/4">
						<h2>Price Range</h2>
						<div className="flex flex-row gap-0 ">
							<input type="number" placeholder='0' />
							<h4>To</h4>
							<input type="number" placeholder='100' />
						</div>
					</div>
					<div className="bg-white basis-3/4">
						<h2>Product</h2>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Search