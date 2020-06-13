import React from "react";
import logo from '../logo.png';
import './MainComponent.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Mail from "./MailComponent";
import { Switch, Route, Redirect} from 'react-router-dom';
import MailDetail from "./MailDetailComponent";
import Mails from "../shared/mails";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            mails: Mails,
            searchMsg: ""
        }
    }

    setStartDate(date) {
        this.setState({ startDate: date });
    }

    setEndDate(date) {
        this.setState({ endDate: date });
    }

    render() {

        const ArchivedMails = () => {
            return(
                <div className="middle-container">
                    <div className="filter-container">
                        <div className="date-container">
                            <DatePicker
                                placeholderText="START DATE"
                                selected={this.state.startDate}
                                onChange={date => this.setStartDate(date)}
                                selectsStart
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                todayButton="Today"
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                maxDate={new Date()}
                            />

                            <DatePicker
                                placeholderText="END DATE"
                                selected={this.state.endDate}
                                onChange={date => this.setEndDate(date)}
                                selectsEnd
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                todayButton="Today"
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                minDate={this.state.startDate}
                                maxDate={new Date()}
                            />
                        </div>
                        <div className="search-container">
                            Search Bar
                        </div>
                    </div>

                    <h3 className="results-bar">Results: {this.state.mails.length} mail(s)</h3>
                    {this.state.mails.length === 0 ?
                        <div className="logo-container">
                            <img src={logo} className="app-logo" alt="mail-archiver-logo" />
                        </div>
                        :
                        <div className="mails-container">
                            <div className = "mails-header">
                                <span className="email-from">From</span>
                                <span className="email-to">To</span>
                                <span className="email-sub">Subject</span>
                                <span className="email-date">Date</span>
                            </div>
                            <div>
                                <Mail mails = {this.state.mails}/>
                            </div>    

                        </div>
                    }
                </div>
            )
        }

        const MailWithIndex = ({match}) => {
            return(
                <MailDetail mail={this.state.mails.filter((mails, index) => index === parseInt(match.params.mailIndex,10))[0]} />
            )
        }

        return (
            <div className="main-container">
                <div className="header-container"></div>
                <Switch>
                    <Route exact path="/mails" component={ArchivedMails}/>
                    <Route path="/mails/:mailIndex" component={MailWithIndex} />
                    <Redirect to="/mails" />
                </Switch>
                <div className="footer-container"></div>
            </div>
        )
    }
}

export default Main;