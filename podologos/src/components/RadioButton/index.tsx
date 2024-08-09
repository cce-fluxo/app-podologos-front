import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';

export default function CustomRadioButton({ label, onPress, selected }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}
    >
      <RadioButton value={label} selected={selected} onPress={onPress} id='' />
      <Text style={{ marginLeft: 8 }}>{label}</Text>
    </TouchableOpacity>
  );
}
