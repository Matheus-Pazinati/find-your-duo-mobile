import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content: {
    width: 311,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.SHAPE,
    alignItems: 'center',
  },
  closeIcon: {
    color: THEME.COLORS.CAPTION_500,
    alignSelf: 'flex-end',
    margin: 16
  },
  label: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT,
    marginTop: 24,
    marginBottom: 8
  },
  discordButton: {
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32
  },
  discord: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT
  }
});