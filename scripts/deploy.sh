#!/bin/bash

# Reset location
cd $(dirname $(dirname $0))

npm run build && npm run docs:build && scp -r dist/docs remote@datsite.eu:/home/remote/docs
