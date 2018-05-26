import React from 'react';
import './Article.css';
import './Data';


function MainTitle(props) {
    return (
        <li key={props.id} className='title'>
            {props.title ? <div>
            <img src='https://news.ycombinator.com/grayarrow.gif'
            alt='arrow' className='votearrow'></img>
             <a href={props.url}>{props.title}</a>
             </div> : null}
        </li>
    );
}
function TimePassed(props) {
    return (
        <span>{new Date() - props.timeISO} ago</span>
    )
}
function SubTitle(props) {
    return (
        <p className='detail'>points by {props.by.id} <TimePassed /> | hide | comments</p>
    )
}
export {
    MainTitle,
    SubTitle,
}