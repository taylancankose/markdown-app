import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clickQuestionMark } from '../redux/markDownSlice'

function Header() {
  const dispatch = useDispatch()
  const isClicked = useSelector(state => state.markdown.isClicked)
  console.log(isClicked)
  return (
    <div className='headerContainer'>
        <div className='markdownHeaderContainer'>
        <h1 className='markdownHeader'>Markdown Previewer</h1>
        </div>
        <div className='questionContainer'>
        <span 
        onClick={() => dispatch(clickQuestionMark(!isClicked))}
        className='question'>?</span>
        </div>
    </div>
  )
}

export default Header