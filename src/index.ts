import express, { Express, Request, Response } from 'express';
import { readFileSync } from 'fs';
import axios from 'axios';

const app: Express = express();
const port = 9000;

app.get('/', (req: Request, res: Response) => {
	res.send(`<a href="/file")>Read file</a><br><a href="/cpu")>Heavy cpu</a><br><a href="/cpu")>read from server</a>`);
});

app.get('/file', (req: Request, res: Response) => {
	const file = readFileSync('./testfile.txt', 'utf-8');
	res.send('<b>Express + TypeScript Server</b> ' + file);
});

app.get('/cpu', (req: Request, res: Response) => {
	mySlowFunction(10);
	res.send('<b>Express + TypeScript Server</b> ');
});

app.get('/sleepy', async (req: Request, res: Response) => {
	await new Promise(resolve => setTimeout(resolve, 1000));
	res.send('resolved dummy');
});

app.get('/readfromserver', async (req: Request, res: Response) => {
	let result = await axios.get('http://localhost:9000/sleepy');
	res.send('resolved ' +result.data);
});


app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


function mySlowFunction(baseNumber:number) {
	console.time('mySlowFunction');
	let result = 0;
	for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
		result += Math.atan(i) * Math.tan(i);
	};
	console.timeEnd('mySlowFunction');
}
