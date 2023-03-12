import React from 'react';
import Images from '../config/Images';
import {
  Button,
  CircleImage,
  DatePicker,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const FiltersScreen = props => {
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
      {/* Top Navigation Header */}
      <View style={styles(theme).Viewe903f622}>
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
        {/* Right Section */}
        <View style={styles(theme).View967fd4f5}>
          <Touchable>
            <View style={styles(theme).View53f79c36}>
              <Icon
                style={styles(theme).Icon6cafd915}
                name={'Ionicons/ios-notifications'}
                size={30}
                color={theme.colors.textPlaceholder}
              />
              <View style={styles(theme).View92787b34} />
            </View>
          </Touchable>

          <Touchable style={styles(theme).Touchable29534911}>
            <Surface style={styles(theme).Surfacef30bfc43} elevation={3}>
              <CircleImage source={Images.Avatar} size={40} />
            </Surface>
          </Touchable>
        </View>
      </View>
      {/* Top Header */}
      <View style={styles(theme).View43f5d9c4}>
        <Text style={styles(theme).Textdc3e6c95}>{'Filters'}</Text>
        <View style={styles(theme).Viewe9defed4} />
      </View>
      {/* Top Tabs */}
      <View style={styles(theme).View98498b12}>
        {/* Tab1 */}
        <View style={styles(theme).Viewd8249661}>
          {/* Active */}
          <>
            {!(selectedTab === 'tab1') ? null : (
              <Touchable style={styles(theme).Touchableba8738b6}>
                <View style={styles(theme).View6b56ee91}>
                  <Text style={styles(theme).Texta5a64f59}>{'one way'}</Text>
                </View>
              </Touchable>
            )}
          </>
          {/* Inactive */}
          <>
            {selectedTab === 'tab1' ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('tab1');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Touchableba8738b6}
              >
                <View style={styles(theme).Viewf7d57e05}>
                  <Text style={styles(theme).Texte515109a}>{'one way'}</Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* Tab2 */}
        <View style={styles(theme).Viewd8249661}>
          {/* Active */}
          <>
            {!(selectedTab === 'tab2') ? null : (
              <Touchable style={styles(theme).Touchableba8738b6}>
                <View style={styles(theme).View90d66b2f}>
                  <Text style={styles(theme).Texta5a64f59}>{'Round-trip'}</Text>
                </View>
              </Touchable>
            )}
          </>
          {/* Inactive */}
          <>
            {selectedTab === 'tab2' ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('tab2');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Touchableba8738b6}
              >
                <View style={styles(theme).Viewb8ef214e}>
                  <Text style={styles(theme).Texte515109a}>{'Round-trip'}</Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
      </View>
      {/* Form */}
      <View style={styles(theme).View44cd555e}>
        <View style={styles(theme).View9fa86917}>
          <Text style={styles(theme).Texte576ac7e}>{'From'}</Text>

          <View style={styles(theme).Viewcbf533b7}>
            <Icon
              name={'Feather/map-pin'}
              color={theme.colors.textPlaceholder}
              size={16}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8a0338d3}
              value={textInputValue2}
              placeholder={'Source'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
        </View>

        <View style={styles(theme).Viewc22dd40d}>
          <Text style={styles(theme).Texte576ac7e}>{'To'}</Text>

          <View style={styles(theme).Viewcbf533b7}>
            <Icon
              name={'Feather/map-pin'}
              color={theme.colors.textPlaceholder}
              size={16}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8a0338d3}
              value={textInputValue2}
              placeholder={'Destination'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
        </View>

        <View style={styles(theme).View754d13e9}>
          <View style={styles(theme).Viewdcbb4c7c}>
            <DatePicker
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).DatePicker40378eab}
              label={'Departure'}
              date={datePickerValue}
              mode={'date'}
              leftIconMode={'inset'}
              type={'solid'}
              format={'ddd, d mmm'}
            />
          </View>
          <>
            {!(selectedTab === 'tab2') ? null : (
              <View style={styles(theme).Viewdcbb4c7c}>
                <DatePicker
                  onDateChange={newDatePickerValue => {
                    try {
                      setDatePickerValue(newDatePickerValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).DatePicker40378eab}
                  label={'Return'}
                  date={datePickerValue}
                  mode={'date'}
                  leftIconMode={'inset'}
                  type={'solid'}
                  format={'ddd, d mmm'}
                />
              </View>
            )}
          </>
        </View>

        <View style={styles(theme).Viewc22dd40d}>
          <Text style={styles(theme).Texte576ac7e}>{'Guest Details'}</Text>

          <View style={styles(theme).Viewcbf533b7}>
            <Icon
              color={theme.colors.textPlaceholder}
              size={16}
              name={'Feather/user'}
            />
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8a0338d3}
              value={textInputValue2}
              placeholder={'Guest Details'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </View>
        </View>
      </View>
      {/* Button Solid */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('SelectFlightScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={styles(theme).Buttona63d871b}
        title={'Search'}
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
    DatePicker40378eab: {
      backgroundColor: theme.colors.viewBG,
      borderRadius: 12,
      color: theme.colors.viewBG,
      marginLeft: 0,
      marginRight: 0,
      width: '100%',
    },
    Icon6cafd915: { marginTop: 14 },
    Surface52a4c315: {
      alignItems: 'center',
      borderRadius: 24,
      height: 48,
      justifyContent: 'center',
      minHeight: 48,
      width: 48,
    },
    Surfacef30bfc43: {
      borderRadius: 20,
      justifyContent: 'center',
      minHeight: 40,
      overflow: 'hidden',
    },
    TextInput8a0338d3: {
      borderColor: theme.colors.divider,
      borderRadius: 15,
      height: 45,
      paddingBottom: 8,
      paddingLeft: 10,
      paddingRight: 8,
      paddingTop: 8,
      width: '100%',
    },
    Texta5a64f59: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Textdc3e6c95: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Texte515109a: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Texte576ac7e: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
      textTransform: 'capitalize',
    },
    Touchable29534911: { marginLeft: 12 },
    Touchableba8738b6: { marginLeft: 16, marginRight: 16, width: '90%' },
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
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View6b56ee91: {
      alignItems: 'center',
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 20,
      flex: 1,
      paddingBottom: 10,
      paddingTop: 10,
      width: '100%',
    },
    View754d13e9: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      marginTop: 16,
      width: '100%',
    },
    View90d66b2f: {
      alignItems: 'center',
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 20,
      flex: 1,
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 10,
    },
    View92787b34: {
      backgroundColor: theme.colors.custom_rgb255_0_0,
      borderBottomWidth: 3,
      borderColor: theme.colors.custom_rgb255_255_255,
      borderLeftWidth: 3,
      borderRadius: 7,
      borderRightWidth: 3,
      borderTopWidth: 3,
      height: 14,
      left: 6,
      top: -30,
      width: 14,
    },
    View967fd4f5: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    View98498b12: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 10,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    View9fa86917: { paddingLeft: 16, paddingRight: 16 },
    Viewb8ef214e: {
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flex: 1,
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 10,
    },
    Viewc22dd40d: { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
    Viewcbf533b7: {
      alignItems: 'center',
      backgroundColor: theme.colors.divider,
      borderRadius: 12,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingLeft: 16,
      width: '100%',
    },
    Viewd8249661: { alignItems: 'center', flex: 1, width: '45%' },
    Viewdcbb4c7c: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewe903f622: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      width: '100%',
    },
    Viewe9defed4: { height: 48, justifyContent: 'center', width: 48 },
    Viewf7d57e05: {
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1,
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 10,
    },
    screen: { alignItems: 'center' },
  });

export default withTheme(FiltersScreen);
