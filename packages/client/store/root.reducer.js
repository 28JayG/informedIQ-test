import { combineReducers } from "redux";
import { BorrowersReducer } from "./borrowers/borrowers.reducer";

const rootReducer = combineReducers({
    borrowersReducer: BorrowersReducer
})

export default rootReducer