import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {ms} from '../../../../common';

const styles = StyleSheet.create({
    profilePix: {
        height: ms(70),
        width: ms(70),
        borderRadius: 70,
        alignItems: 'center',
      },

      otpView: {
        width: ms(325),
        fontFamily: 'BRFirma-SemiBold',
        height: ms(50),
        
      },
      cellView: {
        width: ms(40),
        height: ms(40),
        marginTop: ms(40),
        backgroundColor: Colors.Snow300,
        borderRadius: 10,
        borderWidth: 0,
        fontSize: 18,
        color: Colors.Grey300,
        fontFamily: 'BRFirma-SemiBold',
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.DarkBlue,
        textTransform: 'none'
      },
      errorCellView: {
        width: ms(40),
        height: ms(40),
        backgroundColor: Colors.PaleRed,
        borderBottomWidth: 0,
        borderRadius: 10,
        borderWidth: 0,
        fontSize: 18,
        color: Colors.PaRed,
        fontFamily: 'BRFirma-SemiBold',
        alignSelf: 'center',
        textTransform: 'none'
      },
      otpErrorText: {
        marginTop: ms(10),
        color: Colors.PaRed,
        alignSelf: 'center',
      },
      underlineHighlighted: {
        borderColor: Colors.DarkBlue,
        textTransform: 'none'
      },
  
});

export default styles;
