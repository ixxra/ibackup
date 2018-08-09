# iBackup
## your iphone images/videos

## About
This is a node server to send images/videos from client. If called from an ios device, optionally sending pictures or videos.

**Note** that I wrote this project to learn *express/mongoose* and because apple doesn't support linux. There should be easier ways to download your data.

## Requirements
1. mongodb running with default settings on localhost
2. node.js
3. npm

Note that bower is not necessary, as I copied the needed components into *public/opt*

## Configuration
*app.js* refers to a mongodb located in localhost
*bin/www* points to a web address in my local network. It should be server address.

## Usage
If configured appropiately, 

    npm start

should do. Then, open your browser in *your.address:9001/* and send your images/videos.
