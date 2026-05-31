import { Link, useLocation } from 'react-router'
import navigationLinks from '@/constants/NAV_LINKS.ts'

const DesktopSidebar = () => {
	const { pathname } = useLocation()

	const isActiveNav = (slug: string) => pathname === `/${slug}`

	return (
		<aside className="hidden md:flex flex-col h-full w-70 border-gray-light bg-bg-default p-7.5 gap-y-7.5 rounded-[20px] border border-text-muted">
			<h3 className="flex-none font-bold text-white text-xl">
				<Link to={'/'}>HRm</Link>
			</h3>

			<nav className="flex-1 flex flex-col gap-y-2.5 overflow-y-auto scrollbar-none">
				{navigationLinks.map((nav) => {
					const Icon = nav.icon

					return (
						<Link
							key={nav.slug}
							to={`/${nav.slug}`}
							className={`relative flex items-center gap-2.5 text-base-text text-sm hover:bg-bg-elevated transition-colors duration-250 p-2 rounded ${isActiveNav(nav.slug) && 'font-semibold bg-bg-elevated'}`}
						>
							<Icon
								size={24}
								className="text-white"
							/>

							<span
								className={`text-white ${isActiveNav(nav.slug) && 'text-heading'}`}
							>
								{nav.label}
							</span>

							{/* active route bar */}
							{isActiveNav(nav.slug) && (
								<div className="absolute left-0 origin-left h-full w-0.75 rounded-lg bg-accent"></div>
							)}
						</Link>
					)
				})}
			</nav>
		</aside>
	)
}

export default DesktopSidebar
