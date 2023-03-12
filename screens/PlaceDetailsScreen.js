import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import {
  Button,
  Circle,
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
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const PlaceDetailsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [selectedTab, setSelectedTab] = React.useState('tab1');

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <View style={styles(theme).View8dc796a9}>
        <Image
          style={styles(theme).Image8f5f9027}
          resizeMode={'cover'}
          source={{ uri: 'https://picsum.photos/400/400' }}
        />
        {/* Top Header */}
        <View style={styles(theme).Viewcd182eea}>
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

          <View style={styles(theme).Viewe9defed4}>
            <Touchable>
              <Surface style={styles(theme).Surface52a4c315}>
                <Icon name={'Feather/search'} size={24} />
              </Surface>
            </Touchable>
          </View>
        </View>

        <View style={styles(theme).View2b6f5773}>
          <View style={styles(theme).Viewc992f941}>
            <View style={styles(theme).Vieweb126323}>
              {/* Destination */}
              <View style={styles(theme).Viewfbbc4257}>
                <View style={styles(theme).View0b4e0248}>
                  {/* Details */}
                  <View style={styles(theme).Viewdf2dfea8}>
                    {/* Name */}
                    <Text style={styles(theme).Texte7d3e671}>
                      {'Eiffel Tower'}
                    </Text>

                    <View style={styles(theme).View0aa36c3c}>
                      <Icon
                        name={'Feather/map-pin'}
                        size={14}
                        color={theme.colors.textPlaceholder}
                      />
                      {/* Country */}
                      <Text style={styles(theme).Textc09d572c}>
                        {'paris, france'}
                      </Text>
                    </View>
                    {/* Ratings */}
                    <View style={styles(theme).View0aa36c3c}>
                      <StarRating
                        onPress={newStarRatingValue => {
                          try {
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        starSize={16}
                        maxStars={5}
                        activeColor={theme.colors.primary}
                        inactiveColor={theme.colors.divider}
                      />
                      {/* ratings */}
                      <Text
                        style={styles(theme).Text8d0e01cf}
                        numberOfLines={3}
                      >
                        {'5.0'}
                        <Text style={styles(theme).Textc510aadb}>
                          {' (3208 views)'}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <Surface style={styles(theme).Surface259b5244}>
                <Circle size={22} bgColor={theme.colors.custom_rgb255_255_255}>
                  <Icon
                    name={'AntDesign/heart'}
                    size={12}
                    color={theme.colors.custom_rgb255_0_0}
                  />
                </Circle>
              </Surface>
            </View>

            <View style={styles(theme).Viewc992f941}>
              {/* Tabs */}
              <View style={styles(theme).Viewcd2b2289}>
                {/* Tab1 */}
                <View style={styles(theme).View39912261}>
                  {/* Active */}
                  <>
                    {!(selectedTab === 'tab1') ? null : (
                      <Touchable>
                        <Text style={styles(theme).Text671cd870}>
                          {'Overview'}
                        </Text>

                        <Text style={styles(theme).Textb00a595f}>
                          {'       '}
                        </Text>
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
                      >
                        <Text style={styles(theme).Text1a2cd0e4}>
                          {'Overview'}
                        </Text>
                      </Touchable>
                    )}
                  </>
                </View>
                {/* Tab2 */}
                <View style={styles(theme).View39912261}>
                  {/* Active */}
                  <>
                    {!(selectedTab === 'tab2') ? null : (
                      <Touchable>
                        <Text style={styles(theme).Text671cd870}>
                          {'Reviews'}
                        </Text>

                        <Text style={styles(theme).Textb00a595f}>
                          {'       '}
                        </Text>
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
                      >
                        <Text style={styles(theme).Text1a2cd0e4}>
                          {'Reviews'}
                        </Text>
                      </Touchable>
                    )}
                  </>
                </View>
                {/* Tab3 */}
                <View style={styles(theme).View39912261}>
                  {/* Active */}
                  <>
                    {!(selectedTab === 'tab3') ? null : (
                      <Touchable>
                        <Text style={styles(theme).Text671cd870}>
                          {'Gallery'}
                        </Text>

                        <Text style={styles(theme).Textb00a595f}>
                          {'       '}
                        </Text>
                      </Touchable>
                    )}
                  </>
                  {/* Inactive */}
                  <>
                    {selectedTab === 'tab3' ? null : (
                      <Touchable
                        onPress={() => {
                          try {
                            setSelectedTab('tab3');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <Text style={styles(theme).Text1a2cd0e4}>
                          {'Gallery'}
                        </Text>
                      </Touchable>
                    )}
                  </>
                </View>
              </View>
              {/* Overview */}
              <>
                {!(selectedTab === 'tab1') ? null : (
                  <View style={styles(theme).Viewf9f43355}>
                    <Text style={styles(theme).Texta3059d3e}>
                      {'Why you MUST visit the Eiffel Tower?'}
                    </Text>

                    <Text style={styles(theme).Text1f320bd1} numberOfLines={5}>
                      {
                        'he Eiffel Tower (/ˈaɪfəl/ EYE-fəl; French: tour Eiffel [tuʁ‿ɛfɛl] (listen)) is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.'
                      }
                    </Text>
                  </View>
                )}
              </>
              {/* Reviews */}
              <>
                {!(selectedTab === 'tab2') ? null : (
                  <View style={styles(theme).Viewc992f941}>
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
                            listKey={'zk1b3bbH'}
                            keyExtractor={listData =>
                              listData?.id ||
                              listData?.uuid ||
                              JSON.stringify(listData)
                            }
                            renderItem={({ item }) => {
                              const listData = item;
                              return (
                                <View style={styles(theme).View4174d724}>
                                  <View style={styles(theme).Viewdebd3207}>
                                    <CircleImage
                                      source={Images.Avatar}
                                      size={35}
                                    />
                                    <View style={styles(theme).Viewffba14e8}>
                                      <Text style={styles(theme).Text9fe55e89}>
                                        {'Arvind Limba'}
                                      </Text>

                                      <Text style={styles(theme).Text58b6a1cf}>
                                        {'I love it!'}
                                      </Text>
                                    </View>
                                  </View>

                                  <View>
                                    <Icon
                                      name={'AntDesign/hearto'}
                                      size={15}
                                      color={theme.colors.textPlaceholder}
                                    />
                                  </View>
                                </View>
                              );
                            }}
                            style={styles(theme).FlatList989db244}
                            contentContainerStyle={
                              styles(theme).FlatListbef0bd5fContent
                            }
                            numColumns={1}
                          />
                        );
                      }}
                    </DraftbitApi.FetchPostsGET>
                  </View>
                )}
              </>
              {/* Gallery */}
              <>
                {!(selectedTab === 'tab3') ? null : (
                  <View style={styles(theme).Viewea440023}>
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
                            listKey={'mCT34Eup'}
                            keyExtractor={listData =>
                              listData?.id ||
                              listData?.uuid ||
                              JSON.stringify(listData)
                            }
                            renderItem={({ item }) => {
                              const listData = item;
                              return (
                                <View style={styles(theme).View5a2d123d}>
                                  <Image
                                    style={styles(theme).Image163690cb}
                                    resizeMode={'cover'}
                                    source={{
                                      uri: 'https://picsum.photos/200/300',
                                    }}
                                  />
                                </View>
                              );
                            }}
                            style={styles(theme).FlatList8dc796a9}
                            contentContainerStyle={
                              styles(theme).FlatListbef0bd5fContent
                            }
                            numColumns={2}
                          />
                        );
                      }}
                    </DraftbitApi.FetchPostsGET>
                  </View>
                )}
              </>
            </View>
          </View>

          <View style={styles(theme).View834d613a}>
            <View style={styles(theme).Viewcbeef3cd}>
              <View style={styles(theme).View0460ab8b}>
                {/* Price */}
                <Text style={styles(theme).Textc928c5b9}>{'$499'}</Text>
                {/* per head */}
                <Text style={styles(theme).Textc5711e96}>{'(3 days)'}</Text>
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
                style={styles(theme).Button8acc591d}
                title={'Book Now'}
              />
            </View>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button8acc591d: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 188,
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'System',
      fontWeight: '700',
      paddingBottom: 12,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 12,
      textAlign: 'center',
    },
    Fetch431eb058: { minHeight: 40 },
    FlatList8dc796a9: { height: '100%', width: '100%' },
    FlatListbef0bd5fContent: { paddingLeft: 25, paddingRight: 25 },
    Image163690cb: { height: 100, width: '100%' },
    Image8f5f9027: { height: '55%', position: 'absolute', width: '100%' },
    Surface259b5244: {
      alignItems: 'center',
      borderRadius: 17,
      height: 24,
      justifyContent: 'center',
      marginTop: 10,
      width: 24,
    },
    Surface52a4c315: {
      alignItems: 'center',
      borderRadius: 24,
      height: 48,
      justifyContent: 'center',
      minHeight: 48,
      width: 48,
    },
    Text1a2cd0e4: {
      color: theme.colors.medium,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      textTransform: 'capitalize',
    },
    Text1f320bd1: {
      color: theme.colors.textPlaceholder,
      fontSize: 11,
      marginTop: 5,
    },
    Text58b6a1cf: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 11,
      marginTop: 2,
    },
    Text671cd870: {
      color: theme.colors.tripItBlue,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Text8d0e01cf: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      paddingLeft: 8,
      textTransform: 'capitalize',
    },
    Text9fe55e89: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 12,
    },
    Texta3059d3e: { color: theme.colors.strong, fontSize: 12 },
    Textb00a595f: {
      color: theme.colors.tripItBlue,
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: '600',
      marginTop: -8,
      textAlign: 'center',
      textDecorationColor: theme.colors.tripItBlue,
      textDecorationLine: 'underline',
    },
    Textc09d572c: {
      color: theme.colors.medium,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      paddingLeft: 6,
      textTransform: 'capitalize',
    },
    Textc510aadb: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_300Light',
      fontSize: 11,
      paddingLeft: 5,
    },
    Textc5711e96: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      marginTop: 4,
      paddingLeft: 5,
      textTransform: 'capitalize',
    },
    Textc928c5b9: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      textTransform: 'capitalize',
    },
    Texte7d3e671: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
    },
    View0460ab8b: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      paddingLeft: 10,
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
    View2b6f5773: {
      backgroundColor: theme.colors.custom_rgb255_255_255,
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 21,
      borderRightWidth: 1,
      borderTopWidth: 2,
      height: '50%',
      justifyContent: 'space-between',
      marginTop: '-15%',
      top: '50%',
    },
    View39912261: { alignItems: 'center' },
    View4174d724: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingTop: 8,
    },
    View5a2d123d: {
      borderRadius: 12,
      marginLeft: 16,
      overflow: 'hidden',
      paddingBottom: 16,
      width: '45%',
    },
    View834d613a: {
      alignItems: 'center',
      height: '25%',
      justifyContent: 'center',
      maxHeight: 80,
      width: '100%',
    },
    View8dc796a9: { height: '100%', width: '100%' },
    Viewc992f941: { flex: 1 },
    Viewcbeef3cd: {
      alignItems: 'center',
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1.4,
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'space-between',
      marginLeft: 2,
      marginRight: 2,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    Viewcd182eea: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 55,
      justifyContent: 'space-between',
      marginTop: 8,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    Viewcd2b2289: {
      borderColor: theme.colors.viewBG,
      borderTopWidth: 0.5,
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 16,
      width: '100%',
    },
    Viewdebd3207: { flexDirection: 'row' },
    Viewdf2dfea8: {
      alignItems: 'flex-start',
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 16,
    },
    Viewe9defed4: { height: 48, justifyContent: 'center', width: 48 },
    Viewea440023: { flex: 1, marginTop: 10, width: '100%' },
    Vieweb126323: {
      flexDirection: 'row',
      height: 100,
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 30,
      paddingTop: 16,
    },
    Viewf9f43355: {
      flex: 1,
      paddingLeft: 32,
      paddingRight: 32,
      paddingTop: 16,
    },
    Viewfbbc4257: { flex: 1, overflow: 'hidden', paddingRight: 16 },
    Viewffba14e8: { justifyContent: 'center', paddingLeft: 10 },
  });

export default withTheme(PlaceDetailsScreen);
