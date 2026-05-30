import { createBrowserRouter } from 'react-router'
import App from '@/App.tsx'
import MainLayout from '@/layouts/MainLayout.tsx'
import IndexPage from '@/pages/Home.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		children: [
			{
				Component: MainLayout,
				children: [
					{
						index: true,
						Component: IndexPage,
					},
				],
			},
		],
	},
])

export default router
