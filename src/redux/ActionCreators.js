import * as ActionTypes from './ActionTypes';

export const changeMailOrder = () => ({
    type: ActionTypes.CHANGE_MAIL_ORDER
})

export const setStartDate = (date) => ({
    type: ActionTypes.SET_START_DATE,
    payload : date
})

export const setEndDate = (date) => ({
    type: ActionTypes.SET_END_DATE,
    payload: date
})

export const resetDate = () => ({
    type: ActionTypes.RESET_DATE
})

export const handleSearch = (content) => ({
    type: ActionTypes.HANDLE_SEARCH,
    payload: content
})

export const filterMails = () => ({
    type: ActionTypes.FILTER_MAILS,
})

export const onEnter = (keyStroke) => ({
    type: ActionTypes.ON_ENTER,
    payload: keyStroke
})

export const resetSearch = () => ({
    type: ActionTypes.RESET_SEARCH
})