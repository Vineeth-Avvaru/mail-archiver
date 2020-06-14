import React from "react";
import "./HomeComponent.css";
import logo from '../logo.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Mail from "./MailComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import eOrderType from '../shared/enums/eOrderType';
import { connect } from "react-redux";
import { changeMailOrder, setStartDate, setEndDate } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        mails: state.mails,
        order: state.order,
        startDate: state.startDate,
        endDate: state.endDate
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeMailOrder: ()=> {dispatch(changeMailOrder())},
    setStartDate : (date) => {dispatch(setStartDate(date))},
    setEndDate : (date) => {dispatch(setEndDate(date))}
})

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            mails: this.props.mails,
            dateFilteredMails: this.props.mails,
            searchMsg: "",
            order: eOrderType.normal
        }

        this.handleChange = this.handleChange.bind(this);
        this.resetDate = this.resetDate.bind(this);
    }

    setEndDate(date) {
        this.setState({ endDate: date }, () => {
            if (this.state.startDate != null) {
                let startTime = this.state.startDate.getTime();
                let endTime = this.state.endDate.getTime();
                let mailResults = this.props.mails.filter((mail) => {
                    let mailDate = new Date(mail.date).getTime();
                    return mailDate >= startTime && mailDate < endTime
                })
                this.setState({ mails: mailResults, dateFilteredMails: mailResults });
            }
        });
    }
    resetDate() {
        this.setState({
            startDate: null,
            endDate: null,
        })
        if (this.state.searchMsg === "") this.setState({ mails: this.props.mails })
    }

    handleChange(e) {
        let searchMessage = e.target.value;
        this.setState({ searchMsg: searchMessage })
        if (this.state.startDate === null || this.state.endDate === null) {
            let mailResults = this.props.mails.filter((mail) => mail.subject.indexOf(searchMessage) !== -1 || mail.body.indexOf(searchMessage) !== -1);
            this.setState({ mails: mailResults });
            if (searchMessage === "") this.setState({ mails: this.props.mails });
        }
        else {
            let mailResults = this.state.dateFilteredMails.filter((mail) => mail.subject.indexOf(searchMessage) !== -1 || mail.body.indexOf(searchMessage) !== -1);
            this.setState({ mails: mailResults });
            if (searchMessage === "") this.setState({ mails: this.state.dateFilteredMails });
        }
    }

    render() {
        return (
            <div className="middle-container">
                <div className="filter-container">
                    <div className="date-container">
                        <DatePicker
                            placeholderText="START DATE"
                            selected={this.props.startDate}
                            onChange={date => this.props.setStartDate(date)}
                            selectsStart
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            todayButton="Today"
                            startDate={this.props.startDate}
                            endDate={this.props.endDate}
                            maxDate={this.props.endDate}
                        />
                        <DatePicker
                            placeholderText="END DATE"
                            selected={this.props.endDate}
                            onChange={date => this.props.setEndDate(date)}
                            selectsEnd
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            todayButton="Today"
                            startDate={this.props.startDate}
                            endDate={this.props.endDate}
                            minDate={this.props.startDate}
                            maxDate={new Date()}
                        />
                        <FontAwesomeIcon icon={faSync} className="refresh-icon" onClick={this.resetDate} />
                    </div>
                    <div className="search-container">
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.searchMsg}
                            placeholder="Search"
                        />
                    </div>
                </div>

                <h3 className="results-bar">Results: {this.props.mails.length} mail(s)</h3>
                {this.props.mails.length === 0 ?
                    <div className="logo-container">
                        <img src={logo} className="app-logo" alt="mail-archiver-logo" />
                    </div>
                    :
                    <div className="mails-container">
                        <div className="mails-header">
                            <span className="email-from">From</span>
                            <span className="email-to">To</span>
                            <span className="email-sub">Subject</span>
                            <span className="email-date" onClick={this.props.changeMailOrder}>Date {this.props.order === eOrderType.normal ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</span>
                        </div>
                        <div>
                            <Mail mails={this.props.mails} />
                        </div>

                    </div>
                }
            </div>
        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Home));