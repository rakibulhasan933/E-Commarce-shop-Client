import Link from "next/link"

function NotFound() {
	return (
		<>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/'>Home</Link>
		</>
	)
}

export default NotFound