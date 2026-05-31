import navigationLinks from '@/constants/NAV_LINKS.ts'
import { useWindowSize } from '@/context/WindowSizeContext.tsx'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

const MobileSidebar = () => {
	const { isMobileScreen } = useWindowSize()
	const [isOpen, setIsOpen] = useState(false)

	const { pathname } = useLocation()

	const isActiveNav = (slug: string) => pathname === `/${slug}`

	const toggleMenu = () => {
		setIsOpen((prev) => !prev)
	}

	useEffect(() => {
		if (!isMobileScreen && isOpen) setIsOpen(false)
	}, [isMobileScreen])

	return (
		<div>
			<button
				type="button"
				onClick={toggleMenu}
				className="relative before:content-[''] before:w-8 before:h-8 before:absolute before:left-1/2 before:top-1/2 before:transform before:-translate-1/2 before:rounded-full before:transition-colors inline-flex border-none bg-transparent hover:before:bg-purple-800 cursor-pointer"
			>
				<span className="relative">
					<Menu size={20} />
				</span>
			</button>

			<div
				id="sidebar-overlay"
				className={`fixed inset-0 bg-bg-default/80 z-999 opacity-0 invisible transition-opacity duration-300 ${isOpen && 'opacity-100 visible'}`}
				role="button"
				onClick={toggleMenu}
			></div>

			<section
				id="mobile-menu"
				className={`fixed top-0 left-0 w-3/4 h-screen z-1000 bg-bg-default transform -translate-x-full transition-transform duration-400 ${isOpen && 'translate-x-0'}`}
			>
				<div className=" h-full transition-[width_0.3s_ease-in-out] border border-border-subtle px-6 py-8">
					<h2 className="flex items-center justify-between mb-8">
						<Link
							to="/"
							className="text-lg font-semibold text-white cursor-pointer"
						>
							HRm
						</Link>

						<button
							type="button"
							onClick={toggleMenu}
							className="relative before:content-[''] before:w-6 before:h-6 before:absolute before:left-1/2 before:top-1/2 before:transform before:-translate-1/2 before:rounded-full before:transition-colors inline-flex border-none bg-transparent hover:before:bg-purple-800 cursor-pointer"
						>
							<span className="relative">
								<X size={18} />
							</span>
						</button>
					</h2>

					<nav className="flex flex-col gap-y-3">
						{navigationLinks.map((nav) => (
							<Link
								key={nav.slug}
								to={`/${nav.slug}`}
								className={`flex items-center gap-2.5 text-base-text text-sm hover:bg-bg-elevated transition-colors duration-250 p-2 rounded ${isActiveNav(nav.slug) && 'font-bold bg-bg-elevated'}`}
							>
								<span>{nav.label}</span>
							</Link>
						))}
					</nav>
				</div>
			</section>
		</div>
	)
}

export default MobileSidebar
