import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../../types';
import { colors } from '../../constant/colors';
import CustomIcon from '../CustomIcon';
import { ICONS } from '../../constant/constants';
import { styles } from './styles';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() =>
        navigation.navigate('ProductDetail', { productId: product.id })
      }
    >
      <View style={styles.heartContainer}>
        <CustomIcon iconName={ICONS.HEART} style={styles.heartIcon} />
      </View>
      <Image
        source={{ uri: product?.image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productInfo}>
        <Text style={styles.brandText}>{product.category}</Text>
        <Text style={styles.productTitle} numberOfLines={2}>
          {product?.title}
        </Text>
        <Text style={styles.productPrice}>${product?.price?.toFixed(2)}</Text>
        {/* <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            {'★'.repeat(Math.round(product.rating.rate))}
            {'☆'.repeat(5 - Math.round(product.rating.rate))} (
            {product.rating.count})
          </Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
