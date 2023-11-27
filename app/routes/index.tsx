import { SEO } from "~/components/SEO"

const Scene = dynamic(() => import("~/components/Scene").then((mod) => mod.Scene))

export default function Index() {
	return (
		<>
			<div className="blur-header" aria-hidden="true" />
			<main className="container relative">
				<SEO />
				<Scene />
				<header className={styles.header}>
					<AnimateSection as="h1" className={styles.title}>
						Kaiyu Hsu
					</AnimateSection>
					<AnimateSection delay={0.1}>
						<RoleNav />
					</AnimateSection>
				</header>
				<CountersContainer>
					<Counter text={stat.value} />
					{stat.href ? (
						<a href={stat.href} target="_blank" rel="noopener noreferrer">
							{stat.label[0] === "+" ? "" : <>&nbsp;</>}
							{stat.label}
						</a>
					) : (
						<span>
							{stat.label[0] === "+" ? "" : <>&nbsp;</>}
							{stat.label}
						</span>
					)}
				</CountersContainer>
			</main>
		</>
	)
}
