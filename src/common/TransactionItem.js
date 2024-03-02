import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Colors, Image } from "react-native-ui-lib";
import { ms } from "./utils";
import { RegularText, BoldText } from "./Text";

export const TransactionItem = ({}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <View row spread paddingT-15 paddingH-20>
                <RegularText text={'Pending'} color={Colors.yellow10}/>
                <RegularText text={'January 18, 2024'} color={Colors.grey20} />
            </View>
            <View style={styles.hr} marginT-20 marginB-20/>
            <View row spread paddingH-20>
                <RegularText text={'Airtime'} />
                <RegularText text={'#300,000'} />
            </View>
            <View row spread paddingH-20 marginT-10>
                <View row>
                <Image
                    assetName={'euro'}
                    assetGroup="wallet"
                    style={styles.icon}
                />
                <BoldText text={'Chisom Dike'} size={14} marginL-5 marginT-2 />
                <RegularText text={''} />
                </View>
            </View>

        </TouchableOpacity>
    )
}

    

const styles = StyleSheet.create({
   container: {
    width: '100%',
    height: ms(130),
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
