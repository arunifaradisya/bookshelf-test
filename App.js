import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import booksJSON from './books.json';
import Book from './Book';

export default class App extends React.Component {
  
  state = { books: [] }

  // text1 = new Animated.Value (0)

  componentDidMount() {
    this.setState({ books: booksJSON });

    // Animated.timing(this.text1, {
    //   toValue: 0,
    //   duration: 1000
    // }).start(() => {
    //   Animated.spring(this.text1, {
    //     toValue: 1,
    //     speed: 0,
    //     bounciness: 10
    //   }).start()
    // })
  }

Book =(item)=>{}

  render(){
    const bookIdentity = 'Book' ;

    return (
      <View contentContainerStyle={styles.container}>

        <View style={styles.header} i >
          <Text style={styles.logo}>BookShelf</Text>

          {/* <Animated.Text style={{...styles.h1,
            opacity: this.text1
          }}>Hello World1!</Animated.Text>

          <Animated.Text style={{...styles.h1,
            transform: [{
              rotate: this.text1.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'] // 0 : 150, 0.5 : 75, 1: 0
              }),
            }]
          }}>Hello World1!</Animated.Text> */}

        </View>
         
        <ScrollView style={styles.hero}>
          <Text style={styles.quote}>"A room without books is like a body without a soul." -Marcus Tullius Cicero.</Text>
          
              {
            this.state.books.map( (theBook, index) =>
              <Book key={index} image={theBook.image} title={theBook.title} author={theBook.author} year={theBook.year}></Book>
            )
          }

        </ScrollView>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#FFFFFF',
    margin: 10
  },
  header: {
    backgroundColor: '#AFB5A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    width: '100%'
  },
  logo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 60,
    paddingBottom: 20,
    fontFamily: 'Avenir',
  },
  quote: {
    color: 'black',
    margin:'5%',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 18
  }
});

