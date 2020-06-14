import Mails from "../../shared/mails";
import eOrderType from "../../shared/enums/eOrderType";
import * as ActionTypes from '../ActionTypes'


export const initialState = {
    mails: Mails,
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
            return { ...state, startDate: action.payload }
        case ActionTypes.SET_END_DATE:
            return { ...state, endDate: action.payload }
        default:
            return state
    }
}