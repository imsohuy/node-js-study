import express from 'express'

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", (req, res) => {
    res.render("index.ejs");
  });

  router.get("/login", (req, res) => {
    res.render("login/login.ejs");
  });

  router.get("/huy", (req, res) => {
    res.send("Hello World! Hi Huy");
  });

  return app.use("/", router);
};

export default initWebRoute;
