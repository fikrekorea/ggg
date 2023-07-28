import React from 'react'

const ViewStudent = () => {
  return (
    <div>
        <h2>Student Information</h2>

        <table border='1'>
      <tr>
      <th>Student Id</th><th>First Name</th><th>Last Name</th><th>Grade Level</th><th>Student Project</th><th colSpan='3'>Action</th>
      </tr>
      <tr>
      <td>1111</td><td>Noah</td><td>Abrham</td><td>Grade 12</td><td>Software Engineers</td><td> <input type="submit" value="View"/> </td><td><input type="submit" value="Edit"/></td><td><input type="submit" value="Delete"/></td>
      </tr>
      <tr>
      <td>1112</td><td>Noah</td><td>Abrham</td><td>Grade 8</td><td>Agriculture Engineers</td><td><input type="submit" value="View"/></td><td><input type="submit" value="Edit"/></td><td><input type="submit" value="Delete"/></td>
      </tr>
      <tr>
      <td>1113</td><td>Noah</td><td>Abrham</td><td>Grade 11</td><td>Food Engineers</td><td><input type="submit" value="View"/></td><td><input type="submit" value="Edit"/></td><td><input type="submit" value="Delete"/></td>
      </tr>
      <tr>
      <td>1114</td><td>Noah</td><td>Abrham</td><td>Grade 10</td><td>Mechanical Engineers</td><td><input type="submit" value="View"/></td><td><input type="submit" value="Edit"/></td><td><input type="submit" value="Delete"/></td>
      </tr>
      <tr>
      <td>1115</td><td>Noah</td><td>Abrham</td><td>Grade 10</td><td>Agriculture Engineers</td><td><input type="submit" value="View"/></td><td><input type="submit" value="Edit"/></td><td><input type="submit" value="Delete"/></td>
      </tr>
      <tr>
      <td>1116</td><td>Noah</td><td>Abrham</td><td>Grade 4</td><td>Agriculture Engineers</td><td><input type="submit" value="View"/></td><td><input type="submit" value="Edit"/></td><td><input type="submit" value="Delete"/></td>
      </tr>
    </table>
    </div>
  )
}

export default ViewStudent