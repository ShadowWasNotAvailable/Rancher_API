const express = require('express')
const app = express()

app.get('/',(rqe,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/getslimes', (req, res) => {
    const slimeId = req.query.id;

    fetch(`https://slime-rancher.vercel.app/api/slime/${slimeId}`)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.error('Error fetching slimes:', error);
            res.status(500).send('Error fetching slimes');
        });
});

app.listen(8080,console.log('server running on port 8080'))