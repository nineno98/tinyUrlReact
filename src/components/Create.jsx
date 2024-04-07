import React from 'react'

const Create = () => {
  return (
    <section id='create'>
        <div className='wrapper'>
            <h2 id='input-head-title'>Add meg az URL-t!</h2>
            <br/>
            <div id='input-form-container'>
                <form action="" id='long-url-input-form'>
                    
                    <input type="text" id='long-url-input-field'/>
                    
                    <input type="submit" value='Create' id='submit-create'/>
                </form>
            </div>
        </div>
    </section>
    
  )
}

export default Create