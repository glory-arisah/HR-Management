import type { User } from '@/types/user.ts'

export const currentUser: User = {
	firstName: 'James',
	lastName: 'Gordon',
	avatarUrl:
		'https://img.magnific.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80',
	department: {
		id: 'hr',
		name: 'HR Department',
		membersCount: 8,
	},
}
