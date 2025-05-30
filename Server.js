const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Put your HTML, CSS, JS inside "public" folder

app.listen(PORT, () => {
  console.log(`Portfolio running on http://localhost:${PORT}`);
})
