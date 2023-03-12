import React from 'react';
import * as Utils from '../utils';
import {
  Button,
  Icon,
  ScreenContainer,
  StarRating,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const FeedbackScreen = props => {
  const { theme } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
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
          <Touchable>
            <Surface style={styles(theme).Surface52a4c315}>
              <Icon name={'Entypo/chevron-left'} size={24} />
            </Surface>
          </Touchable>
        </View>

        <Text style={styles(theme).Textdc3e6c95}>{'Share your feedback'}</Text>

        <View style={styles(theme).Viewe9defed4}></View>
      </View>
      {/* Container */}
      <View style={styles(theme).Viewffbbd65c}>
        {/* Name */}
        <Text style={styles(theme).Text027160f2}>
          {'What is your opinion of TravelGo?'}
        </Text>
        <StarRating
          onPress={newStarRatingValue => {
            try {
              setStarRatingValue2(newStarRatingValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).StarRatingf8304bf6}
          rating={starRatingValue2}
          maxStars={5}
          inactiveColor={theme.colors.medium}
          activeColor={theme.colors.tripItBlue}
          isEditable={true}
          starSize={35}
        />
        {/* Feedback View */}
        <View style={styles(theme).Viewaa195473}>
          <TextInput
            onChangeText={newTextAreaValue => {
              try {
                setTextAreaValue(newTextAreaValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput7ac8954d}
            placeholder={'Please leave your feedback here...'}
            value={textAreaValue}
            multiline={true}
            numberOfLines={4}
            placeholderTextColor={theme.colors.textPlaceholder}
          />
        </View>

        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await Utils.openImagePicker({});
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={styles(theme).Touchable435e420f}
        >
          <View style={styles(theme).Viewc7a3f7cb}>
            <Icon
              size={24}
              name={'AntDesign/picture'}
              color={theme.colors.textPlaceholder}
            />
            <Text style={styles(theme).Textc2f2364c}>
              {'Select your image'}
            </Text>
          </View>
        </Touchable>
        {/* Button Solid */}
        <Button style={styles(theme).Button6a6e031f} title={'Send Feedback'} />
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button6a6e031f: {
      backgroundColor: theme.colors.tripItBlue,
      borderRadius: 21,
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'System',
      fontWeight: '700',
      height: 42,
      marginTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      textAlign: 'center',
    },
    StarRatingf8304bf6: { marginTop: 12 },
    Surface52a4c315: {
      alignItems: 'center',
      borderRadius: 24,
      height: 48,
      justifyContent: 'center',
      minHeight: 48,
      width: 48,
    },
    Text027160f2: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    TextInput7ac8954d: {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      fontFamily: 'Inter_400Regular',
      height: 200,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Textc2f2364c: { color: theme.colors.textPlaceholder, paddingLeft: 16 },
    Textdc3e6c95: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Touchable435e420f: { marginTop: 30, width: '70%' },
    Viewaa195473: {
      backgroundColor: theme.colors.viewBG,
      borderRadius: 12,
      marginTop: 25,
      width: '90%',
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
    Viewc7a3f7cb: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors.textPlaceholder,
      borderLeftWidth: 1,
      borderRadius: 15,
      borderRightWidth: 1,
      borderStyle: 'dashed',
      borderTopWidth: 1,
      flexDirection: 'row',
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Viewe9defed4: { height: 48, justifyContent: 'center', width: 48 },
    Viewffbbd65c: {
      alignItems: 'center',
      borderRadius: 21,
      marginTop: 16,
      overflow: 'hidden',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    screen: { paddingTop: 16 },
  });

export default withTheme(FeedbackScreen);
