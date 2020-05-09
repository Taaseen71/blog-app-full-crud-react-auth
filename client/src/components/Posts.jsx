import React, { Component } from 'react'
import { getPosts } from "../services/posts"
import { Link } from 'react-router-dom'


class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
        }
    }

    async componentDidMount() {
        const posts = await getPosts()
        this.setState({ posts })
        console.log(this.state.posts)
    }
    render() {
        // const posts = this.state.posts.filter(post => {
        //     return post.title.toLowerCase().includes(this.state.filterValue.toLowerCase)
        // })
        // const POSTS = posts.map((post, index) =>
        //     <Post _id={post._id} name={post.name} imgURL={post.imgURL} price={post.price} key={index} />
        // )
        return (
            <>
                <h1>This is the POSTS page</h1>
                {this.state.posts.map((post) =>
                    <Link to={`/posts/${post._id}`}>
                        <img src={post.imgURL} alt={post.title} width="200px" height="200px" />
                    </Link>

                )}
            </>
        )
    }
}

export default Posts

