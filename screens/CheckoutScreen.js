import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const CheckoutScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

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

        <Text style={styles(theme).Textdc3e6c95}>{'Check out'}</Text>
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
      {/* Tab View */}
      <View style={styles(theme).Viewa9cfacd9}>
        <Text style={styles(theme).Text97c78941}>{'Payment Method'}</Text>
        {/* Top Tabs */}
        <View style={styles(theme).Viewd73c4ee2}>
          {/* Tab1 */}
          <View style={styles(theme).Viewe274a841}>
            {/* Active */}
            <>
              {!(selectedTab === 'tab1') ? null : (
                <Touchable style={styles(theme).Touchabledf29e2e2}>
                  <Surface style={styles(theme).Surface03f115f8} elevation={3}>
                    <View style={styles(theme).Viewe72df978}>
                      <Icon
                        name={'FontAwesome/money'}
                        color={theme.colors.custom_rgb255_255_255}
                        size={28}
                      />
                      <Text style={styles(theme).Textc5d5f0f1}>{'Cash'}</Text>
                    </View>
                  </Surface>
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
                  style={styles(theme).Touchablea6a19460}
                >
                  <Surface style={styles(theme).Surface03f115f8} elevation={3}>
                    <View style={styles(theme).View8acf626d}>
                      <Icon
                        name={'FontAwesome/money'}
                        color={theme.colors.textPlaceholder}
                        size={28}
                      />
                      <Text style={styles(theme).Texta4735bb1}>{'Cash'}</Text>
                    </View>
                  </Surface>
                </Touchable>
              )}
            </>
          </View>
          {/* Tab2 */}
          <View style={styles(theme).Viewe274a841}>
            {/* Active */}
            <>
              {!(selectedTab === 'tab2') ? null : (
                <Touchable style={styles(theme).Touchabledf29e2e2}>
                  <Surface style={styles(theme).Surface03f115f8} elevation={3}>
                    <View style={styles(theme).Viewe72df978}>
                      <Icon
                        color={theme.colors.custom_rgb255_255_255}
                        size={28}
                        name={'FontAwesome/credit-card-alt'}
                      />
                      <Text style={styles(theme).Textc5d5f0f1}>
                        {'Credit Card'}
                      </Text>
                    </View>
                  </Surface>
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
                  style={styles(theme).Touchablea6a19460}
                >
                  <Surface style={styles(theme).Surface03f115f8} elevation={3}>
                    <View style={styles(theme).View8acf626d}>
                      <Icon
                        color={theme.colors.textPlaceholder}
                        size={28}
                        name={'FontAwesome/credit-card-alt'}
                      />
                      <Text style={styles(theme).Texta4735bb1}>
                        {'Credit Card'}
                      </Text>
                    </View>
                  </Surface>
                </Touchable>
              )}
            </>
          </View>
          {/* Tab3 */}
          <View style={styles(theme).Viewf9d07b1b}>
            {/* Active */}
            <>
              {!(selectedTab === 'tab3') ? null : (
                <Touchable style={styles(theme).Touchable8dc796a9}>
                  <Surface style={styles(theme).Surface719ed09e} elevation={3}>
                    <View style={styles(theme).Viewb4115c79}>
                      <Text style={styles(theme).Textc5d5f0f1}>{'○ ○ ○'}</Text>
                    </View>
                  </Surface>
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
                  style={styles(theme).Touchable1833feb9}
                >
                  <Surface style={styles(theme).Surface89cf4974} elevation={3}>
                    <View style={styles(theme).Viewdca67088}>
                      <Text style={styles(theme).Texta4735bb1}>{'○ ○ ○'}</Text>
                    </View>
                  </Surface>
                </Touchable>
              )}
            </>
          </View>
        </View>
      </View>
      {/* Button Solid */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('PaymentinfoScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={styles(theme).Buttonb0c82daf}
        title={'Confirm Booking'}
      />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonb0c82daf: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 21,
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'System',
      fontWeight: '700',
      height: 40,
      marginTop: 50,
      paddingLeft: 16,
      paddingRight: 16,
      textAlign: 'center',
      width: '60%',
    },
    Surface03f115f8: { borderRadius: 8, minHeight: 40, width: '100%' },
    Surface52a4c315: {
      alignItems: 'center',
      borderRadius: 24,
      height: 48,
      justifyContent: 'center',
      minHeight: 48,
      width: 48,
    },
    Surface719ed09e: { borderRadius: 8, height: '100%', width: '100%' },
    Surface89cf4974: {
      borderRadius: 8,
      height: '100%',
      minHeight: 40,
      width: '100%',
    },
    Text5cae45a9: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 10,
      textTransform: 'uppercase',
    },
    Text97c78941: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      opacity: 0.8,
    },
    Texta4735bb1: {
      color: theme.colors.textPlaceholder,
      fontFamily: 'Inter_500Medium',
      fontSize: 12,
      marginTop: 5,
      textTransform: 'capitalize',
    },
    Textc5d5f0f1: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_500Medium',
      fontSize: 12,
      marginTop: 5,
      textTransform: 'capitalize',
    },
    Textdc3e6c95: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Touchable1833feb9: { height: '100%', width: 100 },
    Touchable8dc796a9: { height: '100%', width: '100%' },
    Touchablea6a19460: { width: 100 },
    Touchabledf29e2e2: { width: '100%' },
    View25b99e76: {
      marginBottom: 16,
      marginTop: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
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
    View6dc90506: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
    },
    View8acf626d: {
      alignItems: 'center',
      borderRadius: 10,
      paddingBottom: 10,
      paddingTop: 10,
      width: '100%',
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
    Viewa9cfacd9: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    Viewb4115c79: {
      alignItems: 'center',
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 10,
      height: '100%',
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 10,
      width: '100%',
    },
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
    Viewd7121c0b: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 6,
      height: 12,
      width: 12,
    },
    Viewd73c4ee2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 8,
      paddingTop: 16,
      width: '100%',
    },
    Viewdca67088: {
      alignItems: 'center',
      borderRadius: 10,
      height: '100%',
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 10,
      width: '100%',
    },
    Viewdfe55b4f: {
      backgroundColor: theme.colors.tripItBlue,
      flex: 1,
      height: 2,
    },
    Viewe274a841: { alignItems: 'center', width: '30%' },
    Viewe72df978: {
      alignItems: 'center',
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 10,
      paddingBottom: 10,
      paddingTop: 10,
      width: '100%',
    },
    Viewe9defed4: { height: 48, justifyContent: 'center', width: 48 },
    Viewf9d07b1b: { alignItems: 'center', height: 65, width: '30%' },
    screen: { alignItems: 'center', paddingTop: 16 },
  });

export default withTheme(CheckoutScreen);
