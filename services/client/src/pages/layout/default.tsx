import { JSXInternal } from 'preact/src/jsx'
import $ from './index.module.scss'

export const DefaultLayout = ({
	children,
}: {
	children: JSXInternal.Element
}) => {
	return (
		<div class={$.app}>
			<span class={$.banner}>
				Talkdesk Appoints William Welch as President and Chief Operating
				Officer. Learn More
			</span>
			<header class={$.header}>Header</header>
			<main class={$.main}>{children}</main>
			<footer class={$.footer}>Footer</footer>
		</div>
	)
}
