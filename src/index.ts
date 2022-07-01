import express, { Express, Request, Response } from 'express';
import { readFileSync } from 'fs';

const app: Express = express();
const port = 9000;

app.get('/', (req: Request, res: Response) => {
	// read file and output result
	res.send(`<a href="/file")>Read file</a><br><a href="/cpu")>Heavy cpu</a>`);
});

app.get('/file', (req: Request, res: Response) => {
	// read file and output result
	const file = readFileSync('./testfile.txt', 'utf-8');
	res.send('<b>Express + TypeScript Server</b> ' + file);
});

app.get('/cpu', (req: Request, res: Response) => {
	// read file and output result
	mySlowFunction(10);
	res.send('<b>Express + TypeScript Server</b> ');
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
