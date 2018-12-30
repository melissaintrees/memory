import React from 'react';

const Footer = () => {
    return(
        <div>
            <div className="custom-footer ui inverted vertical footer segment">
                <div className="ui container">
                    <div className="ui stackable inverted divided equal height stackable grid">
                        <div className="three wide column">
                            <h4 className="ui inverted header">Links</h4>
                            <div className="ui inverted link list">
                                <a href="https://www.stmoore.net" className="item">Portfolio</a>
                                <a href="http://www.github.com/melissaintrees" className="item">GitHub</a>
                                <a href="http://www.linkedin.com/in/melissastmoore" className="item">LinkedIn</a>
                                <a href="mailto:melissaintrees@gmail.com" className="item">Say Hello</a>
                            </div>
                        </div>
                        <div className="seven wide column">
                            <h4 className="ui inverted header">Game made with React by Melissa St Moore | 2019</h4>
                            <p>Images were originally hosted on Pinterest and are for demo purposes only.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;