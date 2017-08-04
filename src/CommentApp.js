import React,{ Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            commentlist:[]
        }
    }
    handleSubmitComment(arg){
        this.state.commentlist.push(arg)
        this.setState({
            commentlist: this.state.commentlist
        })
    }
    render(){
        return (
            <div className="wrapper">
                <CommentInput onSubmit={ this.handleSubmitComment.bind(this) }/>
                <CommentList commentlist={ this.state.commentlist } />
            </div>
        )
    }
}
export default CommentApp