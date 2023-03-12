import { StyleSheet } from 'react-native';

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { height: '100%', width: '100%' } });

export const TextStyles = theme =>
  StyleSheet.create({ Text: { color: theme.colors.strong } });
