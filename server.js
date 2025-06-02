const express = require('express');
const app = express();

app.use(express.json());

const subscribeToRoutes = require('./routing/routing');
subscribeToRoutes(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});