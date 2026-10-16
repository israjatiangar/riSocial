import { useReducer } from 'react'
import { createContext } from 'react'

const PostListDefault = [
	{
		id: 1,
		title: 'His mother had always taught him',
		body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
		tags: ['history', 'american', 'crime'],
		reactions: {
			likes: 192,
			dislikes: 25,
		},
		views: 305,
		userId: 121,
	},
	{
		id: 2,
		title: 'He was an expert but not in a discipline',
		body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
		tags: ['french', 'fiction', 'english'],
		reactions: {
			likes: 859,
			dislikes: 32,
		},
		views: 4884,
		userId: 91,
	},
]
export const PostListContext = createContext({})

export default function PostListContextProvider({ children }) {
	function PostListReducer(currentPostList, action) {
		console.log(action)
		return currentPostList //TODO
	}
	const [postList, dispatchPostList] = useReducer(
		PostListReducer,
		PostListDefault
	)
	const PostList = {
		postList,
		addPost: () => null,
		deletePost: () => null,
	}
	return (
		<PostListContext.Provider value={{ PostList }}>
			{children}
		</PostListContext.Provider>
	)
}
