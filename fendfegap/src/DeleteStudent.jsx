import React from 'react'

const DeleteStudent = () => {
  return (
    <div>
        <h2>DeleteStudent</h2>
        <form>
        <input  className="box" type='search' placeholder='search student id'/><br/>
       {/*} Student Id:<input type='text' name='sid'/><br/>*/}
        <input  type='submit' value='Delete' id='submit'/>
</form>
        
    </div>
    
  )
}

export default DeleteStudent