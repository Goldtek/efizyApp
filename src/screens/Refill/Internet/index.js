import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import InternetView from './InternetView';
import DataView from './DataView';
import {styles} from '../styles';

const Internet = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('internet');

  const onContinue = payload => {
    navigation.navigate('airtime_details', {...payload});
  };

  return (
    <View flex paddingT-60 paddingH-24 backgroundColor="#fff">
      <View row marginB-4>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.headingBtn,
            selectedTab === 'internet' && styles.activeBtn,
          ]}
          onPress={() => setSelectedTab('internet')}>
          {/* setSelectedTab('internet') */}
          <Text
            style={[
              styles.headingBtnText,
              selectedTab === 'internet' && styles.btnActive,
            ]}>
            Internet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.headingBtn,
            selectedTab === 'data' && styles.activeBtn,
          ]}
          onPress={() => setSelectedTab('data')}>
          <Text
            style={[
              styles.headingBtnText,
              selectedTab === 'data' && styles.btnActive,
            ]}>
            Data Bundle
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollPadding}>
        {selectedTab === 'internet' ? (
          <InternetView />
        ) : (
          <DataView onContinue={onContinue} />
        )}
      </ScrollView>
    </View>
  );
};

export default Internet;
