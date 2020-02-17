import app from './app';

const PORT: number = 4200;

app.listen(PORT, () => {
    console.log('Express Server Listening on port ' + PORT);
});