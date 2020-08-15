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
## 上传
在 package.json 文件里加上 
```
"scripts": {
    "build": "rm -rf dist && parcel build src/index.html --no-minify --public-url ./"
  }
```
当二次上传时可一键build
```
yarn build
```
