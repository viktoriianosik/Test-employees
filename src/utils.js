export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const sortArray = (a, b) => {
  if (a.lastName < b.lastName) {
    return -1;
  }
  if (a.lastName > b.lastName) {
    return 1;
  }
  return 0;
};

export const sortByMonth = (a, b) => {
  const date1 = new Date(a.dob);
  const date2 = new Date(b.dob);

  if (date1.getMonth() < date2.getMonth()) {
    return -1;
  }
  if (date1.getMonth() > date2.getMonth()) {
    return 1;
  }
  return 0;
};

export const sortByDay = (a, b) => {
  const date1 = new Date(a.dob);
  const date2 = new Date(b.dob);

  if (date1.getDate() < date2.getDate()) {
    return -1;
  }
  if (date1.getDate() > date2.getDate()) {
    return 1;
  }
  return 0;
};