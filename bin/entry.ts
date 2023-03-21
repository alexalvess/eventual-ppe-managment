import app from '../src/webs/webapi/app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});