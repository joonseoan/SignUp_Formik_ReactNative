import React from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';

// import Card from './Card';
import CardSection from './CardSection';
// import InputControl from './InputControl'

export default ({ inputConent, setValues }) => {
    // console.log('props: ', props)
    return (  
        <View style={ styles }>
            <TextField 
                label={ inputConent.label }
                blurOnSubmit={ false }
                name={ inputConent.name }

                //value={emailorPhone}
                onChangeText={ (e) => (e) }
                lineWidth={ 1.0 }
                activeLineWidth={ 1.0 }
                textColor="#8A2BE2"
                tintColor="#8B008B"
                baseColor="#708090"
                animationDuration={ 20 }
            />
        </View>
    );
};

const styles = {
    width: 350,
    justifyContent: 'center',
    margin: 'auto',
    alignSelf: 'center',
};

// blurOnSubmit={false}
//                     label={<Text style={styles.labelText}>Email or Phone</Text>}
//                     value={emailorPhone}
//                     onChangeText={(emailorPhone) => this.handleUsernameChange(emailorPhone)}
//                     lineWidth={1.5}
//                     activeLineWidth={2}
//                     textColor={colors.darkBlue}
//                     tintColor={colors.darkerBlue}
//                     baseColor={colors.yellow}
//                     animationDuration={200}
//                     inputContainerStyle={styles.inputContainer}