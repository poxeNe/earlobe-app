export const clearLocalStorage = () => {
  localStorage.removeItem("accessTokenObj");
  localStorage.removeItem("verifier");

  if (
    !localStorage.getItem("accessTokenObj") &&
    !localStorage.getItem("verifier")
  ) {
    return;
  } else {
    clearLocalStorage();
  }
};
