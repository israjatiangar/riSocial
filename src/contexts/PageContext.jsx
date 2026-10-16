import { useState } from 'react'
import { createContext } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const PageContext = createContext({})

export default function PageContextProvider({ children }) {
	const [currentPage, setCurrentPage] = useState('HomePage')
	const Page = {
		currentPage,
		/** @param {string} value  */
		changePage: function (value) {
			setCurrentPage(value)
		},
	}
	return (
		<PageContext.Provider
			value={{
				currentPage: Page.currentPage,
				changePage: Page.changePage,
			}}>
			{children}
		</PageContext.Provider>
	)
}
