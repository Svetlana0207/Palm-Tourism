import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import {
  CircleImage,
  Icon,
  ScreenContainer,
  StarRating,
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
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const SelectFlightScreen = props => {
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
      <View style={styles(theme).Viewb5967bab}>
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

        <Text style={styles(theme).Textdc3e6c95}>{'Select your Flight'}</Text>

        <View style={styles(theme).Viewe9defed4}>
          <Touchable>
            <Surface style={styles(theme).Surface52a4c315}>
              <Icon name={'Feather/search'} size={24} />
            </Surface>
          </Touchable>
        </View>
      </View>
      {/* Destination */}
      <View style={styles(theme).View8efffb3b}>
        <View style={styles(theme).View0b4e0248}>
          <View style={styles(theme).View4ab6c823}>
            <Image
              style={styles(theme).Image7578b8c6}
              source={{ uri: 'https://picsum.photos/180/220' }}
              resizeMode={'cover'}
            />
          </View>
          {/* Details */}
          <View style={styles(theme).Viewdf2dfea8}>
            {/* Name */}
            <Text style={styles(theme).Text75e44f35}>{'Eiffel Tower'}</Text>

            <View style={styles(theme).View0aa36c3c}>
              <Icon
                name={'Feather/map-pin'}
                size={14}
                color={theme.colors.custom_rgb255_255_255}
              />
              {/* Country */}
              <Text style={styles(theme).Texte0a71cca}>{'paris, france'}</Text>
            </View>
            {/* Ratings */}
            <View style={styles(theme).View9b2b57f9}>
              <StarRating
                onPress={newStarRatingValue => {
                  try {
                    setStarRatingValue2(newStarRatingValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                rating={starRatingValue2}
                starSize={16}
                maxStars={5}
                activeColor={theme.colors.primary}
                inactiveColor={theme.colors.divider}
              />
              {/* ratings */}
              <Text style={styles(theme).Text607c526b} numberOfLines={3}>
                {'5.0'}
                <Text style={styles(theme).Textb962f8a6}>
                  {' (3208 views)'}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
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
                  listKey={'ZiYYh9R7'}
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
                                  source={Images.EmiratesLogo1985}
                                  resizeMode={'cover'}
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
    Image7578b8c6: { height: 70, width: 70 },
    Imagecb185bdc: { height: 40, opacity: 0.8, width: 70 },
    Surface52a4c315: {
      alignItems: 'center',
      borderRadius: 24,
      height: 48,
      justifyContent: 'center',
      minHeight: 48,
      width: 48,
    },
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
    Text10831a06: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 11,
      textTransform: 'capitalize',
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
    Text607c526b: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      paddingLeft: 8,
      textTransform: 'capitalize',
    },
    Text62ea81a9: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginTop: 2,
      textTransform: 'capitalize',
    },
    Text75e44f35: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    Texta2889947: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 11,
      opacity: 0.8,
      textAlign: 'center',
    },
    Textb962f8a6: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_300Light',
      fontSize: 11,
      paddingLeft: 5,
    },
    Textbde0f4c4: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginTop: 2,
    },
    Textdc3e6c95: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Texte0a71cca: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      paddingLeft: 6,
      textTransform: 'capitalize',
    },
    Textea698611: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 10,
      textTransform: 'capitalize',
    },
    Touchabledf29e2e2: { width: '100%' },
    View012d6798: {
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    View0aa36c3c: { alignItems: 'center', flexDirection: 'row', marginTop: 6 },
    View0b4e0248: {
      alignItems: 'flex-start',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      overflow: 'hidden',
      paddingBottom: 12,
      paddingRight: 10,
      paddingTop: 12,
      width: '100%',
    },
    View3b1d4ef8: {
      alignItems: 'center',
      backgroundColor: theme.colors.custom_rgb255_255_255,
      height: 20,
      justifyContent: 'center',
      marginTop: -15,
    },
    View4ab6c823: { borderRadius: 12, overflow: 'hidden' },
    View4c683d06: { paddingBottom: 16, paddingTop: 16 },
    View5d3d5542: { alignItems: 'flex-end', paddingBottom: 16, paddingTop: 16 },
    View68b4e34a: { alignItems: 'center', justifyContent: 'flex-end' },
    View6973eff6: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
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
    View8efffb3b: {
      backgroundColor: theme.colors.tripItBlue,
      height: 100,
      marginTop: 16,
      overflow: 'hidden',
      paddingLeft: 16,
      paddingRight: 16,
    },
    View9b2b57f9: { alignItems: 'center', flexDirection: 'row', marginTop: 8 },
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
    Viewb0d3090b: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    Viewb5967bab: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      marginTop: 8,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    Viewd6c0315b: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 10,
    },
    Viewdf2dfea8: {
      alignItems: 'flex-start',
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 16,
    },
    Viewe9defed4: { height: 48, justifyContent: 'center', width: 48 },
    screen: { justifyContent: 'space-between', paddingTop: 16 },
  });

export default withTheme(SelectFlightScreen);
