import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (<>
                    <div className="home-page">
                        <section className="home-page__header">
                            <h1 className="header">
                                <span className="header--first">Wyrembelski.pl</span>
                                <span className="header--second">Coming soon...</span>
                            </h1>
                        </section>
                    </div>
                </>);
    }
}