import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './app-layout/AppLayout'
import ErrorPage from '@/pages/ErrorPage'
import LandingPage from '@/pages/landingPage/LandingPage'
import StartHerePage from '@/pages/docs/StartHerePage'
import WebLayout from './web-layout/WebLayout'
import DocsLayout from './docs-layout/DocsLayout'
import GuidesPage from '@/pages/docs/guides/GuidesPage'
import DashboardPage from '@/pages/app/DashboardPage'
import TestosteroneOptimizationGuide from '@/pages/docs/guides/TestosteroneOptimizationGuide'
import PrinciplesPage from '@/pages/docs/principles/PrinciplesPage'
import TacticsPage from '@/pages/docs/tactics/TacticsPage'
import ToolsPage from '@/pages/docs/tools/ToolsPage'
import FitnessFoundationsGuide from '@/pages/docs/guides/FitnessFoundationsGuide'
import NutritionFoundationsGuide from '@/pages/docs/guides/NutritionFoundationsGuide'
import ParetoPrinciplePage from '@/pages/docs/principles/ParetoPrinciplePage'

const BrowserRouter = createBrowserRouter([
	{
		path: '/',
		element: <WebLayout />,
		children: [
			{
				path: '',
				element: <LandingPage />,
			},
		],
		errorElement: <ErrorPage />,
	},
	{
		path: '/docs',
		element: <DocsLayout />,
		children: [
			{
				path: 'start-here',
				element: <StartHerePage />,
			},
			{
				path: 'guides',
				element: <GuidesPage />,
			},
			{
				path: 'guides/testosterone-optimization',
				element: <TestosteroneOptimizationGuide />,
			},
			{
				path: 'guides/fitness-foundations',
				element: <FitnessFoundationsGuide />,
			},
			{
				path: 'guides/nutrition-foundations',
				element: <NutritionFoundationsGuide />,
			},
			{
				path: 'principles',
				element: <PrinciplesPage />,
			},
			{
				path: 'principles/pareto-principle',
				element: <ParetoPrinciplePage />,
			},
			{
				path: 'tactics',
				element: <TacticsPage />,
			},
			{
				path: 'tools',
				element: <ToolsPage />,
			},
		],
	},
	{
		path: '/app',
		element: <AppLayout />,
		children: [
			{
				path: '',
				element: <DashboardPage />,
			},
		],
		errorElement: <ErrorPage />,
	},
])

export default BrowserRouter
