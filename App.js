import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from "expo-secure-store";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import LoginScreen from './App/Screens/LoginScreen/LoginScreen';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey='pk_test_Z2xhZC1yYWNlci00MC5jbGVyay5hY2NvdW50cy5kZXYk'>
      <View style={styles.container}>
        {/* Sign in Component */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        {/* Sign out */}
        <SignedOut>
          <LoginScreen />
        </SignedOut>
        <StatusBar style='auto' />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});
