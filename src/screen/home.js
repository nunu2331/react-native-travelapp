import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons'

const Dashboard = (props) => {
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

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bannerWrapper}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image
                            style={{ borderRadius: 15, height: 220, width: 320, marginHorizontal: 20, resizeMode: 'contain' }}
                            source={require('../assets/banner.jpg')} />
                        <Image
                            style={{ borderRadius: 15, height: 220, width: 320, marginHorizontal: 20, resizeMode: 'contain' }}
                            source={require('../assets/banner.jpg')} />
                    </ScrollView>
                </View>

                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.menuCard}>
                            <View style={styles.imageWrapper}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('../assets/flight.png')} />
                            </View>
                            <Text style={styles.menuText}>Flights</Text>
                        </View>
                        <View style={styles.menuCard}>
                            <View style={styles.imageWrapper}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('../assets/hotel.png')} />
                            </View>
                            <Text style={styles.menuText}>Hotels</Text>
                        </View>
                        <View style={styles.menuCard}>
                            <View style={styles.imageWrapper}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('../assets/destination.png')} />
                            </View>
                            <Text style={styles.menuText}>Destinations</Text>
                        </View>
                        <View style={styles.menuCard}>
                            <View style={styles.imageWrapper}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('../assets/culinary.png')} />
                            </View>
                            <Text style={styles.menuText}>Culinary</Text>
                        </View>
                        <View style={styles.menuCard}>
                            <View style={styles.imageWrapper}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('../assets/event.png')} />
                            </View>
                            <Text style={styles.menuText}>Event</Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.popularContainer}>
                    <View style={styles.popularHeader}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Popular Flights</Text>
                        <Text style={{ fontWeight: 'bold', color: 'steelblue' }}>See all</Text>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row' }}>
                        <View style={styles.popularCard}>
                            <Image
                                style={styles.popularImg}
                                source={require('../assets/newyork.jpg')} />
                            <IconIon
                                style={{
                                    position: 'absolute', top: 20, right: 20, shadowColor: 'black',
                                }}
                                color='#F59C03'
                                size={20}
                                name='heart' />
                            <Text style={styles.textCard}>New York City</Text>
                            <View style={styles.reviewWrapper}>
                                <View style={{ flexDirection: 'row' }}>
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                </View>
                                <Text style={{ fontSize: 9, color: '#9CA6B6' }}>(1500 reviews)</Text>
                            </View>
                        </View>
                        <View style={styles.popularCard}>
                            <Image
                                style={styles.popularImg}
                                source={require('../assets/greenland.jpg')} />
                            <IconIon
                                style={{
                                    position: 'absolute', top: 20, right: 20, shadowColor: 'black',
                                }}
                                color='#f4f4f4'
                                size={20}
                                name='heart' />
                            <Text style={styles.textCard}>Greenland</Text>
                            <View style={styles.reviewWrapper}>
                                <View style={{ flexDirection: 'row' }}>
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                </View>
                                <Text style={{ fontSize: 9, color: '#9CA6B6' }}>(1500 reviews)</Text>
                            </View>
                        </View>
                        <View style={styles.popularCard}>
                            <Image
                                style={styles.popularImg}
                                source={require('../assets/hawaii.jpg')} />
                            <IconIon
                                style={{
                                    position: 'absolute', top: 20, right: 20, shadowColor: 'black',
                                }}
                                color='#f4f4f4'
                                size={20}
                                name='heart' />
                            <Text style={styles.textCard}>Hawaii</Text>
                            <View style={styles.reviewWrapper}>
                                <View style={{ flexDirection: 'row' }}>
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                </View>
                                <Text style={{ fontSize: 9, color: '#9CA6B6' }}>(1500 reviews)</Text>
                            </View>
                        </View>
                    </ScrollView>
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
        marginTop: 5,
        marginHorizontal: 15,
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
    bannerWrapper: {
        // paddingHorizontal: 10,
        flexDirection: 'row',
        // borderWidth: 1
    },
    menuCard: {
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 5,
        // borderWidth: 1,
        marginLeft: 20,
        // width: 70,
        // height: 70,
        marginVertical: 15
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        // borderWidth: 1,
        backgroundColor: '#D7E8F9',
        borderRadius: 50
    },
    imageStyle: {
        width: 30,
        height: 30,
        tintColor: '#177FE2',
    },
    menuText: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 11,
        textAlign: 'center',
        marginTop: 10
    },
    popularContainer: {
        marginTop: 10,
        borderTopWidth: 2,
        borderColor: '#EFF4F9'
    },
    popularHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 10,
        marginHorizontal: 15
    },
    popularCard: {
        height: 220,
        width: 155,
        backgroundColor: 'white',
        justifyContent: 'center',
        // alignItems: 'flex-end',
        marginLeft: 20,
        borderRadius: 15,
        marginVertical: 15,
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
        width: 140,
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 10
    },
    reviewWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 3

    },
    textCard: {
        marginLeft: 15,
        fontWeight: 'bold'
    }
})

export default Dashboard;