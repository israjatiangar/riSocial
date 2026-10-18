import { useReducer } from 'react'
import { createContext } from 'react'

// #region Definitions
/** @typedef Reaction
 * @property {number} likes
 * @property {number} dislikes
 */

/** @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} body
 * @property {Array<string>} tags
 * @property {Reaction} reactions
 * @property {number} userId
 */
// #endregion

// #region Default Posts
/** @type {Array<Post>} */
const PostListDefault = [
	{
		id: '1',
		title: 'His mother had always taught him',
		body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
		tags: ['history', 'american', 'crime'],
		reactions: {
			likes: 192,
			dislikes: 25,
		},
		userId: 121,
	},
	{
		id: '2',
		title: 'He was an expert but not in a discipline',
		body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
		tags: ['french', 'fiction', 'english'],
		reactions: {
			likes: 859,
			dislikes: 32,
		},
		userId: 91,
	},
]
// #endregion

// eslint-disable-next-line react-refresh/only-export-components
export const PostListContext = createContext({})

export default function PostListContextProvider({ children }) {
	function PostListReducer(postList, action) {
		let newPostList = []
		switch (action.type) {
			case 'Add':
				newPostList = [action.payload.post, ...postList]
				break
			case 'Delete':
				newPostList = postList.filter(
					item => item.id !== action.payload.id
				)
				break
			case 'Like':
				newPostList = postList.map(item => {
					return item.id === action.payload.id ?
							{
								...item,
								reactions: {
									...item.reactions,
									likes: item.reactions.likes + 1,
								},
							}
						:	item
				})
				break
			case 'Dislike':
				newPostList = postList.map(item => {
					return item.id === action.payload.id ?
							{
								...item,
								reactions: {
									...item.reactions,
									dislikes: item.reactions.dislikes + 1,
								},
							}
						:	item
				})
				break
		}
		return newPostList
	}
	const [postList, dispatchPostList] = useReducer(
		PostListReducer,
		PostListDefault
	)
	const PostList = {
		postList,

		/** @param {Post} post */
		addPost: post => {
			dispatchPostList({
				type: 'Add',
				payload: { post },
			})
		},
		/** @param {number} id*/
		deletePost: id => {
			dispatchPostList({
				type: 'Delete',
				payload: { id },
			})
		},
		likePost: id => {
			dispatchPostList({
				type: 'Like',
				payload: { id },
			})
		},
		dislikePost: id => {
			dispatchPostList({
				type: 'Dislike',
				payload: { id },
			})
		},
	}
	return (
		<PostListContext.Provider
			value={{
				PostList: PostList.postList,
				addPost: PostList.addPost,
				deletePost: PostList.deletePost,
				likePost: PostList.likePost,
				dislikePost: PostList.dislikePost,
			}}>
			{children}
		</PostListContext.Provider>
	)
}
