

var fs = require('fs'),
	origPath,
	newPath, 
	args = process.argv;

if (args.length !== 4) {
	throw new Error('Invalid Arguments');
} else {
	origPath = args[2];
	newPath = args[3];
}

fs.rename(origPath, newPath, function(err) {
	if (err) {
		console.log(err)
	}
});