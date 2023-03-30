"use client";
import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search() {
	return (
		<div className='h-screen p-4 bg-slate-200'>
			<div className="p-4 m-4 rounded-md bg-slate-100">
				<div className="flex items-center justify-center ">
					<div className="flex items-center justify-center ">
						<input type="search" placeholder="Searching for ..." className="w-full px-5 py-2 pr-10 mr-3 text-sm bg-white border rounded-full focus:outline-none" />
						<div className="absolute top-0 left-0 flex justify-center pl-1 mt-3 mr-4 item-center">
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