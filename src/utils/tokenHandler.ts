

const addTokenToLocalStorage = (token: string) => {
  localStorage.setItem("authToken", token);
};

const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const encryptedToken = localStorage.getItem("authToken");

    if (encryptedToken) {
  
      return encryptedToken;
    }
  }

  return null; // Return null when localStorage is unavailable
};

const removeTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
  }
};

export { addTokenToLocalStorage, getTokenFromLocalStorage, removeTokenFromLocalStorage };
