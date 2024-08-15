const fs = require("fs");


const readStream = fs.createReadStream('input.txt');

const writeStream = fs.createWriteStream('output.txt');


readStream.on('data', (chunk) => {


	const Highload = writeStream.write(chunk);

	if(!Highload){
	
		console.log("Huge Data so pausing, applying backpresure")
		readStream.pause()
	}
})


writeStream.on('drain', () => {

	console.log("data drained, so resuming ");
	readStream.resume();
})

readStream.on('end', () => {

        console.log("end of read and write stream");
        writeStream.end();
})



readStream.on('error', () => { console.log("Error in read stream")});

writeStream.on('error', () => { console.log("Error in write stream")});
