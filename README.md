# Text Display App 📱

A simple mobile application that helps display text in large font size. Perfect for those who need to communicate through text display.

```bash
npx expo prebuild --platform ios
```

## Features ✨

- Easy text input
- Large text display
- Quick text sharing
- Simple and intuitive interface
- Works on both iOS and Android

## Getting Started 🚀

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npx expo start
   ```

3. Run on your device:
   - Scan the QR code with the Expo Go app
   - Or run on emulator/simulator:
     - For Android: Press 'a'
     - For iOS: Press 'i' (requires macOS)

## How to Use 📖

1. Type your text in the input area
2. Press Enter or tap "Display" to show the text in large font
3. Use "Clear" to erase the text
4. Use "Share" to share the displayed text with other apps

## Building for Production 🏗️

### For Android:
```bash
eas build -p android --profile production
```

### For iOS:
```bash
eas build -p ios --profile production
```

Note: iOS build requires an Apple Developer account and should be performed on macOS.

## Development 💻

This project is built with:
- [Expo](https://expo.dev)
- React Native
- TypeScript

## License 📄

This project is private and proprietary.

---

For more information about developing with Expo, check out:
- [Expo documentation](https://docs.expo.dev/)
- [React Native documentation](https://reactnative.dev/)
