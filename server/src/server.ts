import express from 'express';

const app = express();

const PORT = 5000;
app.get('/', (req: any, res: any) => {
  res.send("dsdk");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
