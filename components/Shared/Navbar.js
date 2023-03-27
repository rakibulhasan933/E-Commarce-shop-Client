"use client"
import Link from "next/link";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Navbar() {
	return (
		<div className="navbar bg-base-200">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li><Link href='/products'>Products</Link></li>
						<li><Link href='/about'>About</Link></li>
						<li><Link href='/contact'>Contacts</Link></li>
						<li><Link href='/dashboard'>Dashboard</Link></li>
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">Walker Shop</a>
			</div>
			<div className="navbar-center lg:w-2/5 lg:flex relative">
				<input type="search" placeholder="Searching for ..." className="bg-white w-96 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
				<div className="pl-1 absolute left-0 top-0 mt-3 mr-4 flex justify-center item-center">
					<SearchOutlinedIcon fontSize="small" />
				</div>
			</div>
			<div className="navbar-end">
				<Link className=" mx-5" href='/dashboard' >Dashboard</Link>
				<label tabIndex={0} className="ml-1 btn btn-ghost btn-circle">
					<div className="indicator">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<div className="indicator">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
								<span className="badge badge-sm indicator-item">9</span>
							</div>
						</label>
					</div>
				</label>
				<Link className=" mx-5" href='/login' >Login <ArrowForwardOutlinedIcon /> </Link>
			</div>

		</div>
	)
}

export default Navbar