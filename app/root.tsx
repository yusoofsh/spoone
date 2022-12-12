import type { MetaFunction, LinksFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

import globalStylesheet from "~/styles/global.css"
import tailwindStylesheet from "~/styles/tailwind.css"
import { APP_NAME, APP_URL, APP_COLOR } from "~/components/SEO"

const meta: MetaFunction = () => {
	return {
		charset: "utf-8",
		referrer: "origin",
		robots: "all",
		viewport: "width=device-width,initial-scale=1",
		"application-name": APP_NAME,
		"msapplication-config": "/favicon/browserconfig.xml",
		"msapplication-TileColor": APP_COLOR,
		"theme-color": APP_COLOR,
	}
}

const links: LinksFunction = () => {
	return [
		{
			rel: "canonical",
			href: APP_URL,
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "/favicon/apple-touch-icon.png",
		},
		{
			rel: "icon",
			sizes: "16x16",
			href: "/favicon/favicon-16x16.png",
		},
		{
			rel: "icon",
			sizes: "32x32",
			href: "/favicon/favicon-32x32.png",
		},
		{
			rel: "manifest",
			href: "/favicon/site.webmanifest",
		},
		{
			rel: "mask-icon",
			href: "/favicon/safari-pinned-tab.svg",
			color: APP_COLOR,
		},
		{
			rel: "shortcut icon",
			href: "/favicon/favicon.ico",
		},
		{
			rel: "stylesheet",
			href: globalStylesheet,
		},
		{
			rel: "stylesheet",
			href: tailwindStylesheet,
		},
	]
}

const Root = () => {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<LiveReload />
				<Scripts />
			</body>
		</html>
	)
}

export { meta, links }
export default Root
