import React, {useState} from 'react';
import {Input, TextArea, Button} from '../../../common';
import {View} from 'react-native-ui-lib';

const BuyForAFriend = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  // const [hasError, setHasError] = useState(true);

  return (
    <>
      <View>
        <Input
          label="Email address"
          placeholder="John@example.com"
          value={email}
          onChange={setEmail}
        />
        <Input
          label="Phone number"
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
        />
        <TextArea
          label="Message"
          placeholder="Type anything"
          value={message}
          onChange={setMessage}
        />
      </View>
      <Button disabled={false} title="Continue" onPress={() => {}} />
    </>
  );
};

export default BuyForAFriend;
