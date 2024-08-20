import React from 'react';
import { Text, View } from 'react-native';

type ProfileInfoProps = {
  label: string;
  text: string;
  ensino?: string;
  formacao?: string;
  retornavel?: boolean;
};

function ProfileInfo({
  label,
  text,
  ensino,
  formacao,
  retornavel,
}: ProfileInfoProps) {
  return (
    <View className='mb-3 flex'>
      <Text className='text-sm font-semibold'>{label}</Text>
      <Text className='mb-1 text-[14px] font-semibold text-[#636C74]'>
        {text}
      </Text>
      {retornavel ? (
        <View className=''>
          <Text className='text-[14px] font-semibold text-[#636C74]'>
            {ensino}
          </Text>
          <Text className='mt-1 text-[14px] font-semibold text-[#636C74]'>
            {formacao}
          </Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

export default ProfileInfo;
