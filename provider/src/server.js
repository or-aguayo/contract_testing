const express = require('express');
const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 8081;
  app.listen(port, () => console.log(`Provider service listening on port ${port}`));
}
