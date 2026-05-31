import { Outlet } from 'react-router'
import { WindowSizeProvider } from '@/context/WindowSizeContext.tsx'

function App() {
	return (
		<WindowSizeProvider>
			<Outlet />
		</WindowSizeProvider>
	)
}

export default App
