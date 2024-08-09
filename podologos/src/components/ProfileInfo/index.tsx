import React from 'react';
import { Text, View } from 'react-native';

type ProfileInfoProps = {
  label: string;
  text: string;
};

function ProfileInfo({ label, text }: ProfileInfoProps) {
  return (
    <View className='mb-3 flex'>
      <Text className='text-sm font-semibold'>{label}</Text>
      <Text className='text-[16px] font-bold text-cinza'>{text}</Text>
    </View>
  );
}

export default ProfileInfo;
