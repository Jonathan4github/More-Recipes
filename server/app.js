import express from 'express';
import bodyParser from 'body-Parser';
import recipeRoutes from './routes/apiRoutes.js';

const app = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200);
    return res.json({
        Name: "Jonathan",
        Message: "Welcome to more recipes"

    });
});
app.use('/api/', recipeRoutes);
app.listen(port, console.log('server running at ' + port));

export default app;