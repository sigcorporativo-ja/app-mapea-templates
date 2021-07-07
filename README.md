![Ionic CI](https://github.com/sigcorporativo-ja/app-mapea-templates/workflows/Ionic%20CI/badge.svg)

# app-mapea-templates
Make easy use Ionic with VanillaJS thanks to this template and native web components

#### :warning: Under construction :warning:

## Getting Started

**Prerequisites**
* Node & npm: https://nodejs.org/en/download/
* - Version npm: 6.14.13 
* Ionic CLI:
* - Version Ionic CLI: 6.16.3

  ```javascript
  npm i -g ionic
  ```
To build app packages, see the Ionic official doc:
* Android Setup: https://ionicframework.com/docs/developing/android
* iOS Setup: https://ionicframework.com/docs/developing/ios 

## Developing app
```javascript
  ionic serve
```

To test app on device, de best way is using [Capacitor](https://capacitorjs.com/).

Installs it on you device and execute (Existing Ionic Project):
```javascript
  ionic integrations enable capacitor
```


Initialize Capacitor with your app information:
```javascript
  npx cap init [appName] [appId]
```

Where appName is the name of your app, and appId is the domain identifier of your app (ex: com.example.app)
look and/or change in the file "capacitor.config.json"

For more information in [Capacitor with Ionic Framework](https://capacitorjs.com/docs/getting-started/with-ionic).


> :bulb:  Check firewall rules and sure that port is open (default 8100)  

## Building app
Check that the "package.json" file in the build shows "webpack"
```javascript
{
  "scripts": {
    "build": "webpack --mode=production",
    "build-capacitor": "webpack"
  }
}
```

```javascript
  npm run build-capacitor
```

Android relies on [Android Studio](https://ionicframework.com/docs/developing/android) (or, optionally, the Android CLI tools) to build the app:
```javascript
  npx cap add android
  npx cap open android
```

iOS relies on [Xcode](https://ionicframework.com/docs/developing/ios) to do the final app compile:
```javascript
  npx cap add ios
  npx cap open ios
```

## ¡ IMPORTANT !
Components than have a map, can't use shadowDOM because the Mapea import is global and will not have access to component DOM
 
