import app from '../src/adapters/webapi/app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});