import { filterRestrictions } from "./filter.utils";

export const filterBorrowers = (borrowers, filters) => {
  let filteredBorrowers = [...borrowers];

  filters.forEach((filter) => {
    switch (filter.restriction) {
      case filterRestrictions.includes:
        filteredBorrowers = filteredBorrowers.filter((borrower) => {
          return borrower[filter.selectedOption].includes(filter.inputValue);
        });
        break;

      case filterRestrictions.equals:
        filteredBorrowers = filteredBorrowers.filter(
          (borrower) => borrower[filter.selectedOption] === filter.inputValue
        );
        break;
    }
  });

  return filteredBorrowers;
};
