#!/bin/sh

TAG="$1"
if [ -z "$TAG" ]; then
  TAG="local"
fi

docker build --no-cache -t wm-product-search-back:$TAG -f ./dockerfiles/Dockerfile .
docker run -d --rm -p 3001:3001 wm-product-search-back:$TAG