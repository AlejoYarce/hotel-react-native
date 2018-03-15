# Hotels Finder App

> React Native Project

## Prerequisites

### React Native CLI
- Setup React Native
  - ```npm install -g react-native-cli```
  - or ```yarn global add create-react-native-app```

### API
- Hotels Finder uses the [Hotels API](https://github.com/AlejoYarce/hotels-api)
- Run the API
- Get your local IP
- Change your local IP in **config.json** file
```
{
  "apiUrl": "http://YOUR_LOCAL_API:3000"
}
```

### Android
- Setup [Android](https://developer.android.com/studio/install.html)
- React Native requires Android 6.0
  - Use **Tools\Android\SDK Manager** and install Android 6.0 API Level 23
- Setup an Android device using de ADB Manager

### IOS (ONLY MAC)
- Install Xcode


## Project Structure
- **App.js**
  - Skeletal app created by the CLI tool.
- **index.js**
  - Entry point created by the CLI tool.
- **android**
  - Folder containing an Android project and the code required to bootstrap your application.
- **ios**
  - Folder containing an Xcode project and the code required to bootstrap your application.
- **components**
  - Folder containing React Components
  - Search
  - Results
  - Hotel

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# Run the Android App
$ react-native run-android

# Run the IOS App - Only Mac
$ react-native run-ios

# Android Logs
$ react-native log-android

# IOS Logs - Only Mac
$ react-native log-ios
```
