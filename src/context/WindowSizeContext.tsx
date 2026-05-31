import { useEffect, useState, createContext, useContext, useMemo } from 'react'

const MOBILE_BREAKPOINT = 768

export const WindowSizeContext = createContext({
	width: 0,
	height: 0,
	isMobileScreen: false,
})

export function WindowSizeProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [size, setSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	})

	const [isMobileScreen, setIsMobileScreen] = useState(false)

	useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

		setIsMobileScreen(mql.matches)

		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setIsMobileScreen(e.matches)
		}

		const handleScreenResize = () => {
			setSize({ width: window.innerWidth, height: window.innerHeight })
		}

		mql.addEventListener('change', handleMediaQueryChange)
		window.addEventListener('resize', handleScreenResize)

		return () => {
			mql.removeEventListener('change', handleMediaQueryChange)
			window.removeEventListener('resize', handleScreenResize)
		}
	}, [])

	const value = useMemo(
		() => ({
			...size,
			isMobileScreen,
		}),
		[size, isMobileScreen],
	)

	return (
		<WindowSizeContext.Provider value={value}>
			{children}
		</WindowSizeContext.Provider>
	)
}

export const useWindowSize = () => useContext(WindowSizeContext)
