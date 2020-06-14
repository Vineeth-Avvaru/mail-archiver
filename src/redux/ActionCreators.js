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