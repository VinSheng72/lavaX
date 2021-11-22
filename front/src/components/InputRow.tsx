


import React from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';

export interface Props {
    name: string,
    value: string,
    onChangeText: (text: string) => void
}


const InputRow: React.FC<Props> = ({ name, value, onChangeText }) => {
    return (<View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}   >
        <Text>{name}</Text>
        <TextInput placeholder={"Story Name"} value={value} onChangeText={onChangeText} />
    </View>)

}



export default InputRow;
