import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Circle,
  CircleImage,
  Divider,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const CheckoutCompletedScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={true}
      scrollable={true}
      hasBottomSafeArea={false}
    >
      {/* Top Header */}
      <View style={styles(theme).Vieweb99ad43}>
        <Text style={styles(theme).Textdc3e6c95}>{'Check out'}</Text>
      </View>
      {/* Pass */}
      <View style={styles(theme).View7a1771dc}>
        <View style={styles(theme).Viewf4272133} />
        <View style={styles(theme).View156fd7be} />
        <Surface style={styles(theme).Surfacea3133200} elevation={3}>
          <View style={styles(theme).View3acc02d2}>
            <View style={styles(theme).View34cda7db}>
              <Circle bgColor={theme.colors.tripItBlue} size={10} />
            </View>
            <Image
              style={styles(theme).Image177a12c4}
              resizeMode={'cover'}
              source={Images.BritishAirwaysLogo}
            />
            <View style={styles(theme).Viewe9491584}>
              <Circle bgColor={theme.colors.tripItBlue} size={10} />
            </View>
          </View>

          <View style={styles(theme).View6973eff6}>
            <View style={styles(theme).View4c683d06}>
              <Text style={styles(theme).Text62ea81a9}>{'From'}</Text>

              <Text style={styles(theme).Text58ba9a72}>{'NYC'}</Text>

              <Text style={styles(theme).Texte57ea90d}>{'new york'}</Text>

              <Text style={styles(theme).Textfcad0d61}>{'Departure'}</Text>

              <Text style={styles(theme).Text1d25c0b0}>{'8:00 am'}</Text>

              <Text style={styles(theme).Textfcad0d61}>{'Class'}</Text>

              <Text style={styles(theme).Text1d25c0b0}>{'First Class'}</Text>

              <Text style={styles(theme).Textfcad0d61}>{'Flight No.'}</Text>

              <Text style={styles(theme).Text1d25c0b0}>{'KQ201'}</Text>
            </View>

            <View style={styles(theme).Viewa0de19be}>
              <View style={styles(theme).View39912261}>
                <Image
                  style={styles(theme).Imagecb185bdc}
                  source={Images.EmiratesLogo1985}
                  resizeMode={'cover'}
                />
                <Divider
                  style={styles(theme).Dividerc36ef9d1}
                  color={theme.colors.tripItBlue}
                />
                <Circle bgColor={theme.colors.tripItBlue} size={6} />
              </View>

              <View style={styles(theme).Viewec1dd9b9}>
                <View style={styles(theme).Viewa576bf92}>
                  <CircleImage source={Images.Flight} size={30} />
                </View>

                <View style={styles(theme).View3b1d4ef8}>
                  {/* Duration */}
                  <Text style={styles(theme).Texta2889947}>{'7h 45m'}</Text>
                </View>
                <Divider
                  style={styles(theme).Dividerc36ef9d1}
                  color={theme.colors.tripItBlue}
                />
                <Circle bgColor={theme.colors.tripItBlue} size={6} />
              </View>
            </View>

            <View style={styles(theme).View5d3d5542}>
              <Text style={styles(theme).Text62ea81a9}>{'To'}</Text>

              <Text style={styles(theme).Text58ba9a72}>{'CDG'}</Text>

              <Text style={styles(theme).Texte57ea90d}>{'paris'}</Text>

              <Text style={styles(theme).Textfcad0d61}>{'Arrival'}</Text>

              <Text style={styles(theme).Text1d25c0b0}>{'09:40 am'}</Text>

              <Text style={styles(theme).Textfcad0d61}>{'Seat'}</Text>

              <Text style={styles(theme).Text1d25c0b0}>{'A3'}</Text>

              <Text style={styles(theme).Textfcad0d61}>{'Gate'}</Text>

              <Text style={styles(theme).Text1d25c0b0}>{'G'}</Text>
            </View>
          </View>

          <View style={styles(theme).Viewb1cfc142}>
            {/* Booking pass */}
            <Text style={styles(theme).Text671cd870}>{'Booking Pass'}</Text>
            <Image
              style={styles(theme).Imagee3a0654e}
              resizeMode={'cover'}
              source={Images.Barcode}
            />
          </View>
        </Surface>

        <Text style={styles(theme).Textb82eb813}>
          {'Be sure to check in online'}
        </Text>
      </View>
      {/* Actions */}
      <View style={styles(theme).Viewa7145c56}>
        <View style={styles(theme).View181c781b}>
          {/* Button Solid */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('TicketinfoScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttonfd192752}
            title={'Save Ticket'}
          />
        </View>

        <View style={styles(theme).View31f612c5}>
          {/* Button Solid */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  initial: false,
                  screen: 'HomeScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttonf8394cda}
            title={'Return Home'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonf8394cda: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 21,
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'System',
      fontWeight: '700',
      height: 40,
      textAlign: 'center',
    },
    Buttonfd192752: {
      backgroundColor: theme.colors.custom_rgb255_255_255,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRadius: 21,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors.textPlaceholder,
      fontFamily: 'System',
      fontWeight: '700',
      height: 40,
      textAlign: 'center',
    },
    Dividerc36ef9d1: { height: 80, marginTop: 5, width: 1 },
    Image177a12c4: { height: 100, width: 177 },
    Imagecb185bdc: { height: 40, opacity: 0.8, width: 70 },
    Imagee3a0654e: { height: 100, width: '80%' },
    Surfacea3133200: {
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 12,
      borderRightWidth: 1,
      flex: 1,
      marginBottom: 5,
      marginTop: -2,
      minHeight: 40,
      paddingBottom: 10,
      width: '100%',
    },
    Text1d25c0b0: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 14,
      marginTop: 6,
    },
    Text58ba9a72: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 21,
      marginTop: 6,
    },
    Text62ea81a9: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginTop: 2,
      textTransform: 'capitalize',
    },
    Text671cd870: {
      color: theme.colors.tripItBlue,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Texta2889947: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 11,
      opacity: 0.8,
      textAlign: 'center',
    },
    Textb82eb813: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_400Regular',
      textAlign: 'center',
    },
    Textdc3e6c95: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Texte57ea90d: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginTop: 6,
      textTransform: 'capitalize',
    },
    Textfcad0d61: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginTop: 25,
      opacity: 0.8,
    },
    View156fd7be: {
      backgroundColor: theme.colors.custom_rgb255_255_255,
      borderRadius: 10,
      height: 10,
      marginTop: -2,
      opacity: 0.4,
      width: '95%',
    },
    View181c781b: { flex: 1, marginRight: 16 },
    View31f612c5: { flex: 1, marginLeft: 16 },
    View34cda7db: { left: -6, opacity: 0.6, top: 30 },
    View39912261: { alignItems: 'center' },
    View3acc02d2: {
      alignItems: 'center',
      backgroundColor: theme.colors.viewBG,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    View3b1d4ef8: {
      alignItems: 'center',
      backgroundColor: theme.colors.custom_rgb255_255_255,
      height: 20,
      justifyContent: 'center',
      marginTop: -15,
    },
    View4c683d06: { paddingBottom: 16, paddingTop: 16 },
    View5d3d5542: { alignItems: 'flex-end', paddingBottom: 16, paddingTop: 16 },
    View6973eff6: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
    View7a1771dc: {
      alignItems: 'center',
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 21,
      marginTop: 16,
      overflow: 'hidden',
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      width: '100%',
    },
    Viewa0de19be: { alignItems: 'center', paddingTop: 10 },
    Viewa576bf92: {
      borderColor: theme.colors.tripItBlue,
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 40,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
      width: 40,
    },
    Viewa7145c56: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginLeft: 16,
      marginRight: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Viewb1cfc142: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewe9491584: { opacity: 0.6, right: -6, top: 30 },
    Vieweb99ad43: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginTop: 8,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    Viewec1dd9b9: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 5,
    },
    Viewf4272133: {
      backgroundColor: theme.colors.custom_rgb255_255_255,
      borderRadius: 10,
      height: 10,
      opacity: 0.2,
      width: '85%',
    },
    screen: { paddingTop: 16 },
  });

export default withTheme(CheckoutCompletedScreen);
