import express from "express";
import d from "dotenv";
d.config();
const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.json("Ola Mundo");
});

app.listen(process.env.PORT, () => console.log("connected"));

export default app;
