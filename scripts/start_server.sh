#!/bin/bash
cd /home/ec2-user/cafe-app-devops
node app.js > app.out.log 2> app.err.log < /dev/null &




