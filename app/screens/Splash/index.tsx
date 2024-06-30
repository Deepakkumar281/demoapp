import React, { useEffect, useState, } from 'react';
// lytics from 'appcenter-analytics';
import {
  View,
  ImageBackground,
  Image,
  Text
} from 'react-native';

import styles from './styles';

import images from '../../config/images';
import NavigationService from '../../navigation/NavigationService';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from '../../redux';
const Splash: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true)
  const navigation: any = useNavigation()
  const user = useSelector(state => state.userReducer)

  useEffect(() => {
    setTimeout(() => {
      if (user) {
        // Maybe another api call required to validate
        // NavigationService.navigate("MainApp")
        navigation.replace("Login")
      } else {
        navigation.replace("Login")
      }
    }, 1000)     
  }, []) 

  return (
    <View style={styles.container}>
    {/* <Text style={{ fontSize:25,color:'#79E5EA'}}>
      MeghaTravels
    </Text>*/}
   <Image
      style={{ height:80,justifyContent: 'center',width:'100%' }}
      source={images.s4} 

      />

  </View>
  );
};

export default Splash;

// import React, { useState, useRef } from 'react';
// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   FlatList,
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const COLORS = { primary: '#282534', white: '#fff' };

// interface SlideItem {
//   id: string;
//   image: number;
//   title: string;
//   subtitle: string;
// }

// const slides: SlideItem[] = [
//   {
//     id: '1',
//     image: require('../../assets/images/Assetimage.png'),
//     title: 'Invest with Confidence',
//     subtitle: 'Unlock your financial potential with our expert guidance.',
//   },
//   {
//     id: '2',
//     image: require('../../assets/images/Assetimage2.png'),
//     title: 'Grow Your Wealth',
//     subtitle: 'Maximize your investments and achieve financial freedom.',
//   },
//   {
//     id: '3',
//     image: require('../../assets/images/Assetimage3.png'),
//     title: 'Secure Your Future',
//     subtitle: 'Prepare for a worry-free retirement and secure your legacy.',
//   },
// ];

// interface SlideProps {
//   item: SlideItem;
// }

// const Slide: React.FC<SlideProps> = ({ item }) => {
//   return (
//     <View style={{ alignItems: 'center' }}>
//       <Image
//         source={item?.image}
//         style={{ height: '75%', width, resizeMode: 'contain' }}
//       />
//       <View>
//         <Text style={styles.title}>{item?.title}</Text>
//         <Text style={styles.subtitle}>{item?.subtitle}</Text>
//       </View>
//     </View>
//   );
// };

// const OnboardingScreen: React.FC<any> = ({ navigation }) => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const ref = useRef<FlatList<SlideItem>>(null);

//   const updateCurrentSlideIndex = (e: any) => {
//     const contentOffsetX = e.nativeEvent.contentOffset.x;
//     const currentIndex = Math.round(contentOffsetX / width);
//     setCurrentSlideIndex(currentIndex);
//   };

//   const goToNextSlide = () => {
//     const nextSlideIndex = currentSlideIndex + 1;
//     if (nextSlideIndex !== slides.length) {
//       const offset = nextSlideIndex * width;
//       ref.current?.scrollToOffset({ offset });
//       setCurrentSlideIndex(currentSlideIndex + 1);
//     }
//   };

//   const skip = () => {
//     const lastSlideIndex = slides.length - 1;
//     const offset = lastSlideIndex * width;
//     ref.current?.scrollToOffset({ offset });
//     setCurrentSlideIndex(lastSlideIndex);
//   };

//   const Footer: React.FC = () => {
//     return (
//       <View
//         style={{
//           height: height * 0.25,
//           justifyContent: 'space-between',
//           paddingHorizontal: 20,
//         }}
//       >
//         {/* Indicator container */}
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//             marginTop: 20,
//           }}
//         >
//           {/* Render indicator */}
//           {slides.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.indicator,
//                 currentSlideIndex === index && {
//                   backgroundColor: COLORS.white,
//                   width: 25,
//                 },
//               ]}
//             />
//           ))}
//         </View>

//         {/* Render buttons */}
//         <View style={{ marginBottom: 20 }}>
//           {currentSlideIndex === slides.length - 1 ? (
//             <View style={{ height: 50 }}>
//               <TouchableOpacity
//                 style={styles.btn}
//                 onPress={() => navigation.replace('Login')}
//               >
//                 <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
//                   GET STARTED
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           ) : (
//             <View style={{ flexDirection: 'row' }}>
//               <TouchableOpacity
//                 activeOpacity={0.8}
//                 style={[
//                   styles.btn,
//                   {
//                     borderColor: COLORS.white,
//                     borderWidth: 1,
//                     backgroundColor: 'transparent',
//                   },
//                 ]}
//                 onPress={skip}
//               >
//                 <Text
//                   style={{
//                     fontWeight: 'bold',
//                     fontSize: 15,
//                     color: COLORS.white,
//                   }}
//                 >
//                   SKIP
//                 </Text>
//               </TouchableOpacity>
//               <View style={{ width: 15 }} />
//               <TouchableOpacity
//                 activeOpacity={0.8}
//                 onPress={goToNextSlide}
//                 style={styles.btn}
//               >
//                 <Text
//                   style={{
//                     fontWeight: 'bold',
//                     fontSize: 15,
//                   }}
//                 >
//                   NEXT
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
//       <StatusBar backgroundColor={COLORS.primary} />
//       <FlatList
//         ref={ref}
//         onMomentumScrollEnd={updateCurrentSlideIndex}
//         contentContainerStyle={{ height: height * 0.75 }}
//         showsHorizontalScrollIndicator={false}
//         horizontal
//         data={slides}
//         pagingEnabled
//         renderItem={({ item }) => <Slide item={item} />}
//       />
//       <Footer />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   subtitle: {
//     color: COLORS.white,
//     fontSize: 13,
//     marginTop: 10,
//     maxWidth: '70%',
//     textAlign: 'center',
//     lineHeight: 23,
//   },
//   title: {
//     color: COLORS.white,
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   image: {
//     height: '100%',
//     width: '100%',
//     resizeMode: 'contain',
//   },
//   indicator: {
//     height: 2.5,
//     width: 10,
//     backgroundColor: 'grey',
//     marginHorizontal: 3,
//     borderRadius: 2,
//   },
//   btn: {
//     flex: 1,
//     height: 50,
//     borderRadius: 15,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default OnboardingScreen;
