import React from 'react';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PaymentinfoScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={true}
      scrollable={true}
      hasBottomSafeArea={false}
    >
      {/* Top Header */}
      <View style={styles(theme).View43f5d9c4}>
        <View style={styles(theme).Viewe9defed4}>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Surface style={styles(theme).Surface52a4c315}>
              <Icon name={'Entypo/chevron-left'} size={24} />
            </Surface>
          </Touchable>
        </View>

        <Text style={styles(theme).Textdc3e6c95}>{'Payment'}</Text>
        <View style={styles(theme).Viewe9defed4} />
      </View>
      {/* Timeline */}
      <View style={styles(theme).View25b99e76}>
        <View style={styles(theme).View918a3cb8}>
          <View style={styles(theme).Viewbfc7ea03} />
          <View style={styles(theme).Viewdfe55b4f} />
          <View style={styles(theme).Viewd7121c0b} />
          <View style={styles(theme).Viewdfe55b4f} />
          <View style={styles(theme).Viewbfc7ea03} />
        </View>

        <View style={styles(theme).View6dc90506}>
          <Text style={styles(theme).Text5cae45a9}>{'personal info'}</Text>

          <Text style={styles(theme).Text5cae45a9}>{'payment'}</Text>

          <Text style={styles(theme).Text5cae45a9}>{'flight ticket'}</Text>
        </View>
      </View>
      {/* Form */}
      <View style={styles(theme).View44cd555e}>
        <View style={styles(theme).View9fa86917}>
          <Text style={styles(theme).Textef981779}>{'cardholder name'}</Text>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue2(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput392147e8}
            value={textInputValue2}
            placeholder={'Name'}
            placeholderTextColor={theme.colors.textPlaceholder}
          />
        </View>

        <View style={styles(theme).Viewc22dd40d}>
          <Text style={styles(theme).Textef981779}>{'card number'}</Text>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue2(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput392147e8}
            value={textInputValue2}
            placeholder={'Card Number'}
            placeholderTextColor={theme.colors.textPlaceholder}
            keyboardType={'numeric'}
          />
        </View>

        <View style={styles(theme).View27e9c07c}>
          <View style={styles(theme).View591d32f4}>
            <Text style={styles(theme).Textef981779}>{'expires'}</Text>

            <View style={styles(theme).View057dce78}>
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                    setDatePickerValue(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).DatePicker3e92c935}
                label={''}
                date={datePickerValue}
                mode={'date'}
                leftIconMode={'inset'}
                format={'mm / dd'}
                type={'underline'}
              />
            </View>
          </View>

          <View style={styles(theme).View591d32f4}>
            <Text style={styles(theme).Textef981779}>{'CVV'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput392147e8}
              value={textInputValue2}
              placeholder={'XXX'}
              placeholderTextColor={theme.colors.textPlaceholder}
              keyboardType={'numeric'}
            />
          </View>
        </View>
      </View>
      {/* Button Solid */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('CheckoutCompletedScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={styles(theme).Buttona63d871b}
        title={'Confirm Booking'}
      />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttona63d871b: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 21,
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'System',
      fontWeight: '700',
      height: 40,
      marginTop: 16,
      textAlign: 'center',
      width: '60%',
    },
    DatePicker3e92c935: { height: 32, marginTop: -8, width: 80 },
    Surface52a4c315: {
      alignItems: 'center',
      borderRadius: 24,
      height: 48,
      justifyContent: 'center',
      minHeight: 48,
      width: 48,
    },
    Text5cae45a9: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 10,
      textTransform: 'uppercase',
    },
    TextInput392147e8: {
      backgroundColor: theme.colors.divider,
      borderColor: theme.colors.divider,
      borderRadius: 15,
      height: 45,
      marginTop: 10,
      paddingBottom: 8,
      paddingLeft: 20,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textdc3e6c95: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Textef981779: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      textTransform: 'capitalize',
    },
    View057dce78: {
      backgroundColor: theme.colors.divider,
      borderRadius: 12,
      height: 45,
      marginTop: 10,
      paddingLeft: 16,
      paddingTop: 14,
    },
    View25b99e76: {
      marginBottom: 16,
      marginTop: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    View27e9c07c: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      width: '100%',
    },
    View43f5d9c4: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      marginTop: 20,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    View44cd555e: {
      marginLeft: 16,
      marginRight: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    View591d32f4: { flex: 1, marginTop: 16, paddingLeft: 16, paddingRight: 16 },
    View6dc90506: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
    },
    View918a3cb8: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 16,
      marginRight: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View9fa86917: { paddingLeft: 16, paddingRight: 16 },
    Viewbfc7ea03: {
      borderBottomWidth: 2,
      borderColor: theme.colors.tripItBlue,
      borderLeftWidth: 2,
      borderRadius: 6,
      borderRightWidth: 2,
      borderTopWidth: 2,
      height: 12,
      width: 12,
    },
    Viewc22dd40d: { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
    Viewd7121c0b: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 6,
      height: 12,
      width: 12,
    },
    Viewdfe55b4f: {
      backgroundColor: theme.colors.tripItBlue,
      flex: 1,
      height: 2,
    },
    Viewe9defed4: { height: 48, justifyContent: 'center', width: 48 },
    screen: { alignItems: 'center', paddingTop: 16 },
  });

export default withTheme(PaymentinfoScreen);
