import React, { Component } from 'react'
import { getPosts } from "../services/posts"



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
        return (
            <>
                <h1>This is the POSTS page</h1>
                {this.state.posts.map((post) =>
                    <div>
                        <h5>{post.title}</h5>
                        <p>{post.reaction}</p>
                        <img src={post.imgURL} alt="" />
                    </div>

                )}
            </>
        )
    }
}

export default Posts

