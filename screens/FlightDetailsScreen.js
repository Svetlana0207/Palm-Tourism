import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Circle,
  CircleImage,
  Divider,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const FlightDetailsScreen = props => {
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
      <View style={styles(theme).View32eb1d48}>
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

        <View style={styles(theme).View41f73c2d}>
          <Text style={styles(theme).Textdb840acf}>{'Flight Information'}</Text>

          <Text style={styles(theme).Text8c5a93bd}>
            {'Travel Date\n'}
            <Text style={styles(theme).Textdb840acf}>{'16 June 2022\n'}</Text>

            <Text style={styles(theme).Text1169097e}>{'5 days from now'}</Text>
          </Text>
        </View>
      </View>
      {/* Pass */}
      <View style={styles(theme).Viewa5de93be}>
        <View style={styles(theme).Viewf4272133} />
        <View style={styles(theme).View156fd7be} />
        <Surface style={styles(theme).Surface3a6fd992} elevation={3}>
          <View style={styles(theme).Viewb3cf4f1a}>
            <Image
              style={styles(theme).Image177a12c4}
              source={Images.BritishAirwaysLogo}
              resizeMode={'cover'}
            />
          </View>

          <View style={styles(theme).Viewdf223952}>
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
                <Circle size={6} bgColor={theme.colors.tripItBlue} />
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
        </Surface>
      </View>

      <View style={styles(theme).View76851bdc}>
        <View style={styles(theme).View668577fc} />
        <View style={styles(theme).View4227c39b}>
          <View style={styles(theme).Viewe6e9a174}>
            {/* Price */}
            <Text style={styles(theme).Textc928c5b9}>{'$499'}</Text>
            {/* per head */}
            <Text style={styles(theme).Textdd838caa}>{'/ per person'}</Text>
          </View>
          {/* Button Solid */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('CheckoutScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Button42d0234c}
            title={'Book this flight'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button42d0234c: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 188,
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'System',
      fontWeight: '700',
      paddingBottom: 16,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 16,
      textAlign: 'center',
    },
    Dividerc36ef9d1: { height: 80, marginTop: 5, width: 1 },
    Image177a12c4: { height: 100, width: 177 },
    Imagecb185bdc: { height: 40, opacity: 0.8, width: 70 },
    Surface3a6fd992: {
      borderColor: theme.colors.viewBG,
      borderRadius: 12,
      flex: 1,
      marginBottom: 5,
      marginTop: -2,
      minHeight: 40,
      paddingBottom: 10,
      width: '100%',
    },
    Surface52a4c315: {
      alignItems: 'center',
      borderRadius: 24,
      height: 48,
      justifyContent: 'center',
      minHeight: 48,
      width: 48,
    },
    Text1169097e: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_300Light',
      fontSize: 14,
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
    Text8c5a93bd: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      lineHeight: 25,
      marginTop: 16,
    },
    Texta2889947: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 11,
      opacity: 0.8,
      textAlign: 'center',
    },
    Textc928c5b9: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      textTransform: 'capitalize',
    },
    Textdb840acf: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      marginTop: 16,
    },
    Textdd838caa: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginTop: 4,
      textTransform: 'capitalize',
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
    View32eb1d48: {
      alignItems: 'flex-start',
      backgroundColor: theme.colors.tripItBlue,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      justifyContent: 'space-between',
      paddingBottom: 65,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    View39912261: { alignItems: 'center' },
    View3b1d4ef8: {
      alignItems: 'center',
      backgroundColor: theme.colors.custom_rgb255_255_255,
      height: 20,
      justifyContent: 'center',
      marginTop: -15,
    },
    View41f73c2d: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 20,
      width: '100%',
    },
    View4227c39b: {
      alignItems: 'center',
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1.4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 2,
      marginRight: 2,
      marginTop: 8,
      paddingBottom: 25,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 25,
      width: '100%',
    },
    View4c683d06: { paddingBottom: 16, paddingTop: 16 },
    View5d3d5542: { alignItems: 'flex-end', paddingBottom: 16, paddingTop: 16 },
    View668577fc: {
      backgroundColor: theme.colors.viewBG,
      borderRadius: 10,
      height: 6,
      width: 100,
    },
    View76851bdc: { alignItems: 'center', marginTop: 30, width: '100%' },
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
    Viewa5de93be: {
      alignItems: 'center',
      borderRadius: 21,
      marginTop: '-25%',
      overflow: 'hidden',
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      width: '100%',
    },
    Viewb3cf4f1a: {
      alignItems: 'center',
      backgroundColor: theme.colors.viewBG,
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    Viewdf223952: {
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewe6e9a174: { paddingLeft: 10 },
    Viewe9defed4: { height: 48, justifyContent: 'center', width: 48 },
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
    screen: { justifyContent: 'space-between' },
  });

export default withTheme(FlightDetailsScreen);
