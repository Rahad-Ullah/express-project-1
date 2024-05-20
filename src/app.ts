import express, {NextFunction, Request, Response} from 'express'
const app = express()

// parsers
app.use(express.json())
app.use(express.text())


// middlewares
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next()
}

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello Devs!')
// })

app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: 'Successfully recieved data'
    })
})

// * params --> parameter
app.get('/:userId/:subId', (req: Request, res: Response) => {
    console.log(req.params);
    res.send('Hello Devs!')
  })


// * query --> parameter
app.get('/', logger, (req: Request, res: Response) => {
    console.log(req.query);
    res.send('Hello Devs!')
  })


export default app;