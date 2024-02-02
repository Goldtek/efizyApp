import {GCBanner, SearchInput} from '../../../common';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native-ui-lib';
import {BuyStyles as styles} from '../styles';
import {searchGiftCard} from '../utils';

const CardCategory = ({navigation, route}) => {
  const {cards} = route.params;
  const [filteredCards, setFilteredCards] = useState(cards);
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    const matches = searchGiftCard(text, cards);
    setFilteredCards(matches);
  };

  return (
    <>
      <View>
        <SearchInput
          placeholder="Enter a brand, name..."
          value={searchText}
          onChange={handleSearch}
        />
      </View>

      <FlatList
        style={styles.flatlist}
        data={filteredCards}
        numColumns={2}
        renderItem={({item}) => (
          <GCBanner
            title={item.name}
            style={styles.banner}
            size={158}
            titleOnly
            image={item.picture_url || item.picture}
            onPress={() => navigation.navigate('card_details', {card: item})}
          />
        )}
      />
    </>
  );
};

export default CardCategory;
