import React from 'react'

const Create = () => {
  return (
    <section id='create'>
        <div className='wrapper'>
            <h1 id='input-head-title'>Az URL lerövidítése</h1>
            <br/>
            <div id='input-form-container'>
                <form action="" id='long-url-input-form'>
                    
                    <input type="text" id='long-url-input-field'/>
                    
                    <input type="submit" value='Rövidít' id='submit-create'/>
                </form>
            </div>
        </div>
    </section>
    
  )
}

export default Create