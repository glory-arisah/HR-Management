import { Outlet } from 'react-router'
import { currentUser } from '@/data/current-user.ts'
import DesktopSidebar from '@/components/layout/DesktopSidebar.tsx'
import MobileSidebar from '@/components/layout/MobileSidebar.tsx'

const MainLayout = () => {
	return (
		<main className="h-screen overflow-y-auto p-5">
			<header className="flex md:hidden items-center justify-between">
				<MobileSidebar />

				<button
					type="button"
					className="inline-flex md:hidden items-center gap-x-1.5 p-1 rounded-lg border border-gray-light cursor-pointer"
				>
					<div className="w-10 h-10">
						<img
							className="w-full h-full object-cover rounded-lg"
							alt={currentUser.firstName}
							src={currentUser.avatarUrl}
						/>
					</div>

					<div className="text-left">
						<h4 className="font-bold text-white text-sm">
							{currentUser.firstName} {currentUser.lastName}
						</h4>
						<span className="text-gray-light text-xs font-medium">
							{currentUser.department.name}
						</span>
					</div>
				</button>
			</header>

			<DesktopSidebar />
			<Outlet />
		</main>
	)
}

export default MainLayout
