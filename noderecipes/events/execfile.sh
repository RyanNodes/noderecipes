!#/bin/sh
echo "running this shell script from child_process.execfile"

# run node process
node spawn.js

node exec.js

ps ax | grep node