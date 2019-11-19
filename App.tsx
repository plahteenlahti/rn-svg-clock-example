import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import Clock from './components/Clock';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView
          centerContent={true}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Clock />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {flex: 1, backgroundColor: 'black'},
});

export default App;
