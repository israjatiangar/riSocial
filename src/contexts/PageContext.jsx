import { useState } from 'react'
import { createContext } from 'react'

export const PageContext = createContext({})

export default function PageContextProvider({ children }) {
	const [currentPage, setCurrentPage] = useState('HomePage')
	const Page = {
		currentPage,
		/** @param {"HomePage" | "CreatePage"} value  */
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
