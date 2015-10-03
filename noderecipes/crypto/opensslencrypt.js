

var crypto = require('crypto'),
	fs = require('fs'),
	algo = 'aes256',
	key = 'cheese';

var text = fs.readFileSync('cipher.txt', {
	encoding: 'utf8'
});

var cipher = crypto.createCipher(algo, key);
var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');

console.log(encrypted);

var decipher = crypto.createDecipher(algo, key);
var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');

if (decrypted === text){
	console.log('success!!!');
	console.log(text);
}
