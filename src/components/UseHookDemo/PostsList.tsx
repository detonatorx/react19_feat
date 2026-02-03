import { use } from "react";
import { Post, fetchPosts } from "../../api/api";

interface PostsListProps {
	postsPromise: Promise<Post[]>;
}

export default function PostsList({ postsPromise }: PostsListProps) {
	const posts = use(postsPromise);

	return (
		<div className="posts-list">
			<h3>Посты пользователя:</h3>
			{posts.length === 0 ? (
				<p>Постов нет</p>
			) : (
				<div className="posts-grid">
					{posts.map((post) => (
						<article key={post.id} className="post-card">
							<h4>{post.title}</h4>
							<p>{post.body}</p>
						</article>
					))}
				</div>
			)}
		</div>
	);
}
