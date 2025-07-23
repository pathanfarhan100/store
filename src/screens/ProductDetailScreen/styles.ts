import { colors } from "../../constant/colors";
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: 16,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
    },
    header: {
      paddingVertical: 16,
      alignItems: 'center',
    },
    timeText: {
      fontSize: 14,
      fontWeight: '600',
      color:colors.black,
    },
    productHeader: {
      flex: 1,
      // marginBottom: 10,
      flexDirection: 'row',
    },
    brandText: {
      fontSize: 20,
      fontWeight: '800',
      color: colors.black,
      marginBottom: 5,
      textTransform: 'capitalize',
      flex: 1,
    },
    productTitle: {
      fontSize: 16,
      fontWeight: '800',
      color: colors.black,
      lineHeight: 28,
      flex: 1,
    },
    productImage: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
      marginBottom: 24,
    },
    descriptionContainer: {
      // marginBottom: 24,
    },
    descriptionText: {
      fontSize: 16,
      lineHeight: 20,
      color: colors.black,
      marginBottom: 8,
    },
    readMoreText: {
      fontSize: 14,
      color: colors.black,
      fontWeight: '700',
    },
    ratingContainer: {
      marginBottom: 24,
    },
    ratingLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.black,
      marginBottom: 8,
    },
    ratingText: {
      fontSize: 16,
      color: colors.yellow,
      letterSpacing: 2,
    },
    ratingBlank: {
      fontSize: 16,
      color: colors.background,
      letterSpacing: 2,
    },
    ratingCount: {
      fontSize: 14,
      color: colors.black,
      letterSpacing: 0,
      marginLeft: 10,
      fontWeight:'200'
    },

    priceText: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.black,
      // flex: 1,
    },
    addToCartButton: {
      backgroundColor: colors.black,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center',
      // marginBottom: 32,
      // alignSelf: 'flex-end',
    },

    addToCartText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    cartBadge: {
      position: 'absolute',
      top: 16,
      right: 16,
      backgroundColor: 'red',
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    // cartBadgeText: {
    //   color: colors.white,
    //   fontSize: 12,
    //   fontWeight: 'bold',
    // },
    paperLine: {
      backgroundColor: colors.lineGrey,
      height: 1,
      marginVertical: 10,
    },
    flexRow: { flexDirection: 'row', flex: 1 },
    backIcon: {
      fontSize: 40,
      color: colors.black,
    },
    heartIcon: {
      fontSize: 24,
      color: colors.black,
    },
    headerContainer: {
      justifyContent: 'space-between',
      flexDirection:'row',
      alignItems:'center',
      marginBottom:16
    },
  });