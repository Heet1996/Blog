import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import axios from 'axios';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPost:null
    };
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                this.setState({
                    posts:response.data
                })
            });

    }
    postSelectedHandler=(id)=>{
        this.setState({
            selectedPost:id
        });
    }
    render () {
        const posts=this.state.posts.slice(0,4);
        const updatedPost=posts.map((post)=>{return (<Post 
            key={post.id} 
            post={{...post,author:'Heet'}}
            clicked={()=>this.postSelectedHandler(post.id)}
            />)
        });
        
        return (
            <div>
                <section className="Posts">
                    {updatedPost}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;