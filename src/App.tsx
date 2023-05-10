import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/home'
import Destination from '@/pages/destination'
import Crew from '@/pages/crew'
import Technology from '@/pages/technology'
import Layout from './components/Layout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/destination', element: <Destination /> },
        { path: '/crew', element: <Crew /> },
        { path: '/technology', element: <Technology /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
