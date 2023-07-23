import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'
import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setComment] = useState('')
  //   const [commentObj, setCommentObj] = useState({name: '', commentText: ''})
  const [commentList, setCommentList] = useState([])
  const onChangeName = event => {
    setName(event.target.value)
  }
  const onChangeComment = event => {
    setComment(event.target.value)
  }

  const submitComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidV4(),
      name,
      commentText,
    }
    setCommentList(prevState => [...prevState, newComment])
    setName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={submitComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(each => (
          <CommentItem key={each.id} commentDetails={each} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
