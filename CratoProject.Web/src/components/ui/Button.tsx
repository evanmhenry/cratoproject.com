import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				brand: 'bg-brand text-brand-foreground hover:bg-brand/90',
				brandGradient: 'bg-brand-gradient hover:opacity-90   text-brand-foreground',
				brandGhost: 'hover:text-brand',
				success: 'bg-success text-success-foreground hover:bg-success/90',
				warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/60',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				purple: 'bg-purple text-purple-foreground hover:bg-purple/90',
				blue: 'bg-blue text-blue-foreground hover:bg-blue/90',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8 text-md rounded-lg',
				icon: 'h-10 w-10',
			},
			loading: {
				true: 'pointer-events-none',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean
	loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, loading = false, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button'
	return (
		<Comp className={cn(buttonVariants({ variant, size, loading, className }))} ref={ref} {...props}>
			{loading ? <Loader2 className='animate-spin h-5 w-5 mr-2' /> : null}
			{props.children}
		</Comp>
	)
})
Button.displayName = 'Button'

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
