const app = require('./app');

const port = app.get('port');
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app is lisiting on http://localhost:${port}`);
});
