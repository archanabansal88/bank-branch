import React from 'react'

const Dropdown = ({data, onChange, selected}) => {
  return (
    <div className='field'>
      <div className='control'>
        <div className='select'>
          <select onChange={onChange}>
            {data.map((city, index) => {
              const isSelected = selected === city
              return <option key={index} selected={isSelected} >{city}</option>
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
