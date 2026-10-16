import './App.css'
import Navbar from './components/Navbar'
import DynamicContent from './pages/DynamicContent'
import Footer from './components/Footer'
import PageContextProvider from './contexts/PageContext'
export default function App() {
	return (
		<main className='flex h-screen w-screen flex-col'>
			<PageContextProvider>
				<Navbar />
				<DynamicContent />
			</PageContextProvider>
			<Footer />
		</main>
	)
}
