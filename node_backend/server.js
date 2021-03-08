const express = require('express'),
app = express(),
cors = require('cors'),
bodyParser = require('body-parser');

const routes = require('./src/routes');
routes(app);

const port = 9000;
app.listen(port , () => {
    console.log('server started on port' + `${port}`);
});

app.use((req,res) => {
    res.send('working');
});


