import React from 'react';
import { View, Text } from 'react-native';

export default props => {

    console.log('working');
    // return (<View><Text>Inputs</Text></View>);
    return(
        <View style={styles.container}>
        <View style={styles.backgroundImageWrapper}>
          <Image source={require('../../Assets/images/bg1.png')} style={styles.backgroundImage} />

          <View style={styles.topbar}>

            <View style={styles.loginContainer}>
              <BackButton onPress={() => Actions.pop()} />
            </View>
            <Image source={require('../../Assets/images/logo.png')} style={styles.logo}></Image>
          </View>

          <View styles={styles.textView}>
            <Text style={styles.text}>What will your effect be today?</Text>
          </View>
        </View>
        <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
          <ErrorNotification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error"
            firstLine={error}
            secondLine="Please try again."
          />
        </View>
        {/* <ScrollView style={{ backgroundColor: '#EDF1F5',height:400 }}> */}
        <KeyboardAwareScrollView style={styles.bgForm}>
          <View style={styles.scrollContainer}>
            <View style={styles.form}>

              {/* <TextField returnKeyType='next' onSubmitEditing={() => { this.secondTextInput.focus(); }} blurOnSubmit={false} label={<Text style={styles.labelText}>Email or Phone</Text>} value={emailorPhone} onChangeText={(emailorPhone) => this.setState({ emailorPhone })} lineWidth={1.5} activeLineWidth={2} textColor={colors.darkBlue} tintColor={colors.darkerBlue} baseColor={colors.yellow} animationDuration={200} inputContainerStyle={styles.inputContainer} /> */}
              {this.state.isEmail ?
                <View style={{ marginTop: 10 }}>

                  <TextField returnKeyType='next'
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                    label={<Text style={styles.labelText}>Email or Phone</Text>}
                    value={emailorPhone}
                    onChangeText={(emailorPhone) => this.handleUsernameChange(emailorPhone)}
                    lineWidth={1.5}
                    activeLineWidth={2}
                    textColor={colors.darkBlue}
                    tintColor={colors.darkerBlue}
                    baseColor={colors.yellow}
                    animationDuration={200}
                    inputContainerStyle={styles.inputContainer} />



                </View> : <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <PhoneInput
                      initialCountry='ca'
                      ref={ref => {
                        this.phone = ref;
                      }}
                    />
                  </View>
                  <View style={{ flex: 3 }}>
                    <TextField returnKeyType='next'
                      onSubmitEditing={() => { this.secondTextInput.focus(); }}
                      blurOnSubmit={false}
                      label={<Text style={styles.labelText}>Email or Phone</Text>}
                      value={emailorPhone}
                      onChangeText={(emailorPhone) => this.handleUsernameChange(emailorPhone)}
                      lineWidth={1.5}
                      activeLineWidth={2}
                      textColor={colors.darkBlue}
                      tintColor={colors.darkerBlue}
                      baseColor={colors.yellow}
                      animationDuration={200}
                      inputContainerStyle={styles.inputContainer} />
                  </View>


                </View>}

              <TextField ref={(input) => { this.secondTextInput = input; }} label={<Text style={styles.labelText}>Password</Text>} value={password} onChangeText={(password) => this.setState({ password })} lineWidth={1.5} activeLineWidth={2} textColor={colors.darkBlue} tintColor={colors.darkerBlue} baseColor={colors.yellow} animationDuration={200} inputContainerStyle={styles.inputContainer} renderAccessory={this.renderPasswordAccessory} returnKeyType='done' secureTextEntry={secureTextEntry} autoCapitalize='none' autoCorrect={false} enablesReturnKeyAutomatically={true} clearTextOnFocus={true} />


              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                <CustomCheckbox
                  color={colors.skyBlue}
                  text='Remember me'
                  customCheckBoxChecked={this.customCheckBoxChecked}
                  addDay={this.addDay}
                  removeDay={this.removeDay}
                  selected={rememberme}
                />
              </View>

              <View style={{ width: '100%', marginBottom: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <RoundButton onPress={() => this.handleButton()}
                  text='Log In'
                  textColor={colors.white}
                  bgColor={colors.skyBlue}
                />
              </View>
              <View style={{ width: '100%', marginBottom: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity style={{}} onPress={() => Actions.signup()}>
                 {smallPhone ? <View style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:10}}>
                    <Text style={{ color: colors.darkBlue, fontSize: 14, fontWeight: '500', textAlign: 'center' }}>Don't have an account?</Text>
                    <Text style={{ color: colors.darkBlue, fontSize: 14, fontWeight: '500', textAlign: 'center' }}>Create one.</Text>
                  </View> : <Text style={{ color: colors.darkBlue, fontSize: 14, fontWeight: '500', textAlign: 'center' }}>Don't have an account? Create one.</Text>
}
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </KeyboardAwareScrollView>

        <Loading visible={this.state.loading} />
      </View>
    );
    
}