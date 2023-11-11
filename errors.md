## Run fastlane ...

The "Run fastlane" step failed with an unknown error. Refer to "Xcode Logs" below for additional, more detailed logs.
npx exited with non-zero code: 1

## Install or update fastlane

1. `sudo gem install fastlane -NV`
2. `sudo gem update fastlane -NV`
3. `fastlane init`

## Clearing Cache:

1. `fastlane cache reset`
2. `npm start -- --reset-cache`

## No development builds found

CommandError: No development build (com.<user>.<project-name>) for this project is installed. Please make and install a development build on the device first.

refers to [expo doc](https://docs.expo.dev/develop/development-builds/create-a-build/?redirected)
