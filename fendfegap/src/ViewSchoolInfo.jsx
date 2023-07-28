import React from 'react'

const ViewSchoolInfo = () => {
  return (
    <div><h2>School Information</h2>
    <table border='1'>
      <tr>
      <th>School Name</th><th>Country</th><th>State</th><th>city</th><th>Category</th>
      <th>Level</th><th>Email</th><th>Action</th>
      </tr>
      <tr>
      <td>Ethio National School</td><td>Ethiopia</td><td>Addis Ababa</td>
      <td>Addis Ababa</td><td>Private</td><td>Nursery to Grade 12</td>
      <td>ethionational@edu.et</td><td>Edit</td>
      </tr>
    </table>
    </div>
  )
}

export default ViewSchoolInfo