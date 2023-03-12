import RestConstants from "./RestConstants";


let Remotes = {
  getLogin: async (params) => {
    const url = process.env.REACT_APP_GET_USER_LOGIN + `?username=${params.username}&password=${params.password}`;
    try {
      const response = await RestConstants.jFetch(url);
      return response;
    } catch (err) {
      Remotes.handleError(err);
    }
  },
  postAddPet: async (response) => {
    const url = process.env.REACT_APP_POST_PET;
    try {
      const r = await RestConstants.jPost(url, response);
      return r;
    } catch (err) {
      Remotes.handleError(err);
    }
  },
  postStore: async (response) => {
    const url = process.env.REACT_APP_POST_STORE;
    try {
      const r = await RestConstants.jPost(url, response);
      return r;
    } catch (err) {
      Remotes.handleError(err)
    }
  },
  handleError: (err) => {
    if (err) {
      Window.confirm("Bir hata oluştu. Tekrar deneyiniz!")
    }
    throw err;
  }
};

export default Remotes;
