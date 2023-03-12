import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      hasBottomSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      <ImageBackground
        style={[
          GlobalStyles.ImageBackgroundStyles(theme)['Image Background'],
          styles(theme).ImageBackground47231653,
        ]}
        resizeMode={'cover'}
        source={Images._08burjAa}
      >
        <Button
          onPress={() => {
            try {
              navigation.navigate('ListImageCardsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            GlobalStyles.ButtonStyles(theme)['Button'],
            styles(theme).Buttonb2d72c33,
          ]}
          title={"Let's go"}
        />
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonb2d72c33: {
      backgroundColor: 'rgb(113, 236, 240)',
      borderColor: 'rgb(121, 113, 113)',
      borderRadius: 50,
      color: 'rgb(65, 64, 64)',
      fontFamily: 'System',
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 50,
      marginLeft: '37%',
      marginTop: 450,
      textTransform: 'uppercase',
      width: 120,
    },
    ImageBackground47231653: { alignContent: 'center', marginTop: 0 },
    screen: {
      borderColor: '"rgba(0, 0, 0, 0)"',
      justifyContent: 'space-between',
    },
  });

export default withTheme(HomeScreen);
