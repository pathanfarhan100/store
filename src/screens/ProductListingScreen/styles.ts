import { StyleSheet } from "react-native";
import { colors } from "../../constant/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      alignItems: 'center',
    },
    timeText: {
      fontSize: 14,
      fontWeight: '600',
    },
    iconsContainer: {
      flexDirection: 'row',
      gap: 16,
    },
    iconText: {
      fontSize: 14,
    },
    // searchContainer: {
    //   flexDirection: 'row',
    //   marginBottom: 16,
    //   paddingHorizontal: 16,
    //   marginTop: 80,
    // },
    // searchInput: {
    //   flex: 1,
    //   height: 40,
    //   borderColor: colors.white,
    //   backgroundColor: colors.white,
    //   borderWidth: 1,
    //   borderRadius: 10,
    //   paddingHorizontal: 20,
    //   fontSize: 16,
    // },
    filterButton: {
      marginLeft: 12,
      justifyContent: 'center',
      paddingHorizontal: 16,
      backgroundColor: colors.black,
      borderRadius: 20,
    },
    filterButtonText: {
      color:colors.white,
      fontWeight: '600',
    },
    resultsText: {
      fontSize: 16,
      color: colors.black,
      marginBottom: 12,
      fontWeight: '400',
      lineHeight: 16,
      marginTop: 7,
      // paddingHorizontal: 16,
    },
    columnWrapper: {
      justifyContent: 'space-between',
      paddingHorizontal: 12,
    },
    modalContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.white,
    },
    filterTitle: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 24,
      textAlign: 'center',
    },
    filterSection: {
      marginBottom: 24,
    },
    filterLabel: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 12,
    },
    categoryContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 12,
    },
    categoryButton: {
      padding: 12,
      margin: 6,
      borderRadius: 20,
      backgroundColor: colors.gray,
    },
    categoryButtonSelected: {
      backgroundColor: colors.black,
    },
    categoryButtonText: {
      fontSize: 14,
      color: colors.black,
    },
    categoryButtonSelectedText: {
      color: colors.white,
    },
    filterButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
    },
    actionButton: {
      flex: 1,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginHorizontal: 8,
    },
    applyButton: {
        backgroundColor: colors.lightGray,
    },
    actionButtonText: {
      fontSize: 16,
      fontWeight: '600',
    },
    cartBadge: {
      position: 'absolute',
      right: 20,
      top: 16,
      backgroundColor: 'red',
      borderRadius: 12,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cartBadgeText: {
      color: colors.white,
      fontSize: 12,
      fontWeight: '700',
    },

    icon: {
      // marginRight: 8,
      fontSize: 22,
      color: colors.textGray,
    },
    pyramidIcon: {
      // marginRight: 8,
      fontSize: 22.33,
      color: colors.black,
      marginRight: 12,
    },
    filterIcon: {
      // marginRight: 8,
      fontSize: 22.33,
      color: colors.black,
    },
    menuIcon: {
      // flex: 1,
      fontSize: 20,
      color: colors.black,
    },
    searchContainer: {
      flex: 1,
      // marginHorizontal: 20,
      // marginTop: 40,
      marginLeft: 20,
      // marginBottom: 8,
    },
    searchInput: {
      height: 40,
      borderWidth: 1,
      borderColor: colors.white,
      backgroundColor: colors.white,
      borderRadius: 8,
      paddingLeft: 50,
      fontSize: 16,
      color: colors.textGray,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      position: 'absolute',
      left: 20,
      top: 8, // Position below the input
      // bottom: 5,
      // marginTop: 8, // Add some spacing
      alignItems: 'center',
      justifyContent: 'center',
    },
    flexRow: {
      // flex: 1,
      flexDirection: 'row',
      // backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      marginBottom: 20,
    },
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    doubleIconsContainer: {
      flexDirection: 'row',
    },
    categoryText: {
      fontSize: 30,
      fontWeight: '800',
    },
    filterAndProductTextContainer: {
      flex: 1,
    },
    marginHorizontal: {
      marginHorizontal: 20,
    },
  });
  