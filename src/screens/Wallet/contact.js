import React, {useRef, useState, useEffect} from 'react';
import {TouchableOpacity, FlatList, StatusBar} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import accounting from 'accounting';
import ReactNativePinView from "react-native-pin-view";
import {
  BackHeader,
  BoldText, 
  User, 
  ms, 
  BottomSheet, 
  RegularText, 
  Button, 
  UserImage
} from '../../common';
import { Search } from '../../common/Search';
import { BackArrow } from '../../../assets/icons';
import styles from './styles';

const Contact = ({navigation, route}) => {
  const currency = route.params?.currency || '#';
  const openRef = useRef();
  const pinView = useRef(null);
  const [amount, setamount] = useState("");
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  const [close, setClose] = useState(false)


  useEffect(() => {
    if (amount.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
    if (amount.length === 8) {
      setShowCompletedButton(true)
    } else {
      setShowCompletedButton(false)
    }
  }, [amount])


  const verify = () => {
    alert(amount)
    setClose(true);
  }



  return (
    <View flex paddingT-60 paddingH-24 backgroundColor="#fff">
        <StatusBar barStyle={'dark-content'} />
      <View>
        <View marginT-20 marginB-40>
          <BackHeader title={'Contact'} />
        </View>
        <Search placeholder={'Search Contact'} style={{backgroundColor: 'rgb(245, 245, 245)'}}/>
        <View marginB-20>
            <BoldText text={'Recent Transfer'} color={Colors.blue700} size={13}/>
        </View>

        <View style={{height: 100}}>
          <FlatList
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => (
                <UserImage onPress={() => openRef.current?.open()} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View width={ms(15)} />}
          />
        </View>

         <View marginB-20 marginT-10>
            <BoldText text={'All Contacts'} color={Colors.blue700} size={13}/>
        </View>
        <View style={{height: 480}}>
          <FlatList
            data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
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
        closeMask={true}
        onClose={close}
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
            <View marginT-20 centerH>
              <BoldText text={`${currency}${amount}`} size={30} />
            </View>
            <ReactNativePinView
                inputSize={84}
                ref={pinView}
                pinLength={15}
                buttonSize={80}
                activeOpacity={0.6}
                onValueChange={value => setamount(value)}
                buttonAreaStyle={{
                backgroundColor: '#fff',
                marginBottom: ms(60),
                marginTop: ms(-70)
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
            
                }}

                customRightButton={ <BackArrow /> }
                customLeftButton={ <Button
                  title="Verify"
                  style={styles.confirm}
                  onPress={() => verify()}
                />}
            />
        </View>
        )}
      />
    </View>
  );
};

export default Contact;
