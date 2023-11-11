# Expo project template implementing google admob ads

### Create a new project

```bash
npx create-expo-app <project-name>
cd <project-name>
```

### Install dependencies

```bash
expo install expo-dev-client

npm install -g yarn

# install eas-cli globally (An Expo command line tool)
npm install -g eas-cli
```

### You might need to install fastlane

A tool used for automating the build and release process.
Link to [fastlane](https://fastlane.tools/)

```bash
brew install fastlane

echo 'export PATH="/opt/homebrew/opt/libpq/bin:$PATH"' >> ~/.zshrc

export LDFLAGS="-L/opt/homebrew/opt/libpq/lib"

export CPPFLAGS="-I/opt/homebrew/opt/libpq/include"
```

### You might need to install CocoaPods (a dependency manager for mobiles apps on iOS)

link to [CocoaPods](https://cocoapods.org/)

```bash
sudo gem install cocoapods
```

follow the [ruby.md](./ruby.md) instructions if you don't have it installed

### Login and explore eas-cli

```bash
eas login
eas whoami
eas logout
```

### Configure eas.json

```bash
eas build:configure
```

### Build for local development on ios/android

--profile flag value comes from eas.json
in eas.json:
"distribution" : "internal" or "store"
-- internal: shareable URLs for our builds
-- store: testflight

```bash
eas build -p ios --profile development --local
es build -p android --profile development --local
```

### Run the project on ios/android

```bash
npm run ios #run on ios
npm run android #run on android
```
