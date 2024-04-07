import React from 'react'

const navbar = () => {
  return (
    <nav>
        <div className='wrapper'>
            <span className='navlogo'>mytinyurl</span>
            <ul>
                <li><a href="#">Főoldal</a></li>
                <li><a href="#">Rólunk</a></li>
                <li><a href="#">Statisztikák</a></li>
                <li><a href="#">Jogi nyilatkozat</a></li>
                <li><a href="#">Támogatás</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default navbar