import React from 'react';
import {StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ms} from './utils';

export const BottomSheet = ({sheetRef, height = 300, render}) => {
  return (
    <RBSheet
      ref={sheetRef}
      height={height}
      openDuration={300}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        container: styles.container,
        draggableIcon: {
          backgroundColor: '#D4D8DC',
          width: 48,
        },
      }}>
      {render()}
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: ms(16),
    borderTopLeftRadius: ms(16),
    paddingHorizontal: ms(24),
    paddingTop: ms(4),
  },
});
