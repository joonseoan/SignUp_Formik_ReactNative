import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = props => {
    const { buttonStyle, textStyle } = styles;

    return(
        <TouchableOpacity
            // onPress={ whenPressed } 
            style={ buttonStyle }
        >
            <Text style={ textStyle }>{ "Signup" }</Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        marginTop: 30,
        // flex: 1,
        // alignItem: control "children" styling
        // position "itself" in flex box role
        alignSelf: 'center',
        justifyContent: 'center',
        backgrounColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        width: 200
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default Button;