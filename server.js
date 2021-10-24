const express = require('express');
const app = express();

app.use(express.static('./dist/joe-smack-angular'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/joe-smack-angular/'}),
);
app.listen(process.env.PORT || 8080);