The issue lies in accessing AsyncStorage too early in the app's lifecycle, typically before Expo's initialization is complete. To solve this, ensure AsyncStorage operations only happen *after* Expo's initialization is finished.

Here's how you can modify the code to fix the problem: 

```javascript
import * as React from 'react';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.getItem('test'); //This line checks if AsyncStorage is ready.
        setIsReady(true);
      } catch (error) {
        console.error('AsyncStorage initialization error:', error);
      }
    })();
  }, []);

  const storeData = async () => {
    if (!isReady) return;
    try {
      const jsonValue = JSON.stringify({ key: 'value' });
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      console.error('AsyncStorage Error', e);
    }
  };

  if (!isReady) {
    return <Text>Initializing...</Text>;
  }

  return (
    <View>
      <Button title="Store Data" onPress={storeData} />
    </View>
  );
};


export default App;
```
This improved code uses a state variable `isReady` and `useEffect` hook. It attempts to access AsyncStorage to check initialization and sets `isReady` to true only after successful access or handles errors appropriately.  All AsyncStorage operations are then guarded by this `isReady` state, preventing premature attempts before initialization.