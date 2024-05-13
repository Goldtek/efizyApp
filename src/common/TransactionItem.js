import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Colors, Image } from "react-native-ui-lib";
import { ms } from "./utils";
import { RegularText, BoldText } from "./Text";
import { Button } from "./Button";

export const TransactionItem = ({status = 'completed'}) => {

    const color = (status) => {
        if (status === 'pending') {
            return Colors.yellow10;
          } else if (status === 'completed') {
            return Colors.green;
          } else if (status === 'rejected' || status === 'failed') {
            return Colors.red10;
          }
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View row spread paddingT-15 paddingH-20>
                <RegularText text={status} color={color(status)}/>
                <RegularText text={'January 18, 2024'} color={Colors.grey20} />
            </View>
            <View style={styles.hr} marginT-20 marginB-20/>
            <View row spread paddingH-20>
                <RegularText text={'Airtime'} />
                <RegularText text={'#300,000'} color={color(status)}/>
            </View>
            <View row spread paddingH-15 marginT-10>
                <View row marginT-10>
                    <Image
                        assetName={'euro'}
                        assetGroup="wallet"
                        style={styles.icon}
                    />
                    <RegularText text={'Chisom Dike'} size={14} marginL-5 marginT-2 />
                </View>
                <View  marginT-10>
                    <TouchableOpacity onPress={() => console.log('')}>
                        <BoldText text={'View Receipt'} size={14} color={Colors.blue700} />
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableOpacity>
    )
}

    

const styles = StyleSheet.create({
   container: {
    width: '100%',
    height: ms(140),
    backgroundColor: Colors.white,
    borderRadius: ms(14),
   },
   hr: {
    height: ms(1),
     backgroundColor: Colors.grey50, 
     width: '95%',
     alignSelf: 'center'
   },
   icon: {
    height: ms(20),
    width: ms(20),
  },
  });
