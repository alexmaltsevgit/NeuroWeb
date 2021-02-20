#npm run build

cd dist

git checkout gh-pages
git add .
git commit -m "deploy"
git push