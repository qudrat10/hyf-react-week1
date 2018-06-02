import React, { Component } from 'react';
import './Data';
import Articles from './Data';
import { MainTitle, SubTitle } from './Article';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <p>
           <a className='maintitle' href='https://news.ycombinator.com/news'>Hacker News</a>|
           <a className='comment' href='https://news.ycombinator.com/newcomments'>Comments</a> |
           <a className='show' href='https://news.ycombinator.com/show'>Show</a> |
           <a className='Ask' href='https://news.ycombinator.com/ask'>Ask</a> |
           <a className='job' href='https://news.ycombinator.com/jobs'>Jobs</a>|
           <a className='submit' href='https://news.ycombinator.com/submit'>Submit</a> 
           <a className='login' href='https://news.ycombinator.com/login?goto=news'>Login</a>

           </p>
        </header>
        <div>
          <ol className='mine'>{Articles.hn.topStories.map((item) => {
            return (
              <div id='BlockTitle'>
                <MainTitle title={item.title} key={item.id} url={item.url} />
                <SubTitle by={item.by} id={item.by.id} timeISO={item.timeISO} />
              </div>
            )
          })}
          </ol>
           
        </div>
      </div>

    );
  }
}

export default App;