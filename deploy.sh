#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add --all
git commit -m "New Deploy"
git push -f https://github.com/hastakarya/doctor-finder.git master:gh-pages

cd -