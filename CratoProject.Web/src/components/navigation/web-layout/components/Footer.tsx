import Logo from '@/assets/crato-project-icon.svg'
import EvanHenryLink from '@/components/ui/EvanHenryLink'
import { ApplicationName, FooterSections, SocialMediaLinks } from '@/pages/landingPage/Content'
import { useNavigate } from 'react-router-dom'

type LinkItem = {
	label: string
	path: string
}

type FooterLinksProps = {
	title: string
	items: LinkItem[]
}

const FooterLinks = ({ title, items }: FooterLinksProps) => (
	<div className='flex flex-col items-start gap-2 md:w-40'>
		<div className='text-md font-semibold mb-1'>{title}</div>
		{items.map((item) => (
			<a key={item.label} href={item.path} className='inline-block text-primary/55 hover:text-primary'>
				{item.label}
			</a>
		))}
	</div>
)

const Footer = () => {
	const navigate = useNavigate()

	return (
		<footer className='w-full border-t border-light/10'>
			<div className='container max-w-screen-2xl flex flex-col md:flex-row items-start py-12 gap-y-8 gap-x-4 md:gap-x-8 lg:gap-x-20 '>
				<div className='flex flex-col justify-between items-start w-full gap-y-4 flex-1 md:w-40 lg:w-60'>
					<div className='flex items-center gap-2 text-2xl font-semibold'>
						<img alt='Logo' className='h-8 flex-none hover:cursor-pointer' src={Logo} onClick={() => navigate('/')} /> {ApplicationName}
					</div>
					{/* <div className='text-sm text-muted-foreground'>{FooterSlogan}</div> */}
					<div className='flex gap-1 ml-[-10px]'>{SocialMediaLinks.map((socialMediaLink) => socialMediaLink.icon)}</div>
				</div>
				{FooterSections.map((footerLink) => (
					<FooterLinks key={footerLink.title} {...footerLink} />
				))}
			</div>
			<div className='container max-w-screen-2xl text-center text-primary/30 mb-6 flex items-center justify-between'>
				<EvanHenryLink />
			</div>
		</footer>
	)
}

export default Footer
