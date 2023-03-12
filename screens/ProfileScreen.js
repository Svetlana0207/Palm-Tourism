import React from 'react';
import Images from '../config/Images';
import {
  CircleImage,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = props => {
  const { theme } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Profile Header */}
      <View style={styles(theme).View52411b21}>
        <ImageBackground
          style={styles(theme).ImageBackground31c7386f}
          resizeMode={'cover'}
          source={{ uri: 'https://picsum.photos/200/300' }}
        >
          <Surface style={styles(theme).Surface20b339a5} elevation={3}>
            <CircleImage source={Images.Avatar} size={100} />
          </Surface>

          <Text style={styles(theme).Textd2aeb598}>{'Arvind Limba'}</Text>

          <View style={styles(theme).View550d1a35}>
            <Icon
              name={'Feather/map-pin'}
              size={15}
              color={theme.colors.custom_rgb255_255_255}
            />
            <Text style={styles(theme).Textdf603a07}>{'Noida, India'}</Text>
            <Icon
              name={'Entypo/chevron-small-down'}
              size={24}
              color={theme.colors.custom_rgb255_255_255}
            />
          </View>
        </ImageBackground>
        {/* Logout */}
        <View style={styles(theme).Viewe7b09d02}>
          <Touchable>
            <View style={styles(theme).View53f79c36}>
              <Icon
                style={styles(theme).Icon6cafd915}
                size={30}
                color={theme.colors.custom_rgb255_255_255}
                name={'MaterialCommunityIcons/logout'}
              />
            </View>
          </Touchable>
        </View>
      </View>
      {/* Top options */}
      <Surface style={styles(theme).Surface53954d32}>
        <Touchable>
          <View style={styles(theme).Viewb080c657}>
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                size={24}
                name={'Entypo/users'}
                color={theme.colors.textPlaceholder}
              />
              <Text style={styles(theme).Text7fcb9d10}>
                {'Profile & address'}
              </Text>
            </View>
            <Icon
              size={24}
              name={'Entypo/chevron-right'}
              color={theme.colors.textPlaceholder}
            />
          </View>
        </Touchable>

        <Touchable>
          <View style={styles(theme).Viewb080c657}>
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                size={24}
                color={theme.colors.textPlaceholder}
                name={'Ionicons/ios-wallet-sharp'}
              />
              <Text style={styles(theme).Text7fcb9d10}>{'Payment method'}</Text>
            </View>
            <Icon
              size={24}
              name={'Entypo/chevron-right'}
              color={theme.colors.textPlaceholder}
            />
          </View>
        </Touchable>
      </Surface>
      {/* Bottom option */}
      <Surface style={styles(theme).Surface56a27dbc}>
        <Touchable>
          <View style={styles(theme).Viewb080c657}>
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                size={24}
                color={theme.colors.textPlaceholder}
                name={'MaterialCommunityIcons/ticket-account'}
              />
              <Text style={styles(theme).Textfe623813}>{'My tickets'}</Text>
            </View>
            <Icon
              size={24}
              name={'Entypo/chevron-right'}
              color={theme.colors.textPlaceholder}
            />
          </View>
        </Touchable>

        <Touchable>
          <View style={styles(theme).Viewb080c657}>
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                size={24}
                color={theme.colors.textPlaceholder}
                name={'Ionicons/ios-notifications'}
              />
              <Text style={styles(theme).Textfe623813}>{'Notifications'}</Text>
            </View>
            <Icon
              size={24}
              name={'Entypo/chevron-right'}
              color={theme.colors.textPlaceholder}
            />
          </View>
        </Touchable>

        <Touchable>
          <View style={styles(theme).Viewb080c657}>
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                size={24}
                color={theme.colors.textPlaceholder}
                name={'Entypo/key'}
              />
              <Text style={styles(theme).Textfe623813}>{'Passwords'}</Text>
            </View>
            <Icon
              size={24}
              name={'Entypo/chevron-right'}
              color={theme.colors.textPlaceholder}
            />
          </View>
        </Touchable>

        <Touchable>
          <View style={styles(theme).Viewb080c657}>
            <View style={styles(theme).Viewce4accf0}>
              <Icon
                size={24}
                color={theme.colors.textPlaceholder}
                name={'Ionicons/ios-settings-sharp'}
              />
              <Text style={styles(theme).Textfe623813}>{'Setting'}</Text>
            </View>
            <Icon
              size={24}
              name={'Entypo/chevron-right'}
              color={theme.colors.textPlaceholder}
            />
          </View>
        </Touchable>
      </Surface>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Icon6cafd915: { marginTop: 14 },
    ImageBackground31c7386f: {
      alignItems: 'center',
      height: 300,
      justifyContent: 'space-evenly',
      paddingBottom: 55,
      paddingTop: 55,
      width: '100%',
    },
    Surface20b339a5: {
      borderRadius: 50,
      justifyContent: 'center',
      marginLeft: 12,
      minHeight: 40,
      overflow: 'hidden',
    },
    Surface53954d32: {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 10,
      borderRightWidth: 1,
      borderTopWidth: 1,
      justifyContent: 'center',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
      minHeight: 40,
    },
    Surface56a27dbc: {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 10,
      borderRightWidth: 1,
      borderTopWidth: 1,
      justifyContent: 'center',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 25,
      minHeight: 40,
    },
    Text7fcb9d10: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
      paddingLeft: 16,
    },
    Textd2aeb598: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_700Bold',
      fontSize: 21,
      marginTop: 8,
    },
    Textdf603a07: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'Inter_700Bold',
      fontSize: 15,
      paddingLeft: 8,
      paddingRight: 5,
      textTransform: 'capitalize',
    },
    Textfe623813: {
      color: theme.colors.medium,
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
      paddingLeft: 16,
    },
    View52411b21: { alignItems: 'center', paddingBottom: 8 },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View550d1a35: { alignItems: 'center', flexDirection: 'row', marginTop: 3 },
    Viewb080c657: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 12,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 12,
    },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewe7b09d02: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      position: 'absolute',
      right: 16,
      top: 16,
    },
  });

export default withTheme(ProfileScreen);
