import React, { useState, useEffect } from "react";

import "./style.css";
import { connect } from "react-redux";
import { fetchBorrowersAsync } from "./store/borrowers/borrowers.actions";
import { filterBorrowers } from "./utils/borrowers.utils";
import Filter from "./components/filter/filter.component";

const COLUMN_KEYS = [
  "firstName",
  "lastName",
  "dateOfBirth",
  "creditScore",
  "maritalStatus",
  "w2Income",
  "emailAddress",
  "homePhone",
  "cellPhone",
  "currentAddress",
  "employer",
  "title",
  "startDate",
  "subjectPropertyAddress",
];

function App({ fetchBorrowersAsync, borrowers, loading }) {
  const [filters, setFilters] = useState([
    {
      selectedOption: "",
      restriction: "",
      inputValue: "",
    },
  ]);

  useEffect(() => {
    fetchBorrowersAsync();
  }, []);

  // TODO: Implement support for filters.

  if (loading) {
    return <h4>Loading ...</h4>;
  }

  const handleChange = (evt, filterIndex) => {
    const { id, value } = evt.target;

    const updatedFilters = filters.map((filter, index) =>
      index === filterIndex ? { ...filter, [id]: value } : filter
    );

    setFilters(updatedFilters);
  };

  const addFilter = () =>
    setFilters((prev) => [
      ...prev,
      {
        selectedOption: "",
        restriction: "",
        inputValue: "",
      },
    ]);

  return (
    <div>
      <h3>Borrowers</h3>
      <div className="add-filter row-spaced-between">
        <span>Filters</span>
        <button onClick={addFilter}>Add Filter</button>
      </div>

      {filters.map((_, index) => (
        <Filter key={index} onChange={(evt) => handleChange(evt, index)} />
      ))}

      <table>
        <thead>
          <tr>
            {COLUMN_KEYS.map((columnKey) => (
              <th key={columnKey}>{columnKey}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {borrowers &&
            filterBorrowers(borrowers, filters).map((borrower) => {
              return (
                <tr key={borrower.id}>
                  {COLUMN_KEYS.map((columnKey) => (
                    <td key={columnKey}>{borrower[columnKey]}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchBorrowersAsync: () => dispatch(fetchBorrowersAsync),
});

const mapStateToProps = (state) => ({
  borrowers: state.borrowersReducer.borrowers,
  loading: state.borrowersReducer.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
