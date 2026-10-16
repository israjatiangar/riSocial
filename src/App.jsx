import './App.css'
import Navbar from './components/Navbar'
import DynamicContent from './pages/DynamicContent'
import Footer from './components/Footer'
import PostListContextProvider from './contexts/AppContext'
export default function App() {
	return (
		<main className='flex h-screen w-screen flex-col'>
			<PostListContextProvider>
				<Navbar />
				<DynamicContent />
				<Footer />
			</PostListContextProvider>
		</main>
	)
}
