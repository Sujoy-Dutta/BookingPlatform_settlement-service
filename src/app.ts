import express, {Express, Request, Response} from "express"
const app: Express = express();
app.use(express.json())

app.get("/health", (req: Request, res: Response) =>{
    return res.status(200).json({
        "Health": 'Ok!!'
    })
})

app.listen(3000, ()=>{
    console.log("Server running on PORT:3000")
})
