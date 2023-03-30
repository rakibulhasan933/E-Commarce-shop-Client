"use client";
import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search() {
	return (
		<div className='h-screen p-4 bg-slate-200'>
			<div className="p-4 m-4 rounded-md">
				<div className="flex items-center justify-center ">
					<div className="absolute flex items-center justify-center w-1/2 ">
						<div className="flex flex-row w-full gap-0 mr-3 text-sm bg-white border rounded-full ">
							<input type="search" placeholder="Searching for ..." className="w-full py-2 pl-5 pr-2 rounded-md focus:outline-none" />
							<select className='rounded cursor-pointer'>
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
			<div className="p-6 m-4 bg-white rounded-md">
				<div className="">
					<h2> World</h2>
				</div>
			</div>
		</div>
	)
}

export default Search