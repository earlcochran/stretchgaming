import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div className="site-wrapper">
                <div className="site-wrapper-inner">
                    <div className="cover-container">
                        <div className="masthead clearfix">
                            <div className="inner">
                                <h3 className="masthead-brand"><Link to="/">StretchGaming</Link></h3>
                                <nav>
                                    <ul className="nav masthead-nav">
                                        <li><Link to="/servers">Servers</Link></li>
                                        <li><Link to="/donate">Donate</Link></li>
                                        <li><a href="/bans">Bans</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="inner cover">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App
