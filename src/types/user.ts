import type { Department } from './departments.ts'

export interface User {
	firstName: string
	lastName: string
	department: Department
	avatarUrl: string
}
