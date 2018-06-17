import React from 'react'

const List = ({data}) => {
  return (
    <table className='table is-striped is-bordered container'>
      <thead>
        <tr>
          {['Bank Name', 'IFSC', 'Branch', 'Address', 'City', 'State'].map((value, index) => <th key={index}>{value}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => {
          const {bank_name, ifsc, branch, address, state, city} = value
          return <tr key={index}>
            <td>{bank_name}</td>
            <td>{ifsc}</td>
            <td>{branch}</td>
            <td>{address}</td>
            <td>{city}</td>
            <td>{state}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default List
