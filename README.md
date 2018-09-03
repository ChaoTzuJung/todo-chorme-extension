# Todo-chorme-extension

## 套件

- react-beautiful-dnd([react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd))
- material-ui([Material Design](https://material-ui.com/))
- react v.16.4.2

## 功能

- 新增todo項目 (輸入文字，按下Enter鍵)
- 刪除todo項目 (按下 垃圾桶 icon)
- 拖拉todo改變順序 (拖拉 Drag Handle icon)

![](https://media.giphy.com/media/euMbbqUMbRwGOb7JOB/giphy.gif)

## 開啟專案

```javascript=
npm install
npm start
```

## 修改樣式

**manifsest.json**

#### 可以修改icon或是做一些其他設定(例如: chorme開新分頁就是這個application)

```json=
{
  "manifest_version": 2,
  "name": "Todo Chrome Extension",
  "version": "1.0",
  "permissions": [
    "storage"
  ],
  "chrome_url_overrides": {
    "newtab": "index.html"
  },
  "icons": { 
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png" 
  },
  "description": "A todo app you can add, delete and drag item"
}
```

## 外觀
   **Todo Page**
  ![web_app_screen](https://github.com/ChaoTzuJung/todo-chorme-extension/blob/master/public/image/web_app_screen.png?raw=true)
  
## 教學 - 把react app 製作成 Chorme Extension

複製文件中 [manifest](https://developer.chrome.com/apps/manifest) 提供的程式碼貼到專案中的manifest.json( require的部分 )

當開啟新分頁，要執行app的index.html，而且這個app在chorme被允許有storage

```json=
{
  "manifest_version": 2,
  "name": "Todo Chrome Extension",
  "version": "1.0",
  "permissions": [
    "storage"
  ],
  "chrome_url_overrides": {
    "newtab": "index.html"
  },
  "icons": { 
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png" 
  },
  "description": "A todo app you can add, delete and drag item"
}
```
> npm run build 

![](https://i.imgur.com/J9IVfzd.png)
![](https://i.imgur.com/sE9l0o8.png)
  
