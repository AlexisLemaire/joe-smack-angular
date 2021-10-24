const express = require('express');
const app = express();

app.use(express.static('./dist/joe-smack-angular'));
app.get('/*', (req, res) =>
    res.sendFile('./dist/joe-smack-angular/index.html'),
);
app.listen(process.env.PORT || 8080);