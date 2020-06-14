import Mails from "../../shared/mails";
import eOrderType from "../../shared/enums/eOrderType";

export const initialState = {
    mails: Mails,
    startDate: null,
    endDate: null,
    searchMsg: "",
    order: eOrderType.normal
}

export const Reducer = (state = initialState, action) => {

    return state;
}