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
    componentWillMount(){
        console.log(localStorage.comments)
        let commentlist = localStorage.comments
        if (commentlist) {
            commentlist = JSON.parse(commentlist)
            this.setState({ commentlist })
        }
    }
    handleSubmitComment(arg){
        //this.state.commentlist.push(arg)
        let a = this.state.commentlist
        a.push(arg)
        this.setState({
            commentlist: a
        })
        localStorage.setItem('comments',JSON.stringify(a))
    }
    handleDeleteComment(index){
        console.log(index)
        let a = this.state.commentlist
        a.splice(index,1)
        this.setState({
            commentlist:a
        })
        localStorage.setItem('comments',JSON.stringify(a))
    }
    render(){
        return (
            <div className="wrapper">
                <CommentInput onSubmit={ this.handleSubmitComment.bind(this) }/>
                <CommentList 
                commentlist={ this.state.commentlist } 
                onDeleteComment={this.handleDeleteComment.bind(this)} 
                />
            </div>
        )
    }
}
export default CommentApp