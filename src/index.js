import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SinglePage from './SinglePage';
import { Helmet } from 'react-helmet';
import List from './List';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import Top from './Top';
import './cute.css';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Helmet>
          <html lang="en" />
          <title>Cuteblog for react</title>
          <meta
            content="a new modern web blog template cute blog for react with helmet SEO"
            name=" description"
          />
          <meta content="Cuteblog for react" property="og:title" />
          <meta
            content="a new modern web blog template cute blog for react with helmet SEO"
            property="og:description"
          />
          <meta
            content="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
            property="og:image"
          />
          <meta
            content="https://axcora.com/getaxcoracms"
            property="og:author"
          />
          <meta content="Cuteblog for react" name="facebook:title" />
          <meta content="website" property="og:type" />
          <meta
            content="https://www.facebook.com/mesinkasircomplete"
            property="facebook:author"
          />
          <meta
            content="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
            name="facebook:image"
          />
          <meta content="Cuteblog for react" property="og:site_name" />
          <meta
            content="a new modern web blog template cute blog for react with helmet SEO"
            property="facebook:description"
          />
          <meta content="summary_large_image" name="twitter:card" />
          <meta
            content="https://twitter.com/hockeycomp"
            property="twitter:author"
          />

          <link
            href="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
            rel="icon"
            type="image/x-icon"
          />
          <meta content="@hockeycomp" name="twitter:site" />
          <meta
            content="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
            name="twitter:image"
          />
          <meta
            content="a new modern web blog template cute blog for react with helmet SEO"
            name="twitter:description"
          />
          <meta content="cuteblog for react" name="twitter:title" />
        </Helmet>
        <Top />
        <div className="container">
          <Nav />
        </div>
        <div>
          <div className="container">
            <div className="row">
              <Route path="/" component={List} exact />
              <Route path="/article" component={List} exact />
              <Route path="/article/:name" component={SinglePage} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
