import express from "express";

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.json("Ola Mundo");
});

app.listen(300, () => console.log("connected"));

export default app;
