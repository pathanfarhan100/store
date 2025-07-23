import { StyleSheet } from "react-native";
import { colors } from "../../constant/colors";

export const styles = StyleSheet.create({
    productCard: {
      flex: 1,
      margin: 8,
      backgroundColor: colors.white,
      borderRadius: 15,
      overflow: 'hidden',
      padding: 15,
    },
    productImage: {
      width: '100%',
      height: 65,
      backgroundColor: colors.white,
      aspectRatio: 1,
      alignSelf: 'center',
    },
    productInfo: {
      marginTop: 16,
    },
    brandText: {
      fontSize: 16,
      color: colors.black,
      fontWeight: '500',
      marginBottom: 4,
      textTransform: 'capitalize',
    },
    productTitle: {
      fontSize: 13,
      fontWeight: '400',
      marginBottom: 6,
      lineHeight: 16,
      color: colors.black,
    },
    productPrice: {
      fontSize: 14,
      fontWeight: '500',
      color: colors.black,
      marginBottom: 6,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      fontSize: 12,
      color: colors.gray,
      letterSpacing: 1,
    },
    heartIcon: {
      // marginRight: 8,
      fontSize: 16,
      color: colors.black,
      // marginRight: 12,
      marginBottom: 4,
    },
    heartContainer: {
      flex: 1,
      alignItems: 'flex-end',
    },
  });