#!/bin/sh
source .env
stitch-cli login --api-key=$STITCH_API_PUBLIC_KEY --private-api-key=$STITCH_API_PRIVATE_KEY

echo "Copy our content into the Stitch Hosting area..."
rm -R ./stitch/hosting/files/*
cp empty-index.html ./stitch/hosting/files/index.html

stitch-cli import \
  --app-id=$STITCH_APP_ID \
  --include-hosting \
  --path=./stitch
 
