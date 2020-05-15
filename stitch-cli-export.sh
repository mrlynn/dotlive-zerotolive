#!/bin/sh
source .env
stitch-cli login --api-key=$STITCH_API_KEY --private-api-key=$STITCH_PRIVATE_API_KEY

if [ -d "./stitch" ] 
then
    echo "Directory /path/to/dir exists." 
    rm -rf ./stitch
else
    echo "Error: Directory ./stitch does not exists - proceeding."
fi

# change the value of --app-id=zerotolive-njchv
stitch-cli export \
  --app-id=$STITCH_APP_ID \
  --include-hosting \
  --output=./stitch
 
