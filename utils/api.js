export const getAuthHeaders = () => {
  return {
    headers: {
      Authorization: `Token ${localStorage.getItem("accessToken")}`,
    },
  };
};
