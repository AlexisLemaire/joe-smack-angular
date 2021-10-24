const express = require('express');
const app = express();

app.use(express.static('./dist/frontend-angular'));
app.get('/*', (req, res) =>
    res.sendFile('./dist/frontend-angular/index.html')
);
app.listen(process.env.PORT || 8080);