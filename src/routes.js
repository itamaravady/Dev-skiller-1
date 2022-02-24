import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { CarApp } from './pages/car-app.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: 'car',
        component: <CarApp />,
        label: 'Cars'
    },
    {
        path: 'about',
        component: <AboutUs />,
        label: 'About us'
    }
]

export default routes;