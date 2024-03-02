import React from "react";
import { View, Image, Colors, Avatar } from "react-native-ui-lib";
import { TouchableOpacity, StyleSheet } from "react-native";
import { BoldText, RegularText } from "./Text";
import { ms } from "./utils";

export const User = ({name, }) => {
    return (
        <TouchableOpacity>
            <View row>
                <Image
                    assetName={'user'}
                    assetGroup="dashboard"
                    style={styles.icon}
                />
                {/* <Avatar source={{uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg'}} label={'IT'}/> */}
                <View marginL-5>
                    <BoldText text={'Clarissa Bates'} color={Colors.black} size={14}/>
                    <RegularText text={'Bank - 0079340459'} color={Colors.grey40} size={14} marginT-8/>
                </View>
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
 