import React from 'react';
import * as XanoAPIApi from '../apis/XanoAPIApi.js';
import { ScreenContainer, Spacer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ListImageCardsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <Text style={styles(theme).Texte16cb939}>{'CITIES'}</Text>

      <XanoAPIApi.FetchCitiesGET method={'GET'}>
        {({ loading, error, data, refetchCities }) => {
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
              listKey={'AtpFYdax'}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <>
                    <View style={styles(theme).Viewc24bea2b}>
                      <Touchable>
                        <View style={styles(theme).View159f4146}>
                          <ImageBackground
                            style={styles(theme).ImageBackground90e36d64}
                            resizeMode={'cover'}
                            source={{ uri: `${listData?.city_image?.url}` }}
                          />
                        </View>

                        <View style={styles(theme).View7005d0c0}>
                          <View>
                            <Text
                              style={styles(theme).Text34dfd9e2}
                              textBreakStrategy={'highQuality'}
                              ellipsizeMode={'tail'}
                              allowFontScaling={true}
                              numberOfLines={2}
                            >
                              {listData?.city_name}
                            </Text>
                          </View>
                        </View>
                      </Touchable>
                    </View>
                    <Spacer top={12} right={8} bottom={12} left={8} />
                  </>
                );
              }}
              style={styles(theme).FlatList989db244}
              contentContainerStyle={styles(theme).FlatList7005d0c0Content}
            />
          );
        }}
      </XanoAPIApi.FetchCitiesGET>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    FlatList7005d0c0Content: {
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    ImageBackground90e36d64: {
      borderRadius: theme.roundness,
      height: '100%',
      width: '100%',
    },
    Text34dfd9e2: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Poppins_700Bold',
      fontSize: 18,
    },
    Texte16cb939: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 26,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 32,
    },
    View159f4146: { height: 240 },
    View7005d0c0: {
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Viewc24bea2b: {
      backgroundColor: theme.colors.surface,
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      overflow: 'hidden',
    },
    screen: { backgroundColor: theme.colors.background },
  });

export default withTheme(ListImageCardsScreen);
