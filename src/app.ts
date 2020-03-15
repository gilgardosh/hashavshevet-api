import express from 'express';
import http from 'http';


const app: express.Application = express();
const server = http.createServer(app);
const { PORT = 3000 } = process.env;

app.use('/', (req, res) => {
    res.send('hello');
});


server.listen(PORT, () => 
    console.log('Server is running http://localhost:'+PORT)
    
);