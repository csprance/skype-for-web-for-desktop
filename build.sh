#!/bin/bash
APPNAME=Skype-For-Web-For-Desktop
VERSION=1.1.1
electron-packager . $APPNAME --platform=win32 --arch=x64 --version=$VERSION --overwrite=true --asar=false --app_version=0.0.1 --appname=$APPNAME --out=releases --overwrite=true --icon=images/app.png
