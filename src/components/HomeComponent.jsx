import React from "react";
import "./HomeComponent.css";
import logo from '../logo.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Mail from "./MailComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faCaretUp, faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import eOrderType from '../shared/enums/eOrderType';
import { connect } from "react-redux";
import { changeMailOrder, setStartDate, setEndDate, resetDate, handleSearch, filterMails, onEnter, resetSearch } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        mails: state.mails,
        order: state.order,
        startDate: state.startDate,
        endDate: state.endDate,
        searchMsg: state.searchMsg
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeMailOrder: () => { dispatch(changeMailOrder()) },
    setStartDate: (date) => { dispatch(setStartDate(date)) },
    setEndDate: (date) => { dispatch(setEndDate(date)) },
    resetDate: () => { dispatch(resetDate()) },
    handleSearch: (content) => { dispatch(handleSearch(content)) },
    filterMails: () => { dispatch(filterMails()) },
    onEnter: (keyStroke) => { dispatch(onEnter(keyStroke)) },
    resetSearch: () => { dispatch(resetSearch()) }
})

class Home extends React.Component {

    render() {
        return (
            <div className="middle-container">
                <div className="filter-container">
                    <div className="date-container">
                        <div className="date-picker">
                            <DatePicker
                                className="place-icon"
                                placeholderText="&#xf073; START DATE"
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
                                maxDate={this.props.endDate === null ? new Date() : this.props.endDate}
                            />
                        </div>

                        <div className="date-picker">
                            <DatePicker
                                className="place-icon"
                                placeholderText="&#xf073; END DATE"
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
                        </div>
                        <FontAwesomeIcon icon={faSync} className="refresh-icon" onClick={this.props.resetDate} />
                    </div>
                    <div className="mobile-date-container">
                        <div className="mobile-date-container-display">
                        <div className="mobile-date-picker">
                            <DatePicker
                                className="place-icon"
                                placeholderText="&#xf073; START DATE"
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
                                maxDate={this.props.endDate === null ? new Date() : this.props.endDate}
                            />
                        </div>

                        <div className="mobile-end-date-picker">
                        <div className="mobile-date-picker">
                            <DatePicker
                                className="place-icon"
                                placeholderText="&#xf073; END DATE"
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
                        </div>
                        <FontAwesomeIcon icon={faSync} className="refresh-icon mobile-refresh-icon" onClick={this.props.resetDate} />
                        </div>
                        </div>
                        
                    </div>
                    <div className="search-container">
                        <div>
                            <input
                                type="text"
                                onChange={(event) => this.props.handleSearch(event.target.value)}
                                value={this.props.searchMsg}
                                onKeyPress={(e) => this.props.onEnter(e.key)}
                                placeholder="Search mail"
                                className="search-bar"
                            />
                        </div>
                        <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={this.props.filterMails} />
                        <FontAwesomeIcon icon={faSync} className="refresh-icon" onClick={this.props.resetSearch} />
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
                            <span className="for-badge"></span>
                            <span className="email-sub">Subject</span>
                            <span className="email-date" onClick={this.props.changeMailOrder}>Date {this.props.order === eOrderType.normal ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</span>
                        </div>
                        <div className="mails-content">
                            <Mail mails={this.props.mails} />
                        </div>

                    </div>
                }
            </div>
        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Home));