import React from 'react'
import {VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'


function Experience(props) {
    const pro=()=>{
        props.proj()
    }
  return (
    <div className='e'>
        <VerticalTimeline lineColor='#59b256'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2014-2015' iconStyle={{background:"#59b256",color:'#fff'}}
       >
        <h3 className='vertical-timeline-element-title'>Jai Rani Public School,Thodupuzha</h3>
        <p>High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2016-2017' iconStyle={{background:"#59b256",color:'#fff'}}
       >
        <h3 className='vertical-timeline-element-title'>St.Augstine's HSS , Kallorkad</h3>
        <p>Higher School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2017-2020' iconStyle={{background:"#59b256",color:'#fff'}}
       >
        <h3 className='vertical-timeline-element-title'>Santhigiri College of Computer Science, Vazithala</h3>
        <p>College</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2020-present' iconStyle={{background:"#e9d35b",color:'#fff'}} 
       >
        <h3 className='vertical-timeline-element-title'>Tata Consultancy Services,Bangalore</h3>
        <p>React Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2019-present' iconStyle={{background:"#5f74d2",color:'#fff'}} 
       >
        <h3 className='vertical-timeline-element-title'>Projects</h3>
        <button onClick={pro}>click here to know</button>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience