import React from 'react'
import "./intro.css"
//import tony from '../Intro/tony.jpg'

function Intro(props) {
    const navigate=()=>{
        props.navigatetologin()
               

    }
    const navigateto=()=>{
        props.navigatetoexp()
               

    }

  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My name is </h2>
                <h1 className='i-name'>Tony Jose </h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Web Developer</div>
                        <div className='i-title-item'>Traveller</div>
                        <div className='i-title-item'>Photographer</div>

                    </div>
                </div>
                <div className='i-desc'>
                    Seeking an opportnity to work an organisation and to work with fullest
                    dedication and to give my all efforts in work assigned to me and emerge into
                    a best notable name in the filed and develop into a model for the contemporary
                    generation.
                </div>
            </div>
            </div>

        <div className='i-right'>
            <div className='i-bg'>
          
            <ul>
                <li><h3> <button className='btn-default'></button></h3></li>
                <li><h3> <button className='btn-default'>Home</button></h3></li>
                <li><h3> <button className='btn-default' onClick={navigateto}>Experience</button></h3></li>
                <li><h3> <button className='btn-default' onClick={navigate}>Contact</button></h3></li>
                
                </ul>
                </div>
            </div>

    </div>
  )
}

export default Intro