import express from 'express';
import cors from 'cors';
import { promisify } from 'node:util'

const exec = promisify(require('child_process').exec);

const app = express();

app.use(cors());


app.get('/status', async (_, res) => {
    let EXEC_RETURN_pryzm = (await exec('pryzmd status')).stdout;
    let EXEC_RETURN_dir = (await exec('dir')).stdout;

    res.json(JSON.parse(EXEC_RETURN_pryzm))
})

app.listen(3000, () => {
    console.log('Server listening on port 3000!')
});
