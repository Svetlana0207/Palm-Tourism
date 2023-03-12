import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import {
  Circle,
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
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const FavoritesScreen = props => {
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
      hasSafeArea={false}
      scrollable={false}
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
                placeholder={'Search for place'}
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
        {/* Tab View */}
        <View style={styles(theme).Viewa9cfacd9}>
          {/* Top Tabs */}
          <View style={styles(theme).View6fe868d4}>
            {/* Tab1 */}
            <View style={styles(theme).View39912261}>
              {/* Active */}
              <>
                {!(selectedTab === 'tab1') ? null : (
                  <Touchable>
                    <Text style={styles(theme).Text671cd870}>
                      {'favorite tours'}
                    </Text>

                    <Text style={styles(theme).Textb00a595f}>
                      {'                         '}
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
                    <Text style={styles(theme).Text1274fdea}>
                      {'favorite tours'}
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
                      {'favorite Blogs'}
                    </Text>

                    <Text style={styles(theme).Textb00a595f}>
                      {'                         '}
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
                    <Text style={styles(theme).Text1274fdea}>
                      {'favorite blogs'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
          </View>
          {/* Tours List */}
          <>
            {!(selectedTab === 'tab1') ? null : (
              <ScrollView
                style={styles(theme).ScrollViewdf29e2e2}
                contentContainerStyle={styles(theme).ScrollView5777ad69Content}
                showsVerticalScrollIndicator={false}
                bounces={true}
                horizontal={false}
              >
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
                        listKey={'G9Bz7W4q'}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Record */}
                              <Touchable
                                onPress={() => {
                                  try {
                                    navigation.navigate('SelectFlightScreen');
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles(theme).Touchable4f49a1af}
                              >
                                <Surface
                                  style={styles(theme).Surfacee42c301c}
                                  elevation={3}
                                >
                                  <View style={styles(theme).Viewa3764d9f}>
                                    <View style={styles(theme).View8cf341ec}>
                                      <ImageBackground
                                        style={
                                          styles(theme).ImageBackgrounddf95a24d
                                        }
                                        resizeMode={'cover'}
                                        source={{
                                          uri: 'https://picsum.photos/180/220',
                                        }}
                                      >
                                        <Surface
                                          style={styles(theme).Surface01d5e804}
                                        >
                                          <Circle
                                            bgColor={
                                              theme.colors.custom_rgb255_255_255
                                            }
                                            size={20}
                                          >
                                            <Icon
                                              name={'AntDesign/heart'}
                                              color={
                                                theme.colors.custom_rgb255_0_0
                                              }
                                              size={12}
                                            />
                                          </Circle>
                                        </Surface>
                                        {/* Details */}
                                        <View
                                          style={styles(theme).View9d29234b}
                                        >
                                          {/* Name */}
                                          <Text
                                            style={styles(theme).Text7bf019c9}
                                          >
                                            {'Halong Bay'}
                                          </Text>
                                          {/* Price */}
                                          <Text
                                            style={styles(theme).Text96519f38}
                                          >
                                            {'From $300'}
                                          </Text>
                                        </View>
                                      </ImageBackground>
                                    </View>
                                  </View>
                                </Surface>
                              </Touchable>
                            </>
                          );
                        }}
                        style={styles(theme).FlatListdf29e2e2}
                        contentContainerStyle={
                          styles(theme).FlatListc992f941Content
                        }
                        horizontal={false}
                        numColumns={2}
                      />
                    );
                  }}
                </DraftbitApi.FetchPostsGET>
              </ScrollView>
            )}
          </>
          {/* Blogs List */}
          <>
            {!(selectedTab === 'tab2') ? null : (
              <ScrollView
                style={styles(theme).ScrollViewdf29e2e2}
                contentContainerStyle={styles(theme).ScrollView5777ad69Content}
                showsVerticalScrollIndicator={false}
                bounces={true}
                horizontal={false}
              >
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
                        listKey={'g5OHtJkI'}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              {/* Record */}
                              <Touchable
                                style={styles(theme).Touchable0f93a9b2}
                              >
                                <Surface
                                  style={styles(theme).Surfacee42c301c}
                                  elevation={3}
                                >
                                  <View style={styles(theme).Viewf6874caa}>
                                    <View style={styles(theme).View4ab6c823}>
                                      <Image
                                        style={styles(theme).Image115e9468}
                                        source={{
                                          uri: 'https://picsum.photos/180/220',
                                        }}
                                        resizeMode={'cover'}
                                      />
                                    </View>
                                    {/* Details */}
                                    <View style={styles(theme).View2741d373}>
                                      <View style={styles(theme).Viewa32f7bb2}>
                                        <View
                                          style={styles(theme).View683ac205}
                                        >
                                          {/* Name */}
                                          <Text
                                            style={styles(theme).Text54b43c21}
                                          >
                                            {'Halong Bay'}
                                          </Text>

                                          <View
                                            style={styles(theme).View797f2946}
                                          >
                                            <Icon
                                              name={'Feather/map-pin'}
                                              size={10}
                                              color={
                                                theme.colors.textPlaceholder
                                              }
                                            />
                                            {/* Country */}
                                            <Text
                                              style={styles(theme).Texte34170ea}
                                            >
                                              {'vietnam'}
                                            </Text>
                                          </View>
                                        </View>

                                        <Surface
                                          style={styles(theme).Surfacec8f20155}
                                        >
                                          <Circle
                                            bgColor={
                                              theme.colors.custom_rgb255_255_255
                                            }
                                            size={20}
                                          >
                                            <Icon
                                              name={'AntDesign/heart'}
                                              color={
                                                theme.colors.custom_rgb255_0_0
                                              }
                                              size={12}
                                            />
                                          </Circle>
                                        </Surface>
                                      </View>
                                      {/* Description */}
                                      <Text
                                        style={styles(theme).Textcc3ff0cd}
                                        numberOfLines={3}
                                      >
                                        {
                                          'Halong Bay is a UNESCO World Heritage Site that covers some 150,000 hectares. It is located on the Gulf of Tonkin in the north eastern province of Quang Ninh.'
                                        }
                                      </Text>
                                    </View>
                                  </View>
                                </Surface>
                              </Touchable>
                            </>
                          );
                        }}
                        style={styles(theme).FlatListdf29e2e2}
                        contentContainerStyle={
                          styles(theme).FlatListc992f941Content
                        }
                        numColumns={1}
                        horizontal={false}
                      />
                    );
                  }}
                </DraftbitApi.FetchPostsGET>
              </ScrollView>
            )}
          </>
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
    Image115e9468: { height: 100, width: 100 },
    ImageBackgrounddf95a24d: {
      alignItems: 'flex-start',
      height: 130,
      justifyContent: 'space-between',
      width: '100%',
    },
    ScrollView5777ad69Content: { flexDirection: 'row', marginTop: 16 },
    ScrollViewdf29e2e2: { width: '100%' },
    Surface01d5e804: {
      alignItems: 'center',
      borderRadius: 12,
      height: 24,
      justifyContent: 'center',
      marginTop: 10,
      position: 'absolute',
      right: 10,
      top: 0,
      width: 24,
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
    Surfacec8f20155: {
      alignItems: 'center',
      borderRadius: 12,
      height: 24,
      justifyContent: 'center',
      minHeight: 24,
      width: 24,
    },
    Surfacee42c301c: {
      borderColor: theme.colors.viewBG,
      borderLeftWidth: 1,
      borderRadius: 12,
      borderRightWidth: 1,
      marginBottom: 12,
      minHeight: 40,
    },
    Surfacef30bfc43: {
      borderRadius: 20,
      justifyContent: 'center',
      minHeight: 40,
      overflow: 'hidden',
    },
    Text1274fdea: {
      color: theme.colors.medium,
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Text44302ea3: {
      color: theme.colors.medium,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    Text54b43c21: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
    },
    Text671cd870: {
      color: theme.colors.tripItBlue,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    Text7bf019c9: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_500Medium',
      fontSize: 13,
    },
    Text96519f38: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_500Medium',
      fontSize: 11,
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
    Textcc3ff0cd: {
      color: theme.colors.strong,
      fontFamily: 'Inter_300Light',
      fontSize: 11,
      lineHeight: 14,
      marginTop: 4,
      textTransform: 'capitalize',
    },
    Texte34170ea: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      paddingLeft: 6,
      textTransform: 'capitalize',
    },
    Touchable0f93a9b2: { marginTop: 16, width: '100%' },
    Touchable29534911: { marginLeft: 12 },
    Touchable4f49a1af: { marginLeft: 16, marginTop: 16, width: '45%' },
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
    View2741d373: {
      alignItems: 'flex-start',
      flex: 1,
      paddingBottom: 9,
      paddingLeft: 16,
      paddingRight: 8,
      paddingTop: 9,
    },
    View39912261: { alignItems: 'center' },
    View4ab6c823: { borderRadius: 12, overflow: 'hidden' },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View550d1a35: { alignItems: 'center', flexDirection: 'row', marginTop: 3 },
    View683ac205: { justifyContent: 'space-between' },
    View6fe868d4: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
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
    View797f2946: { alignItems: 'center', flexDirection: 'row', marginTop: 4 },
    View897c6051: { marginLeft: 16 },
    View8cf341ec: { borderRadius: 12, overflow: 'hidden', width: '100%' },
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
    View9d29234b: {
      alignItems: 'flex-start',
      backgroundColor: theme.colors.custom_rgba0_0_0_03,
      bottom: 0,
      flex: 1,
      justifyContent: 'center',
      paddingBottom: 4,
      paddingLeft: 16,
      paddingTop: 4,
      position: 'absolute',
      width: '100%',
    },
    Viewa32f7bb2: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    Viewa3764d9f: {
      alignItems: 'flex-start',
      flex: 1,
      justifyContent: 'space-between',
      overflow: 'hidden',
      width: '100%',
    },
    Viewa9cfacd9: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    Viewabfce44f: { alignItems: 'flex-start', justifyContent: 'center' },
    Viewc992f941: { flex: 1 },
    Viewf6874caa: {
      alignItems: 'flex-start',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      overflow: 'hidden',
      paddingRight: 10,
      width: '100%',
    },
    screen: { justifyContent: 'space-between' },
  });

export default withTheme(FavoritesScreen);
