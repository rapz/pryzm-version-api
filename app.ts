import express from 'express';
import cors from 'cors';
import { promisify } from 'node:util'

const exec = promisify(require('child_process').exec);

const app = express();

app.use(cors());


app.get('/status', async (_, res) => {
    let EXEC_RETURN_whoami = (await exec('whoami')).stdout;
    let EXEC_RETURN_dir = (await exec('dir')).stdout;

    res.json({
        whoami: EXEC_RETURN_whoami,
        dir: EXEC_RETURN_dir
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000!')
});
