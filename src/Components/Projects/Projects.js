import React from 'react'
import {VerticalTimeline ,VerticalTimelineElement} from 'react-vertical-timeline-component'
import './Project.css'
function Projects() {
  return (
    <div className='p'>

        <VerticalTimeline  lineColor='#59b256'>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2019-2020'
            iconStyle={{background:"#59b256",color:'#fff'}}>
                <h3>Main Project - To do Work</h3>
                <p> An Web Application where we can post and take different works on demand</p>
                <h4>Front end : JSP</h4>
                <h4>Back end : MySql</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2019'
            iconStyle={{background:"#59b256",color:'#fff'}}>
                <h3>Sub Project - Food Court</h3>
                <p> An Web Application which works as a online canteen</p>
                <h4>Front end : JSP</h4>
                <h4>Back end : MySql</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2020'
            iconStyle={{background:"#59b256",color:'#fff'}}>
                <h3>Sub Project - Student Portal</h3>
                <p> An Web Application for an college student where they can login and do several activities </p>
                <h4>Front end : React.js</h4>
                <h4>Back end : Firebase</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>

    </div>
  )
}

export default Projects