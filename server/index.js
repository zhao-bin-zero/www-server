const express = require("express");
const app = express();

app.use(
  "/:lang(a)?",
  (req, res, next) => {
    next();
  },
  require("./routers")(app)
);

const port = process.env.PORT || 9003;
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});