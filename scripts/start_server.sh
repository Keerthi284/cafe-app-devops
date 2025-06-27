#!/bin/bash
cd /home/ec2-user/cafe-app-devops
npm install
node app.js > app.log 2>&1 &
