import Router from 'preact-router'
import { Home } from './home'
import { DefaultLayout } from './layout/default'

export const Main = () => (
	<DefaultLayout>
		<Router>
			<Home path="/" />
		</Router>
	</DefaultLayout>
)
