## 引入jquery
```
npm init -y
npm install jquery
```
## 开启服务器
```
yarn global add parcel-bundler
parcel src/index.html

```
## 修改上传
```
rm -rf dist 
parcel build src/index.html --no-minify --public-url ./
```
