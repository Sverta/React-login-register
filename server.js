import DB from './server/db';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
// Allows you to set port in the project properties.
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET request to members table
app.get('/members', async (req, res) => {
    try {
        let members = await DB.Members.all();
        res.json(members);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// POST request to members table
app.post('/postMembers', async (req, res) => {
    var postData = req.body;
    try {
        let members = await DB.Registration.all(postData);
        res.end(JSON.stringify(members))
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// get request to task table
app.get('/tasks', async (req, res) => {
    try {
        let tasks = await DB.Tasks.all();
        res.json(tasks);
    } catch (e) {
         console.log(e);
        res.sendStatus(500);
    }
});
app.listen(port, () => console.log(`Listening on port ${port}`));