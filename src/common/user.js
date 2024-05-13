import React from "react";
import { View, Image, Colors, Avatar } from "react-native-ui-lib";
import { TouchableOpacity, StyleSheet } from "react-native";
import { BoldText, RegularText } from "./Text";
import { ms } from "./utils";

export const User = ({name, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View row>
                <Image
                    assetName={'user'}
                    assetGroup="dashboard"
                    style={styles.icon}
                />
                {/* <Avatar source={{uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg'}} label={'IT'}/> */}
                <View marginL-5>
                    <BoldText text={'Clarissa Bates'} color={Colors.grey10} size={12}/>
                    <RegularText text={'Bank - 0079340459'} color={Colors.grey40} size={12} marginT-8/>
                </View>
            </View>
      </TouchableOpacity>
    );
}


export const UserImage = ({name, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View marginR-15 centerV centerH>
                <Image
                    assetName={'user'}
                    assetGroup="dashboard"
                    style={styles.icon}
                />
                 <RegularText text={'Clarissa Bates'} color={Colors.grey10} size={12} marginT-3/>
                 <RegularText text={'Bank - 0079340459'} color={Colors.grey40} size={10} marginT-8/>
            </View>
      </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    icon: {
     height: ms(40),
     width: ms(40),
     backgroundColor: Colors.grey60,
     borderRadius: ms(20)
   },
   });
 