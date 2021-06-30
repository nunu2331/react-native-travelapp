import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import IconIon from 'react-native-vector-icons/Ionicons'
import SearchBox from '../components/SearchBox';
import { useNavigation } from '@react-navigation/native';
import Detail from './detail';



const Explore = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Text style={{ color: '#9CA6B6', fontWeight: 'bold', marginLeft: 0 }}>Hi, Ganteng!</Text>
          <TouchableOpacity style={styles.location}>
            <IconIon
              size={14}
              color='#177FE2'
              name='location-sharp' />
            <Text style={{ fontWeight: 'bold', marginLeft: 2 }}>Yogyakarta, Indonesia</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', }}>
          <Image
            style={{ height: 30, width: 30, marginRight: 10, tintColor: '#9CA6B6' }}
            source={require('../assets/bell.png')} />
          <Image
            style={{ height: 30, width: 30, borderRadius: 50 }}
            source={require('../assets/ganteng2.jpg')} />
        </View>
      </View>

      <ScrollView>
        <View style={styles.searchContainer}>
          <View style={styles.searchWraper}
            onPress={() => navigation.navigate('')}>
            <IconIon
              size={20}
              color='#68696A'
              name='search' />
            <TextInput
              style={{ color: 'black', paddingRight: 20 }}
              placeholderTextColor='#C9CCD0'
              placeholder={'Search destination...'}
            >
            </TextInput >
          </View>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.searchImage}
              source={require('../assets/settings.png')} />
          </View>
        </View>
        <View style={styles.kontenContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryWrapper}>
              <View style={styles.categoryName1}>
                <Text style={{ color: 'white', fontWeight: 'bold', }}>All</Text>
              </View>
              <View style={styles.categoryName}>
                <Text style={styles.textStyle}>Popular</Text>
              </View>
              <View style={styles.categoryName}>
                <Text style={styles.textStyle}>Favorite</Text>
              </View>
              <View style={styles.categoryName}>
                <Text style={styles.textStyle}>Nearest</Text>
              </View>
              <View style={styles.categoryName}>
                <Text style={styles.textStyle}>Romance</Text>
              </View>
              <View style={styles.categoryName}>
                <Text style={styles.textStyle}>Favorite</Text>
              </View>
            </View>
          </ScrollView>
          <TouchableWithoutFeedback

            onPress={() => navigation.navigate('Detail')}>
            <View style={styles.popularCard}>
              <Image
                style={styles.popularImg}
                source={require('../assets/raja.jpg')} />
              <IconIon
                style={{
                  position: 'absolute', top: 20, right: 20, shadowColor: 'black',
                }}
                color='#F59C03'
                size={20}
                name='heart' />
              <Text style={styles.textCard}>Raja Ampat, West Papua</Text>
              <View style={styles.reviewWrapper}>
                <View style={{ flexDirection: 'row' }}>
                  <IconIon
                    size={14}
                    color='#F59C03'
                    name='star' />
                  <IconIon
                    size={14}
                    color='#F59C03'
                    name='star' />
                  <IconIon
                    size={14}
                    color='#F59C03'
                    name='star' />
                  <IconIon
                    size={14}
                    color='#F59C03'
                    name='star' />
                  <IconIon
                    size={14}
                    color='#F59C03'
                    name='star' />
                </View>
                <Text style={{ fontSize: 10, color: '#9CA6B6' }}>(1500 reviews)</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.popularCard}>
            <Image
              style={styles.popularImg}
              source={require('../assets/kuta.jpg')} />
            <IconIon
              style={{
                position: 'absolute', top: 20, right: 20, shadowColor: 'black',
              }}
              color='#F4F4F4'
              size={20}
              name='heart' />
            <Text style={styles.textCard}>Kuta Beach, Bali</Text>
            <View style={styles.reviewWrapper}>
              <View style={{ flexDirection: 'row' }}>
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
              </View>
              <Text style={{ fontSize: 10, color: '#9CA6B6' }}>(1500 reviews)</Text>
            </View>
          </View>
          <View style={styles.popularCard}
            onPress={() => navigation.navigate('SearchScreen')}>
            <Image
              style={styles.popularImg}
              source={require('../assets/merapi.jpg')} />
            <IconIon
              style={{
                position: 'absolute', top: 20, right: 20, shadowColor: 'black',
              }}
              color='#F4F4F4'
              size={20}
              name='heart' />
            <Text style={styles.textCard}>Merapi Mountain, Yogyakarta</Text>
            <View style={styles.reviewWrapper}>
              <View style={{ flexDirection: 'row' }}>
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
                <IconIon
                  size={14}
                  color='#F59C03'
                  name='star' />
              </View>
              <Text style={{ fontSize: 10, color: '#9CA6B6' }}>(1500 reviews)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#EFF3F8'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingVertical: 10,
    // borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 5,
  },
  leftHeader: {
    // borderWidth: 1,
    alignItems: 'flex-start'

  },
  location: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightHeader: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'red'
  },
  imgHeader: {
    width: 25,
    height: 25
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  searchWraper: {
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'white',
    // // paddingLeft: 10,
    // padding: 15,
    // width: '80%',
    // // borderWidth: 1,
    // borderRadius: 25,

    // borderColor: 'white'
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 15
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    // borderWidth: 1,
    backgroundColor: '#116EE0',
    borderRadius: 50,
    marginLeft: 10
  },
  searchImage: {
    height: 22,
    width: 22,
    tintColor: 'white',
    transform: [{ rotate: '90deg' }]
  },
  kontenContainer: {
    // paddingLeft: 20
    marginTop: 10,
  },
  categoryWrapper: {
    flexDirection: 'row',
    paddingLeft: 15,
    marginBottom: 15,
  },
  categoryName: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    // borderWidth:  1,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryName1: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    // borderWidth:  1,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: '#116EE0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: '#C9CCD0',
    fontWeight: 'bold'
  },
  popularCard: {
    height: 230,
    width: 320,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: 'flex-end',
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 15,
    elevation: 0,
    //  padding:20,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  popularImg: {
    height: 160,
    width: 300,
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 10
  },
  reviewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 3

  },
  textCard: {
    marginLeft: 20,
    fontWeight: 'bold'
  }
})
export default Explore;