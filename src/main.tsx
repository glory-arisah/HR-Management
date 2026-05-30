import { StrictMode } from 'react'
import { createRoot, type Container } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from '@/routes/index.ts'

createRoot(document.getElementById('root') as Container).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
