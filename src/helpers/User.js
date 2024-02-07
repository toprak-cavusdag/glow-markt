export const userLogin = (email) => {
  localStorage.setItem('user', email);
};

export const userFinder = () => {
  const value = localStorage.getItem('user');
  if (value) {
    return true;
  }
  return false;
};
