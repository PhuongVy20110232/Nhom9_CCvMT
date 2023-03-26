import { render } from 'preact'
import './index.css'
import { Main } from './pages/routes'

render(<Main />, document.getElementById('app') as HTMLElement)
