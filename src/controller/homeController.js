let getHomePage = (req, res) => {
  return res.render("index.ejs");
};

let getLoginPage = (req, res) => {
  return res.render("login/login.ejs");
};

module.exports = {
  getHomePage,
  getLoginPage,
};
