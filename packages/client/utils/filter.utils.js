const stringFilters = [
  "firstName",
  "lastName",
  "maritalStatus",
  "emailAddress",
  "homePhone",
  "currentAddress",
  "employer",
  "title",
  "subjectPropertyAddress",
];

export const filterOptions = [...stringFilters];

export const filterRestrictions = {
  includes: "includes",
  equals: "equals",
};
