import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import {
  CircleImage,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const FlightsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasBottomSafeArea={false}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      {/* Top Navigation Header */}
      <View style={styles(theme).View783fbd5a}>
        {/* Left Section */}
        <View style={styles(theme).Viewabfce44f}>
          <Text style={styles(theme).Text44302ea3}>{'Hello, Arvind!'}</Text>

          <View style={styles(theme).View550d1a35}>
            <Icon
              name={'Feather/map-pin'}
              size={15}
              color={theme.colors.medium}
            />
            <Text style={styles(theme).Texta21d3b0d}>{'Noida, India'}</Text>
            <Icon name={'Entypo/chevron-small-down'} size={24} />
          </View>
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

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  initial: false,
                  screen: 'ProfileScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Touchable29534911}
          >
            <Surface style={styles(theme).Surfacef30bfc43} elevation={3}>
              <CircleImage source={Images.Avatar} size={40} />
            </Surface>
          </Touchable>
        </View>
      </View>

      <ScrollView
        style={styles(theme).ScrollViewdf29e2e2}
        contentContainerStyle={styles(theme).ScrollView989db244Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Search And Filter */}
        <View style={styles(theme).View1705936f}>
          <View style={styles(theme).Viewc992f941}>
            <Surface style={styles(theme).Surfacec38b2542} elevation={3}>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInputacfc6cc8}
                value={textInputValue}
                placeholder={'Search for Flight'}
                placeholderTextColor={theme.colors.textPlaceholder}
              />
              <Icon
                name={'Feather/search'}
                size={24}
                color={theme.colors.textPlaceholder}
              />
            </Surface>
          </View>

          <View style={styles(theme).View897c6051}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('FiltersScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon name={'AntDesign/filter'} size={30} />
            </Touchable>
          </View>
        </View>
        {/* Flights */}
        <View style={styles(theme).View012d6798}>
          <DraftbitApi.FetchPostsGET limit={6}>
            {({ loading, error, data, refetchPosts }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <FlatList
                  data={fetchData}
                  listKey={'ohcbIgQR'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <>
                        {/* Record */}
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('FlightDetailsScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={styles(theme).Touchabledf29e2e2}
                        >
                          <Surface
                            style={styles(theme).Surfaceb940f1f9}
                            elevation={3}
                          >
                            <View style={styles(theme).View6973eff6}>
                              <View style={styles(theme).View4c683d06}>
                                <Text style={styles(theme).Text5bf4a074}>
                                  {'NYC'}
                                </Text>

                                <Text style={styles(theme).Text62ea81a9}>
                                  {'new york'}
                                </Text>

                                <Text style={styles(theme).Text4b06169e}>
                                  {'Date'}
                                </Text>

                                <Text style={styles(theme).Textbde0f4c4}>
                                  {'5 April'}
                                </Text>
                              </View>

                              <View style={styles(theme).Viewd6c0315b}>
                                <Image
                                  style={styles(theme).Imagecb185bdc}
                                  resizeMode={'cover'}
                                  source={Images.EmiratesLogo1985}
                                />
                                <View style={styles(theme).View68b4e34a}>
                                  <View style={styles(theme).Viewa576bf92}>
                                    <CircleImage
                                      source={Images.Flight}
                                      size={30}
                                    />
                                  </View>

                                  <View style={styles(theme).View3b1d4ef8}>
                                    {/* Duration */}
                                    <Text style={styles(theme).Texta2889947}>
                                      {'5h 45m, 8:25 AM'}
                                    </Text>
                                  </View>
                                </View>
                              </View>

                              <View style={styles(theme).View5d3d5542}>
                                <Text style={styles(theme).Text5bf4a074}>
                                  {'LAX'}
                                </Text>

                                <Text style={styles(theme).Text62ea81a9}>
                                  {'los angeles'}
                                </Text>

                                <Text style={styles(theme).Text4b06169e}>
                                  {'Flight No'}
                                </Text>

                                <Text style={styles(theme).Textbde0f4c4}>
                                  {'KQ102'}
                                </Text>
                              </View>
                            </View>

                            <View style={styles(theme).View7e55a842}>
                              {/* Price */}
                              <Text style={styles(theme).Text10831a06}>
                                {'round-trip'}
                              </Text>

                              <View style={styles(theme).Viewb0d3090b}>
                                {/* Price */}
                                <Text style={styles(theme).Textea698611}>
                                  {'ticket price:  '}
                                </Text>
                                {/* Price */}
                                <Text style={styles(theme).Text48766ffb}>
                                  {'$210'}
                                </Text>
                              </View>
                            </View>
                          </Surface>
                        </Touchable>
                      </>
                    );
                  }}
                  style={styles(theme).FlatListdf29e2e2}
                  contentContainerStyle={styles(theme).FlatListc992f941Content}
                  numColumns={1}
                  horizontal={false}
                />
              );
            }}
          </DraftbitApi.FetchPostsGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    FlatListdf29e2e2: { width: '100%' },
    Icon6cafd915: { marginTop: 14 },
    Imagecb185bdc: { height: 40, opacity: 0.8, width: 70 },
    ScrollViewdf29e2e2: { width: '100%' },
    Surfaceb940f1f9: {
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 12,
      borderRightWidth: 1,
      flex: 1,
      marginBottom: 10,
      marginTop: 10,
      minHeight: 40,
      paddingBottom: 10,
      paddingTop: 10,
      width: '100%',
    },
    Surfacec38b2542: {
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      flex: 1,
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      minHeight: 48,
      paddingRight: 16,
    },
    Surfacef30bfc43: {
      borderRadius: 20,
      justifyContent: 'center',
      minHeight: 40,
      overflow: 'hidden',
    },
    Text10831a06: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 11,
      textTransform: 'capitalize',
    },
    Text44302ea3: {
      color: theme.colors.medium,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    Text48766ffb: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 17,
    },
    Text4b06169e: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 10,
      marginTop: 25,
      opacity: 0.8,
    },
    Text5bf4a074: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 21,
    },
    Text62ea81a9: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginTop: 2,
      textTransform: 'capitalize',
    },
    TextInputacfc6cc8: {
      borderRadius: 8,
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 24,
      paddingRight: 8,
      paddingTop: 8,
      width: '90%',
    },
    Texta21d3b0d: {
      color: theme.colors.strong,
      fontFamily: 'Inter_700Bold',
      fontSize: 15,
      paddingLeft: 8,
      paddingRight: 5,
      textTransform: 'capitalize',
    },
    Texta2889947: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 11,
      opacity: 0.8,
      textAlign: 'center',
    },
    Textbde0f4c4: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginTop: 2,
    },
    Textea698611: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 10,
      textTransform: 'capitalize',
    },
    Touchable29534911: { marginLeft: 12 },
    Touchabledf29e2e2: { width: '100%' },
    View012d6798: {
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    View1705936f: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    View3b1d4ef8: {
      alignItems: 'center',
      backgroundColor: theme.colors.custom_rgb255_255_255,
      height: 20,
      justifyContent: 'center',
      marginTop: -15,
    },
    View4c683d06: { paddingBottom: 16, paddingTop: 16 },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View550d1a35: { alignItems: 'center', flexDirection: 'row', marginTop: 3 },
    View5d3d5542: { alignItems: 'flex-end', paddingBottom: 16, paddingTop: 16 },
    View68b4e34a: { alignItems: 'center', justifyContent: 'flex-end' },
    View6973eff6: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
    View783fbd5a: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
    },
    View7e55a842: {
      alignItems: 'center',
      borderColor: theme.colors.viewBG,
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 12,
    },
    View897c6051: { marginLeft: 16 },
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
    Viewabfce44f: { alignItems: 'flex-start', justifyContent: 'center' },
    Viewb0d3090b: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    Viewc992f941: { flex: 1 },
    Viewd6c0315b: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 10,
    },
    screen: { justifyContent: 'space-between' },
  });

export default withTheme(FlightsScreen);
