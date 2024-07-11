import { DocsSections } from '@/pages/landingPage/Content'
import { useLocation, useNavigate } from 'react-router-dom'

const DocsSideMenu = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const isPathSelected = (path: string) => {
		if (path === '/') {
			return location.pathname === path
		}
		return location.pathname.endsWith(path)
	}

	return (
		<div className='hidden lg:flex flex-col gap-8 overflow-y-auto flex-shrink-0 max-w-xs h-screen sticky top-16 w-64 scrollbar-thin overflow-clip py-10'>
			<div className='flex flex-col gap-8'>
				{DocsSections.map((section) => (
					<div key={section.title} className='flex flex-col gap-2'>
						<a className={`font-semibold text-lg hover:cursor-pointer ${isPathSelected(section.path) ? 'text-brand-gradient' : ''}`} onClick={() => navigate('/docs' + section.path)}>
							{section.title}
						</a>

						<div className='flex flex-col gap-2 border-l'>
							{section.options.map((option) => (
								<a
									key={option.label}
									onClick={() => navigate('/docs' + option.path)}
									className={`flex gap-2 pl-4 border-l -ml-px hover:cursor-pointer ${isPathSelected(option.path) ? 'text-brand-gradient border-l-brand-gradient' : 'text-muted-foreground hover:text-primary hover:border-l-muted-foreground'}`}
								>
									{option.label}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default DocsSideMenu
