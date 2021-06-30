import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground ,TouchableWithoutFeedback, Alert} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const showAlert = () =>
  Alert.alert(
    "Share",
    "Want to share your destination?",
    [
      {
        text: "Yes",
        onPress: () => Alert.alert("Successful sharing"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

const Detail = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imageWrapper}>
                    <ImageBackground
                        imageStyle={{ borderRadius: 50 }}
                        style={styles.popularImg}
                        source={require('../assets/raja.jpg')}>
                    </ImageBackground>
                    <View style={styles.name}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Raja Ampat, West Papua</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
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
                            <Text style={{ marginLeft: 5 }}>4.9</Text>
                        </View>
                    </View>
                    <View style={styles.aboutcontainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>About</Text>
                        <Text>You will get a complete travel package on recommended beaches. Packages in the form of airplane tickets, hotels, tranportation, etc.</Text>
                    </View>
                    <View style={styles.galleryContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Gallery</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 15, justifyContent: 'space-around' }}>
                        <Image style={styles.imgGallery} source={require('../assets/raja1.jpg')} />
                        <Image style={styles.imgGallery} source={require('../assets/raja2.jpg')} />
                        <Image style={styles.imgGallery} source={require('../assets/raja3.jpg')} />
                        <ImageBackground
                            imageStyle={{ borderRadius: 15 }}
                            style={styles.imgGallery}
                            source={require('../assets/raja4.jpg')}>
                            <View style={{
                                borderRadius: 15,
                                backgroundColor: "#00000080",
                                height: 75,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>27+</Text>
                            </View>

                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', width: '100%'}}>
                <TouchableWithoutFeedback 
                onPress={()=>navigation.goBack()}>
                <Image style={styles.imageStyle} source={require('../assets/left.png')} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback 
                onPress={showAlert}>
                <Image style={styles.imageStyle} source={require('../assets/share.png')} />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.payment}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 26 }}>$340</Text>
                    <Text>/package</Text>
                </View>
                <View style={styles.Book}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Book now</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#EFF3F8'
    },
    imageWrapper: {
        justifyContent: 'center'
    },
    popularImg: {
        height: 320,
        width: 320,
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 10,
        marginTop: 20,
        justifyContent: 'space-between'
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
    },
    imageStyle: {
        width: 30,
        height: 30,
        tintColor: 'white',
        marginHorizontal: 45,
        marginTop: 45,
    },
    imageStyle1: {
        width: 30,
        height: 30,
        tintColor: 'white',
        marginHorizontal: 25,
        marginTop: 25,
        left: 80,
    },
    name: {
        paddingHorizontal: 20,
        marginTop: 15,
    },
    aboutcontainer: {

        paddingHorizontal: 20,
        marginTop: 15,
    },
    galleryContainer: {

        paddingHorizontal: 20,
        marginTop: 15,
    },
    imgGallery: {
        width: 75,
        height: 75,
        borderRadius: 15,
        // marginLeft: 15

    },
    payment: {
        height: 70,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    Book: {
        marginLeft: 40,
        backgroundColor: '#116EE0',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 160
    }
})

export default Detail;
