import express,{Application, Request, Response} from 'express';
import cors from 'cors';
const app:Application = express();
// parser
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// Testing server
app.get('/', (req: Request, res: Response) => {
    res.send('Working directory')
})
export default app