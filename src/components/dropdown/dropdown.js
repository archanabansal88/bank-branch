import React from 'react'

const Dropdown = ({data, onChange, selected}) => {
  return (
    <div className='field'>
      <div className='control'>
        <div className='select'>
          <select onChange={onChange} value={selected}>
            {data.map((city, index) => {
              return <option key={index}>{city}</option>
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
