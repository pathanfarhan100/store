import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Modal,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { Product } from '../../types';
// import { useCart } from '../../context/CartContext';
import { fetchProducts, searchProducts } from '../../api/apiService';
import { colors } from '../../constant/colors';
import CustomIcon from '../../components/CustomIcon';
import { ICONS } from '../../constant/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProductCard from '../../components/ProductCard';
import { styles } from './styles';

const ProductListingScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const insets = useSafeAreaInsets();
  const onEndReachedCalledDuringMomentum = useRef(false);
  const hasLoadedInitially = useRef(false);

  const categories = [
    'All',
    "Men's clothing",
    "Women's clothing",
    'Jewelery',
    'Electronics',
  ];

  const loadProducts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const newProducts = await fetchProducts(10, offset);
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prev => {
          const newUnique = newProducts?.filter(
            p => !prev.some(existing => existing.id === p.id),
          );
          return [...prev, ...newUnique];
        });
        setOffset(prev => prev + 10);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }, [loading, offset, hasMore]);

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) {
      setFilteredProducts([]);
      return;
    }
    setLoading(true);
    try {
      const results = await searchProducts(searchQuery.trim());
      setFilteredProducts(results);
    } catch (err) {
      console.error('Error searching products:', err);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  const applyFilters = useCallback(() => {
    let result = [...products];
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    result = result.filter(
      product =>
        product.price >= priceRange[0] && product.price <= priceRange[1],
    );
    if (minRating > 0) {
      result = result.filter(product => product.rating.rate >= minRating);
    }
    setFilteredProducts(result);
    setShowFilters(false);
  }, [products, selectedCategory, priceRange, minRating]);

  const resetFilters = useCallback(() => {
    setPriceRange([0, 1000]);
    setMinRating(0);
    setSelectedCategory('All');
    setFilteredProducts([]);
    setShowFilters(false);
  }, []);

  useEffect(() => {
    if (!hasLoadedInitially.current) {
      loadProducts();
      hasLoadedInitially.current = true;
    }
  }, [loadProducts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        handleSearch();
      } else {
        setFilteredProducts([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, handleSearch]);

  const displayProducts = useMemo(() => {
    if (searchQuery.trim() || showFilters) return filteredProducts;
    return products;
  }, [searchQuery, showFilters, filteredProducts, products]);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => <ProductCard product={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: Product) => `${item.id}-${item.title}`,
    [],
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.flexRow}>
        <CustomIcon iconName={ICONS.MENU} style={styles.menuIcon} />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search product"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <View style={styles.iconContainer}>
            <CustomIcon iconName={ICONS.SEARCH} style={styles.icon} />
          </View>
        </View>
      </View>

      <View style={[styles.flex, styles.marginHorizontal]}>
        <View style={styles.filterAndProductTextContainer}>
          <Text style={styles.categoryText}>{selectedCategory}</Text>
          <Text style={styles.resultsText}>
            {displayProducts.length} products found
          </Text>
        </View>
        <View style={styles.doubleIconsContainer}>
          <CustomIcon iconName={ICONS.PYRAMID} style={styles.pyramidIcon} />
          <TouchableOpacity onPress={() => setShowFilters(true)}>
            <CustomIcon iconName={ICONS.FILTER} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={displayProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        onEndReached={() => {
          if (
            !onEndReachedCalledDuringMomentum.current &&
            !searchQuery &&
            hasMore &&
            !showFilters
          ) {
            loadProducts();
            onEndReachedCalledDuringMomentum.current = true;
          }
        }}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum.current = false;
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color={colors.black} />
          ) : null
        }
      />

      <Modal
        visible={showFilters}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setShowFilters(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.filterTitle}>Filter Products</Text>
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Category</Text>
            <View style={styles.categoryContainer}>
              {categories.map(category => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category &&
                      styles.categoryButtonSelected,
                  ]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text
                    style={[
                      styles.categoryButtonText,
                      selectedCategory === category &&
                        styles.categoryButtonSelectedText,
                    ]}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterButtons}>
            <TouchableOpacity
              style={[styles.actionButton, styles.applyButton]}
              onPress={resetFilters}
            >
              <Text style={styles.actionButtonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.applyButton]}
              onPress={applyFilters}
            >
              <Text style={styles.actionButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductListingScreen;
