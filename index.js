const express = require('express');
const app = express();

app.get('/t/:keyword', (req, res) => {
  const keyword = req.params.keyword;
  console.log('Keyword:', keyword); // Print the keyword in the console

  // Check if keyword is valid and matches your criteria

  // If keyword is valid, construct the path to the a.png file
  const imagePath = __dirname + '/a.png';

  // Send the a.png file as the response
  res.sendFile(imagePath);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
