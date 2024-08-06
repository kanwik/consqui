const fs = require('fs');

try {
  const content = fs.readFileSync('data.json', 'utf8');
  const data = JSON.parse(content);
  console.log(data);
} catch (err) {
  console.error('Error reading the file:', err);
}
