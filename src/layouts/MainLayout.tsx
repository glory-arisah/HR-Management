import { Outlet } from 'react-router'

const MainLayout = () => {
	return (
		<>
			<h2>Index Layout</h2>
			<Outlet />
		</>
	)
}

export default MainLayout
