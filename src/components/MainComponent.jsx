import React from "react";
import logo from '../logo.png';
import './MainComponent.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            mails: [],
            searchMsg: ""
        }
    }

    setStartDate(date) {
        this.setState({ startDate: date });
        console.log(this.state.startDate)
    }

    setEndDate(date) {
        this.setState({ endDate: date });
    }

    render() {
        return (
            <div className="main-container">
                <div className="header-container"></div>
                <div className="middle-container">
                    <div className="search-container">
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

                    <h3 className="results-bar">Results: {this.state.mails.length} mail(s)</h3>
                    {this.state.mails.length === 0 ?
                        <div className="logo-container">
                            <img src={logo} className="app-logo" alt="mail-archiver-logo" />
                        </div>
                        :
                        <div className="mails-container">
                            Byee
                        </div>
                    }
                </div>
                <div className="footer-container"></div>
            </div>
        )
    }
}

export default Main;