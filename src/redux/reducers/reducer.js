import Mails from "../../shared/mails";
import eOrderType from "../../shared/enums/eOrderType";
import * as ActionTypes from '../ActionTypes'


export const initialState = {
    mails: Mails,
    dateFilteredMails: Mails,
    searchFilteredMails: Mails,
    startDate: null,
    endDate: null,
    searchMsg: "",
    order: eOrderType.normal
}

export const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.CHANGE_MAIL_ORDER:
            if (state.order === eOrderType.normal) {
                return { ...state, order: eOrderType.reverse, mails: state.mails.reverse() }
            }
            else {
                return { ...state, order: eOrderType.normal, mails: state.mails.reverse() }
            }

        case ActionTypes.SET_START_DATE:
            state =  { ...state, startDate: action.payload };
            if(state.endDate != null) {
                let startTime = state.startDate.getTime();
                let endTime = state.endDate.getTime();
                let mailResults = state.searchFilteredMails.filter((mail) => {
                    let mailDate = new Date(mail.date).getTime();
                    return mailDate >= startTime && mailDate < endTime
                })
                let dateFilterMails = Mails.filter((mail) => {
                    let mailDate = new Date(mail.date).getTime();
                    return mailDate >= startTime && mailDate < endTime
                })
                state = {...state, mails: mailResults, dateFilteredMails: dateFilterMails };
            }
            return state;

        case ActionTypes.SET_END_DATE:
            state = { ...state, endDate: action.payload }
            if(state.startDate != null) {
                let startTime = state.startDate.getTime();
                let endTime = state.endDate.getTime();
                let mailResults = state.searchFilteredMails.filter((mail) => {
                    let mailDate = new Date(mail.date).getTime();
                    return mailDate >= startTime && mailDate < endTime
                })
                let dateFilterMails = Mails.filter((mail) => {
                    let mailDate = new Date(mail.date).getTime();
                    return mailDate >= startTime && mailDate < endTime
                })
                state = {...state, mails: mailResults, dateFilteredMails: dateFilterMails };
            }
            return state;

        case ActionTypes.RESET_DATE:
            state = {...state, startDate: null, endDate: null};
            if (state.searchMsg === "") state = { ...state, mails: Mails }
            else state = {...state, mails:state.searchFilteredMails, dateFilteredMails: Mails}
            return state;

        case ActionTypes.HANDLE_SEARCH:
            let searchMessage = action.payload;
            state = {...state, searchMsg: searchMessage};
            return state

        case ActionTypes.FILTER_MAILS:
                if (state.startDate === null || state.endDate === null) {
                    let mailResults = Mails.filter((mail) => mail.subject.indexOf(state.searchMsg) !== -1 || mail.body.indexOf(state.searchMsg) !== -1);
                    state = {...state, mails: mailResults, searchFilteredMails: mailResults };
                    if (state.searchMsg === "") state = {...state, mails: state.dateFilteredMails };
                }
                else {
                    let mailResults = state.dateFilteredMails.filter((mail) => mail.subject.indexOf(state.searchMsg) !== -1 || mail.body.indexOf(state.searchMsg) !== -1);
                    let searchFilterMails = Mails.filter((mail) => mail.subject.indexOf(state.searchMsg) !== -1 || mail.body.indexOf(state.searchMsg) !== -1);
                    state = {...state, mails: mailResults, searchFilteredMails: searchFilterMails };
                    if (state.searchMsg === "") state= {...state, mails: state.dateFilteredMails };
                }
            return state;

        case ActionTypes.ON_ENTER:
            if(action.payload === 'Enter') {
                if (state.startDate === null || state.endDate === null) {
                    let mailResults = Mails.filter((mail) => mail.subject.indexOf(state.searchMsg) !== -1 || mail.body.indexOf(state.searchMsg) !== -1);
                    state = {...state, mails: mailResults, searchFilteredMails: mailResults };
                    if (state.searchMsg === "") state = {...state, mails: state.dateFilteredMails };
                }
                else {
                    let mailResults = state.dateFilteredMails.filter((mail) => mail.subject.indexOf(state.searchMsg) !== -1 || mail.body.indexOf(state.searchMsg) !== -1);
                    let searchFilterMails = Mails.filter((mail) => mail.subject.indexOf(state.searchMsg) !== -1 || mail.body.indexOf(state.searchMsg) !== -1);
                    state = {...state, mails: mailResults, searchFilteredMails: searchFilterMails };
                    if (state.searchMsg === "") state= {...state, mails: state.dateFilteredMails };
                }
            }
            return state;

        case ActionTypes.RESET_SEARCH: 
            return {...state, searchMsg: "", mails: state.dateFilteredMails, searchFilteredMails: Mails}

        default:
            return state
    }
}