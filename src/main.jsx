import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import CreatePostForm from './components/CreatePostForm.jsx'
import { RouterProvider } from 'react-router-dom'
import PostsList from './components/PostsList.jsx'
import Error404 from './components/Error404.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/create_post',
				element: <CreatePostForm />,
			},
			{
				path: '/home',
				element: <PostsList />,
			},
			{
				path: '/*',
				element: <Error404 />,
			},
			{
				path: '/',
				element: <Navigate to='/home' replace />,
			},
		],
	},
])
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
