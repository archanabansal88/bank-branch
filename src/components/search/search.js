import React from 'react'

const Search = ({onChange, value}) => {
  return (
    <div className='field'>
      <div className='control'>
        <input type='text' className='input' onChange={onChange} value={value} placeholder='Search' />
      </div>
    </div>

  )
}

export default Search
