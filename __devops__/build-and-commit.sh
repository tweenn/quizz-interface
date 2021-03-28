#!/bin/sh

npm run build;

sleep 2s;

mv ../dist/index.html ../dist/404.html;

npm run deploy:ghpages;
