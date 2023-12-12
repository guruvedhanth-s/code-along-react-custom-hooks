export const useStorage = (value) => {
    window.localStorage.setItem("context", value);
    window.sessionStorage.setItem("context", value);
  };
  