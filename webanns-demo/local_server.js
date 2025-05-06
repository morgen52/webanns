const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

const PORT = 8006;
app.listen(PORT, () => {
  console.log(`service run on: http://localhost:${PORT}/eval.html`);
});
