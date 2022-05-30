import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { addTextElement } from '../redux/markDownSlice'


function Markdown() {
    const dispatch = useDispatch()
    const isClicked = useSelector(state => state.markdown.isClicked)
    const questionText = useSelector(state => state.markdown.questionText)
    const userInput = useSelector(state => state.markdown.userInput)
    console.log(userInput)
  return (
    <div className='markdownArea scrollbar'>
        <textarea
        className='inputTextArea' 
        id="textarea"
        value={isClicked ? questionText : userInput}
        onChange = {(e) => dispatch(addTextElement(e.target.value))}
        />
        <section className='reactMarkdown'> 
        <ReactMarkdown className='output'
        children={isClicked ? questionText : userInput}
         />
         </section>
    </div>
  )
}

export default Markdown