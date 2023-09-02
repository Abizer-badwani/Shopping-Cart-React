import ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './css/Index.css'
import { Context } from './context/Context'
import { Toaster} from 'react-hot-toast'


const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Context>
            <App />
        </Context>
        <Toaster position='bottom-left' />
    </BrowserRouter>
)
