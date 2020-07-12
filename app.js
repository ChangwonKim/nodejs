import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookeParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter"
import viderRouter from "./routers/videoRouter"
import globalRouter from "./routers/globalRouter"
import routes from "./routes"
const app = express();

//middle ware(중간 처리 함수)
app.use(cookeParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(helmet());
app.use(morgan("dev"));

//router연결(각각의 웹페이지로 분할)
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.vidoes, viderRouter);
export default app;