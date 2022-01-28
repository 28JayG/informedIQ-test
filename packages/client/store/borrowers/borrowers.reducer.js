import { BorrowersActionType } from "./borrowers.types"

const INITIAL_STATE = {
    borrowers: null,
    loading: false,
    error: ''
}

export const BorrowersReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case BorrowersActionType.FETCH_BORROWERS_START:
            return {...state, loading: true};
        case BorrowersActionType.FETCH_BORROWERS_SUCCESS:
            return {...state, loading: false, borrowers: action.payload }
        case BorrowersActionType.FETCH_BORROWERS_FAILURE: 
         return {...state, loading: false, error: action.payload}
         default:
             return state
    }
}