# Expo AsyncStorage Initialization Error

This repository demonstrates a rare error encountered when using AsyncStorage in Expo: the "AsyncStorage has not been initialized" error.  This error occurs when AsyncStorage is accessed before it's properly set up, unlike typical issues stemming from configuration problems.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides the correct way to handle AsyncStorage to avoid this error.  This is crucial for ensuring consistent app functionality and preventing unexpected crashes.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app in Expo Go or on a simulator. You'll observe the error when trying to perform an AsyncStorage operation before Expo's initialization is complete. 
4. Refer to `bugSolution.js` to see the fix.