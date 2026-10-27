import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import PostListContextProvider from '../contexts/PostListContext'
export default function App() {
	return (
		<main className='grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] justify-items-center gap-4'>
			<Navbar />
			<PostListContextProvider>
				<Outlet />
			</PostListContextProvider>
			<Footer />
		</main>
	)
}
