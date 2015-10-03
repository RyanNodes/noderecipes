

var fs = require('fs'),
	file = '3-9/file.txt';

//hidden file
fs.chmod(file, 4000, function(err) {
	if (err) throw err;
});

//individual read
fs.chmod(file, 0200, function(err) {
	if (err) throw err;
});

//individual execute
fs.chmod(file, 0100, function(err) {
	if (err) throw err;
});

//individual read + execute
fs.chmod(file, 0300, function(err) {
	if (err) throw err;
});

//full control
fs.chmod(file, 0777, function(err) {
	if (err) throw err;
});

// requires root access
fs.chown(file, 0 /* root */, 0, function(err) {
	if (err) throw err;
});

fs.chown(file, 1000, 1000, function(err) {
	if (err) throw err;
});