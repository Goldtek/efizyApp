import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {View, Colors} from 'react-native-ui-lib';

import {MediumText, Header} from '../../common';
import styles from './styles';
import {Search} from '../../common/Search';

const RenderCard = () => <View style={styles.card} marginH-8 />;

const Card = ({navigation}) => {
  const users = [
    {
      name: 'onwuegbuzie chisom dike',
      primary_skill: 'Software enginering',
      id: 1,
      rating: 4,
    },
    {
      name: 'Abaenowa franca chinansa',
      primary_skill: 'laboratory scientist',
      id: 2,
      rating: 0,
    },
    {
      name: 'Nwachukwu Evelyn',
      primary_skill: 'Civil Servant',
      id: 3,
      rating: 2,
    },
  ];

  return (
    <SafeAreaView flex backgroundColor={Colors.white}>
      <ScrollView flex>
        <Header
          title="Card"
          back
          leftClick={() => navigation.goBack()}
          titleStyle={styles.titleStyle}
        />
        <Search placeholder={'Search for the transaction'} />
        <View marginH-10 style={styles.cardContainer}>
          <FlatList
            data={users}
            renderItem={({item, index}) => <RenderCard item={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>

        <View marginT-20 spread>
          <TouchableOpacity />
        </View>
        <MediumText
          text={'Recent Transactions'}
          style={styles.title}
          marginT-10
          marginL-24
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Card;
