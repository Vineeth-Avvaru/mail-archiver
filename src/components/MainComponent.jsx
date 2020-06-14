import React from "react";
import './MainComponent.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import MailDetail from "./MailDetailComponent";
import Home from "./HomeComponent";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        mails: state.mails
    }
}

class Main extends React.Component {

    render() {

        const MailWithIndex = ({ match }) => {
            return (
                <MailDetail mail={this.props.mails.filter((mails, index) => index === parseInt(match.params.mailIndex, 10))[0]} />
            )
        }

        return (
            <div className="main-container">
                <div className="header-container"></div>
                <Switch>
                    <Route exact path="/mails" component={() => <Home/>} />
                    <Route path="/mails/:mailIndex" component={MailWithIndex} />
                    <Redirect to="/mails" />
                </Switch>
                <div className="footer-container"></div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));