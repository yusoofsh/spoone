import type { LinksFunction } from "@remix-run/node"

import styles from "~/styles/globals.css"

export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: styles,
		},
	]
}

export default function Index() {
	return (
		<>
			<div className="blur-header" aria-hidden="true" />
		</>
	)
}
