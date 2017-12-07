import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './About';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false, aboutPage: false };
  }

  componentWillMount() {
    this.toggleAbout = () => {
      this.setState({aboutPage: true});
    }

    this.toggleHome = () => {
      this.setState({aboutPage: false});
    }
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  renderAbout() {
      if(this.state.aboutPage === true) {
        return (<About />);
    } else {
      return (
        <div className={styles.container}>
          {this.props.children}
        </div>
      );
    }
  }

  render() {
    const buttonStyle ={
      margin: "20px"
    };
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Charles Allison - Author, Speaker, Researcher"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          />
          <div className="center-align">
          <button style={buttonStyle} onClick={this.toggleAbout} className="btn black">About</button>
          <button style={buttonStyle} onClick={this.toggleHome} className="btn black">Publications</button>
          </div>
          {this.renderAbout()}
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
