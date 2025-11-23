
echo "const express = require('express');
const apiRoutes = require('./api/index');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});" > server.js
