

var fs = require('fs');

fs.link('/Application/Sublime Text 2.app/Contents/SharedSupport/bin/subl', '-/bin/subl', function(err) {
	if (err) {
		console.log(err);
	}
});

fs.symlink('/Application/Sublime Text 2.app/Contents/SharedSupport/bin/subl', '-/bin/subl', function(err) {
	if (err) {
		console.log(err);
	}
});

fs.readlink('-/bin/subl', function(err, stringOut) {
	if(err) {
		console.log(err);
	}

	console.log(stringOut);
}