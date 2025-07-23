import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Product } from '../../types';
// import { useCart } from '../../context/CartContext';
import { fetchProductById } from '../../api/apiService';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomIcon from '../../components/CustomIcon';
import { ICONS } from '../../constant/constants';
import { styles } from './styles';
import { colors } from '../../constant/colors';
import { useNavigation } from '@react-navigation/native';

const ProductDetailScreen: React.FC<any> = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(false);
  // const { addToCart, cartItems } = useCart();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProductById(productId);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  if (loading || !product) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.black} />
      </View>
    );
  }

  // const cartItemCount = cartItems.reduce(
  //   (total, item) => total + item.quantity,
  //   0,
  // );
  const displayDescription = expanded
    ? product.description
    : `${product.description.substring(0, 100)}...`;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomIcon iconName={ICONS.BACK} style={styles.backIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomIcon iconName={ICONS.HEART} style={styles.heartIcon} />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        {/* <View style={styles.header}>
        <Text style={styles.timeText}>9:41</Text>
      </View> */}

        <View style={styles.productHeader}>
          <View style={styles.flexRow}>
            <Text style={styles.brandText}>{product.category}</Text>
            <Text style={styles.priceText}>${product.price.toFixed(2)}</Text>
          </View>
        </View>
        <Text style={styles.productTitle}>{product.title}</Text>
        <View style={styles.paperLine} />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{displayDescription}</Text>
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <Text style={styles.readMoreText}>
              {expanded ? 'Read less' : 'Read more'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paperLine} />

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingLabel}>Rating</Text>
          <Text style={styles.ratingText}>
            {'★'.repeat(Math.round(product.rating.rate))}
            <Text style={styles.ratingBlank}>
              {'★'.repeat(5 - Math.round(product.rating.rate))}
            </Text>
            <Text style={styles.ratingCount}> [{product.rating.count}]</Text>
          </Text>
        </View>

        {/* {cartItemCount > 0 && (
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
        </View>
      )} */}
      </ScrollView>
      <View style={{ paddingBottom: insets.bottom }}>
        <TouchableOpacity
          style={[styles.addToCartButton]}
          // onPress={() =>
          //   addToCart(product)}
        >
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
