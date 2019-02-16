import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state={
        loadData:null
    }
    componentDidUpdate()
    {       if(!this.state.loadData || (this.state.loadData && this.props.id!==this.state.loadData.id) )
            {
                
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                .then((response)=>{
                    this.setState({loadData:response.data});
                    
                });
            }

    }
    
    render () {
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        if(this.props.id)
        {if(this.state.loadData)
        {   
            post = (
                <div className="FullPost" >
                    <h1>{this.state.loadData.title}</h1>
                    <p>{this.state.loadData.content}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        else {
            post=(
                <div className="FullPost" >
                    <h3>Loading Data ......</h3>
                </div>
            );
        }
    }
        
        
        return post;
    }
}

export default FullPost;