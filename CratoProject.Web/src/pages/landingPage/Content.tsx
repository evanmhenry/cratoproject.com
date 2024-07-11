/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom'
import { InstagramIcon, TwitterIcon } from '@/components/icons/SocialIcon'
import path from 'path'

export const ApplicationName = 'Crato Project'

const EMAIL = 'info@placeholder.com'
const SUBJECT = 'General Inquiry'

export const PrimaryCta = 'Get Started'
export const SecondaryCta = 'Learn More'

export const handlePrimaryCtaClick = () => {
	// window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`
}

export const handleSecondaryCtaClick = () => {
	console.log('Learn more')
}

export const NavMenuOptions = [{ name: 'Start Here', path: '/docs/start-here' }]

export const DocsSections = [
	{
		title: 'Guides',
		path: '/guides',
		options: [
			{
				label: 'Testosterone Optimization',
				path: '/guides/testosterone-optimization',
			},
			{
				label: 'Fitness Foundations',
				path: '/guides/fitness-foundations',
			},
			{
				label: 'Nutrition Foundations',
				path: '/guides/nutrition-foundations',
			},
		],
	},
	{
		title: 'Principles',
		path: '/principles',
		options: [
			{
				label: 'Pareto Principle',
				path: '/principles/pareto-principle',
			},
			{
				label: 'Principle 1',
				path: '/principles/principle-1',
			},
			{
				label: 'Principle 2',
				path: '/principles/principle-2',
			},
			{
				label: 'Principle 3',
				path: '/principles/principle-3',
			},
		],
	},
	{
		title: 'Tactics',
		path: '/tactics',
		options: [
			{
				label: 'Tactics 1',
				path: '/tactics/tactic-1',
			},
			{
				label: 'Tactics 2',
				path: '/tactics/tactic-2',
			},
			{
				label: 'Tactics 3',
				path: '/tactics/tactic-3',
			},
		],
	},
	{
		title: 'Tools',
		path: '/tools',
		options: [
			{
				label: 'Tool 1',
				path: '/tools/tool-1',
			},
			{
				label: 'Tool 2',
				path: '/tools/tool-2',
			},
			{
				label: 'Tool 3',
				path: '/tools/tool-3',
			},
		],
	},
]

export const HeroTitle = () => (
	<div>
		Health <span className='text-brand-gradient bg-gradient-to-r from-green-400 via-blue-300 to-white'>Simplified</span>
	</div>
)

export const HeroDescription = 'A growing collection of principles, tactics, and tools to simplify your health.'

export const FeaturesDescription = 'Our platform offers a variety of features to help you manage and streamline your data.'
export const FeatureList = [
	{
		name: 'Data Import',
		title: 'Easily Import Data',
		description: 'Connect to your system or upload files to import data effortlessly. Avoid manual data entry in spreadsheets.',
		// image: Placeholder,
	},
	{
		name: 'Custom Setup',
		title: 'Configure Custom Settings',
		description: 'Customize configurations and distributions based on your needs. No more manual calculations.',
		// image: Placeholder,
	},
	{
		name: 'History Tracking',
		title: 'Maintain Detailed Records',
		description: 'Keep detailed records of all your operations. Easily review past data.',
		// image: Placeholder,
	},
	{
		name: 'Export Options',
		title: 'Seamless Export',
		description: 'Export data directly to your preferred software. Simplify your workflow.',
		// image: Placeholder,
	},
]

// export const PricingOptions = [
// 	{
// 		name: 'Free Trial',
// 		price: 'Free',
// 		description: 'Start with a free trial to explore our platform.',
// 		bullets: ['30-day free trial', 'Platform setup', 'System integration', 'Customer support'],
// 		cta: PrimaryCta,
// 		primary: false,
// 		action: handlePrimaryCtaClick,
// 	},
// 	{
// 		name: 'Premium',
// 		price: 'Contact Us',
// 		description: 'Ideal for businesses with multiple locations.',
// 		bullets: ['Advanced features', 'Multiple configurations', 'Priority support', 'Custom integrations'],
// 		cta: PrimaryCta,
// 		primary: true,
// 		action: handlePrimaryCtaClick,
// 	},
// ]

export const FaqDescription = 'Frequently Asked Questions'
export const FaqList = [
	{
		question: 'How does your platform work?',
		answer: 'Our platform allows you to import data, configure settings, and export to your preferred software seamlessly.',
	},
	{
		question: 'Which systems are supported?',
		answer: 'We support integrations with various systems. Contact us to discuss specific integrations.',
	},
	{
		question: 'How can I start?',
		answer: 'Contact us to set up your account and begin using our platform.',
	},
	{
		question: 'What are the costs?',
		answer: 'Pricing varies based on usage and features. Refer to the pricing section or contact us for more details.',
	},
]

export const GetStartedTitle = 'Simplify Your Health'

export const FooterSections = [
	{
		title: 'Guides',
		items: [{ label: 'Support', link: `mailto:${EMAIL}` }],
	},
	{
		title: 'Brand',
		items: [{ label: 'About Us', link: '/about' }],
	},
]

export const SocialMediaLinks = [
	{ name: 'Twitter', icon: <TwitterIcon link='https://www.twitter.com/cratoproject' /> },
	{ name: 'Instagram', icon: <InstagramIcon link='https://www.instagram.com/cratoproject' /> },
	// { name: 'Discord', icon: <DiscordIcon link='https://www.discord.com/cratoproject' /> },
	// { name: 'YouTube', icon: <YouTubeIcon link='https://www.youtube.com/cratoproject' /> },
]

