import {
	LayoutDashboard,
	IdCardLanyard,
	Building,
	CalendarCheck,
	HandCoins,
	Users,
	BriefcaseBusiness,
	ClipboardList,
	BookText,
	Bolt,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface NavLink {
	slug: string
	label: string
	icon: LucideIcon
}

const navigationLinks: NavLink[] = [
	{
		slug: '',
		label: 'Dashboard',
		icon: LayoutDashboard,
	},
	{
		slug: 'employees',
		label: 'All Employees',
		icon: IdCardLanyard,
	},
	{
		slug: 'departments',
		label: 'All Departments',
		icon: Building,
	},
	{
		slug: 'attendance',
		label: 'Attendance',
		icon: CalendarCheck,
	},
	{
		slug: 'payroll',
		label: 'Payroll',
		icon: HandCoins,
	},
	{
		slug: 'jobs',
		label: 'Jobs',
		icon: BriefcaseBusiness,
	},
	{
		slug: 'candidates',
		label: 'Candidates',
		icon: Users,
	},
	{
		slug: 'leaves',
		label: 'Leaves',
		icon: ClipboardList,
	},
	{
		slug: 'holidays',
		label: 'Holidays',
		icon: BookText,
	},
	{
		slug: 'settings',
		label: 'Settings',
		icon: Bolt,
	},
]

export default navigationLinks
