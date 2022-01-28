import axios from "axios";
import { BorrowersActionType } from "./borrowers.types";

export const fetchBorrowersStart = () => ({
  type: BorrowersActionType.FETCH_BORROWERS_START,
});

export const fetchBorrowersSuccess = (borrowers) => ({
  type: BorrowersActionType.FETCH_BORROWERS_SUCCESS,
  payload: borrowers,
});

export const fetchBorrowersFailure = (errorMessage) => ({
  type: BorrowersActionType.FETCH_BORROWERS_FAILURE,
  payload: errorMessage,
});

export const fetchBorrowersAsync = async (dispatch) => {
  dispatch(fetchBorrowersStart());

  try {
    const { data: borrowers } = await axios("http://localhost:1337/borrowers");
    dispatch(fetchBorrowersSuccess(borrowers));
  } catch (error) {
    dispatch(fetchBorrowersFailure(error.message));
  }
};
