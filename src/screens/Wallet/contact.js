import React, {useRef, useState} from 'react';
import {TouchableOpacity, FlatList, StatusBar} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import accounting from 'accounting';
import ReactNativePinView from "react-native-pin-view";
import {
  BackHeader,BoldText, User, ms, BottomSheet, RegularText
} from '../../common';
import { Search } from '../../common/Search';
import { BackArrow } from '../../../assets/icons';
import styles from './styles';

const Contact = ({navigation, route}) => {
  const openRef = useRef();
  const pinView = useRef(null);
  const [pin, updatePin] = useState(true);

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
             <User onPress={() => openRef.current?.open()} />
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
              <User onPress={() => openRef.current?.open()}/>
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View height={ms(15)} />}
          />
        </View>
    
      </View>

      <BottomSheet
        sheetRef={openRef}
        height={ms(550)}
        render={() => (
          <View marginT-10 bottom>
            <View centerH centerV marginB-10>
              <BoldText text={'Send Money'} size={18} color={Colors.grey30} />
            </View>
            <View row centerV  style={styles.userContainer} padding-10>
              <View style={styles.payUser} centerH centerV>
                <Image
                    assetName={'user'}
                    assetGroup="dashboard"
                    style={styles.icon2}
                />
                </View>
                <View marginL-10>
                    <BoldText text={'Clarissa Bates'} color={Colors.black} size={14}/>
                    <RegularText text={'Bank - 0079340459'} color={Colors.grey40} size={14} marginT-8/>
                </View>
            </View>
            <View marginT-30 centerH>
              <BoldText text={'$ 2000.00'} size={30} />
            </View>
            <ReactNativePinView
                inputSize={84}
                ref={pinView}
                //pinLength={10}
                buttonSize={80}
                onValueChange={value => updatePin(value)}
                buttonAreaStyle={{
                backgroundColor: '#fff',
               // paddingVertical: 40,
                }}
                inputAreaStyle={{
                marginBottom: 10,
               
                }}
                inputViewEmptyStyle={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "#FFF",
                }}
                inputViewFilledStyle={{
                backgroundColor: "#fff",
                }}
              
                buttonTextStyle={{
                color: "#000",
                }}
                onButtonPress={key => {

                if(key === "custom_right") {
                    pinView.current.clear()
                }

        
                if (key === "three") {
                 //   alert("You just click to 3")
                }
                }}
                customRightButton={ <BackArrow /> }
            />
        </View>
        )}
      />
    </View>
  );
};

export default Contact;
