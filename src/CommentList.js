import React,{ Component } from 'react'
import Comment from './Comment'

class CommentList extends Component{
    static defaultProps = {
        commentlist: []
    }
    render(){
        return (
            <div>
                {this.props.commentlist.map((v,i)=>
                    <Comment comment={v} key={i} />
                    )
                }
            </div>
        )
    }
}
export default CommentList