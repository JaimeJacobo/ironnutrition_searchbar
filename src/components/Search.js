import React from 'react'

const Search = (props) =>{
  return(
    <div>
      <input type="text" onChange={(event)=>props.changeSearchedWord(event.target.value)}/>
    </div>
  )
}

export default Search