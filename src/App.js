import React from 'react';
import { render } from 'react-dom';

// Components
import ElementContainer from './components/ElementContainer';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {
    render() {
        return (
            <div className="content">
                <Header />
                <ElementContainer />
                <Footer />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));