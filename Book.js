import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
// import resources from '../books.json';

export default class Book extends React.Component {
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.book}>
                    {/* <Image source={Illustration[resources.image]} style = {styles.imageView}/> */}
                    {/* <Text style={styles.title}>{this.props.title}</Text> */}
                    <Image style={styles.image} source={{ uri: this.props.image }}/>
                    
                    <View style={styles.info}>
                        <Text style = {styles.title}>{this.props.title}</Text>
                        <Text style = {styles.author}>{this.props.author}</Text>
                        <Text style = {styles.year}>{this.props.year}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    book: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginTop: 20,
        margin: 0,
        width: "100%",
        height: "100px",
        // borderRadius: 10,
        textAlign: "center",
        justifyContent: "center"
      },
    content: {
        display: "flex",
        width: "80%",
        marginLeft: "10%"
    },
    title: {
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 5
    },
    author: {
        fontSize: 20,
        fontFamily: 'Avenir',
        textAlign: "center"
    },
    year: {
        textAlign: "center"
    },
    image: {
        width: '100%',
        height: 150,
    },
    info: {
        margin: 20
    }
});
