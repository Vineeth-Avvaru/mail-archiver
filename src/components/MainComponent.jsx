import React from "react";
import './MainComponent.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import MailDetail from "./MailDetailComponent";
import Mails from "../shared/mails";
import Home from "./HomeComponent";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mails: Mails,
        }
    }

    render() {

        const MailWithIndex = ({ match }) => {
            return (
                <MailDetail mail={this.state.mails.filter((mails, index) => index === parseInt(match.params.mailIndex, 10))[0]} />
            )
        }

        return (
            <div className="main-container">
                <div className="header-container"></div>
                <Switch>
                    <Route exact path="/mails" component={()=><Home mails={this.state.mails}/>} />
                    <Route path="/mails/:mailIndex" component={MailWithIndex} />
                    <Redirect to="/mails" />
                </Switch>
                <div className="footer-container"></div>
            </div>
        )
    }
}

export default Main;