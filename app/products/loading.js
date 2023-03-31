import React from 'react'

export default function Loading() {
	return (
		<div className="w-full">
			<div className="flex flex-wrap">
				{Array.from({ length: 9 }).map((_, i) => (
					<div key={i} className="w-full p-4 md:w-1/2 lg:w-1/3">
						<div className="h-40 bg-gray-300 rounded-lg animate-pulse"></div>
						<div className="flex mt-4 space-x-4 animate-pulse">
							<div className="w-8 h-8 bg-gray-300 rounded-full"></div>
							<div className="flex-1 py-1 space-y-4">
								<div className="w-3/4 h-4 bg-gray-300 rounded"></div>
								<div className="space-y-2">
									<div className="h-4 bg-gray-300 rounded"></div>
									<div className="w-5/6 h-4 bg-gray-300 rounded"></div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
