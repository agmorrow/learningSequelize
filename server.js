const express = require('express');

const sequelize = require('./config');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 
We are going to build our folders and API's in such a way
where our folder structure will match our endpoints
This is accomplished by using "routing middleware"
*/

// Connect to the database prior to starting our server
// Force the database to drop/recreate the table
// whenever we start /restart our server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});