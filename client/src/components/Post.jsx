import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPost, deletePost } from "../services/posts"


class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                title: "",
                description: "",
                imgURL: "",
                reaction: "",
                updatedAt: "",
            }
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const post = await getPost(id);
        this.setState({ post })
        console.log(this.state.post)
    }
    render() {
        const post = this.state.post

        return (
            <>
                <h3>{post.title}</h3>
                <img src={post.imgURL} alt={post.title} width="200px" />
                <p>{post.description}</p>
                <p>{post.reaction}
                    <span>
                        {`posted at: ${post.createdAt}`}
                        {`updated at: ${post.updatedAt}`}
                    </span>
                </p>


            </>
        )

    }



}


export default Post;
