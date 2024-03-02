import React from 'react';
import {TouchableOpacity, FlatList, StatusBar} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import accounting from 'accounting'
import {
  BackHeader,BoldText, User, ms
} from '../../common';
import { Search } from '../../common/Search';
import styles from './styles';

const Contact = ({navigation, route}) => {

  return (
    <View flex paddingT-60 paddingH-24 backgroundColor="#fff">
        <StatusBar barStyle={'dark-content'} />
      <View>
        <View marginT-20 marginB-40>
          <BackHeader title={'Contact'} />
        </View>
        <Search placeholder={'Search Contact'} style={{backgroundColor: 'rgb(245, 245, 245)'}}/>
        <View marginB-20>
            <BoldText text={'Recent Transfer'} color={Colors.grey40} size={13}/>
        </View>

        <View style={{height: 300}}>
          <FlatList
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => (
             <User />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View height={ms(15)} />}
          />
        </View>

         <View marginB-20 marginT-50>
            <BoldText text={'All Contacts'} color={Colors.grey40} size={13}/>
        </View>
        <View style={{height: 230}}>
          <FlatList
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => (
              <User />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View height={ms(15)} />}
          />
        </View>
    
      </View>
    </View>
  );
};

export default Contact;
