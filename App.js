import React from 'react';
import { View, Text, Image, Button, TouchableHighlight, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// Force Landscape (android)
import LandscapeView from 'react-native-landscape-view';

// helper for grids
import { Col, Row, Grid } from "react-native-easy-grid";

const numColumns = 2
var cursorNavigation = {}
const inputData = {
    feeling: {
        question: "Après votre visite, comment vous sentez vous?",
        high: {
            image: require("./assets/answers/F3.gif"),
        },
        medium: {
            image: require("./assets/answers/F2.gif"),
        },
        low: {
            image: require("./assets/answers/F1.gif"),
        }
    },
    staff: {
        question: "Dites-nous comment vous avez été accueilli!",
        high: {
            image: require("./assets/answers/S3.gif"),
        },
        medium: {
            image: require("./assets/answers/S2.gif"),
        },
        low: {
            image: require("./assets/answers/S1.gif"),
        }
    },
    environment: {    
        question: "Quelle est l'ambiance dans le musée?",
        high: {
            image: require("./assets/answers/E3.jpg"),
        },
        medium: {
            image: require("./assets/answers/E2.jpg"),
        },
        low: {
            image: require("./assets/answers/E1.jpg"),
        }
    },
    result: {
        F3_S3_E3: require("./assets/result/F3_S3_E3.png"),
        F2_S3_E3: require("./assets/result/F2_S3_E3.png"),
        F1_S3_E3: require("./assets/result/F1_S3_E3.png"),
        F3_S2_E3: require("./assets/result/F3_S2_E3.png"),
        F2_S2_E3: require("./assets/result/F2_S2_E3.png"),
        F1_S2_E3: require("./assets/result/F1_S2_E3.png"),
        F3_S1_E3: require("./assets/result/F3_S1_E3.png"),
        F2_S1_E3: require("./assets/result/F2_S1_E3.png"),
        F1_S1_E3: require("./assets/result/F1_S1_E3.png"),
        F3_S3_E2: require("./assets/result/F3_S3_E2.png"),
        F2_S3_E2: require("./assets/result/F2_S3_E2.png"),
        F1_S3_E2: require("./assets/result/F1_S3_E2.png"),
        F3_S3_E1: require("./assets/result/F3_S3_E1.png"),
        F2_S3_E1: require("./assets/result/F2_S3_E1.png"),
        F1_S3_E1: require("./assets/result/F1_S3_E1.png"),
        F3_S2_E2: require("./assets/result/F3_S2_E2.png"),
        F2_S2_E2: require("./assets/result/F2_S2_E2.png"),
        F1_S2_E2: require("./assets/result/F1_S2_E2.png"),
        F3_S2_E1: require("./assets/result/F3_S2_E1.png"),
        F2_S2_E1: require("./assets/result/F2_S2_E1.png"),
        F1_S2_E1: require("./assets/result/F1_S2_E1.png"),
        F3_S1_E2: require("./assets/result/F3_S1_E2.png"),
        F2_S1_E2: require("./assets/result/F2_S1_E2.png"),
        F1_S1_E2: require("./assets/result/F1_S1_E2.png"),
        F3_S1_E1: require("./assets/result/F3_S1_E1.png"),
        F2_S1_E1: require("./assets/result/F2_S1_E1.png"),
        F1_S1_E1: require("./assets/result/F1_S1_E1.png"),
    },
    colors: {
        blue: "#2a769e",
        magenta: "#ff0078",
        yellow: "#ffff00",
    }    
}

const defaultPollState = {
    feeling: "D0",
    staff: "S0",
    environment: "E0"
}

var pollState = {
    feeling: "F0",
    staff: "S0",
    environment: "E0"
}

// Screens are a looping chained list.

class FeelingScreen extends React.Component {
  render() {
    cursorNavigation = this.props.navigation
    pollState = defaultPollState
    return (
      <LandscapeView style={styles.gridContainer}>
        <Grid>
              <Row>
                <Col style={{backgroundColor: 'white'}}>
                    <View>
                        <Text style={styles.headResult}>
                            {inputData.feeling.question}
                        </Text>
                    </View>
                </Col>
                <Col style={{backgroundColor: inputData.colors.magenta, flex: 1}}>
                    <TouchableHighlight onPress= { () => {
                        pollState.feeling = "F3"
                        cursorNavigation.navigate('StaffScreen')
                    }} underlayColor="white">
                        <Image 
                            source={inputData.feeling.high.image} 
                            style={styles.answer}
                        />
                    </TouchableHighlight>
                </Col>
           </Row>
            <Row>
                <Col style={{backgroundColor: inputData.colors.blue}}>
                    <TouchableHighlight onPress= { () => {
                        pollState.feeling = "F2"
                        cursorNavigation.navigate('StaffScreen')
                    }} underlayColor="white">
                        <Image 
                            source={inputData.feeling.medium.image} 
                            style={styles.answer}
                        />
                    </TouchableHighlight>
                </Col>
                <Col style={{backgroundColor: inputData.colors.yellow}}>
                    <TouchableHighlight onPress= { () => {
                        pollState.feeling = "F1"
                        cursorNavigation.navigate('StaffScreen')
                    }} underlayColor="white">
                        <Image 
                            source={inputData.feeling.low.image} 
                            style={styles.answer}
                        />
                    </TouchableHighlight>
                </Col>
           </Row>
        </Grid>
      </LandscapeView>
    );
  }
}

class StaffScreen extends React.Component {
  render() {
    cursorNavigation = this.props.navigation
    return (
      <LandscapeView style={styles.gridContainer}>
        <Grid>
              <Row>
                <Col style={{backgroundColor: 'white'}}>
                    <View>
                        <Text style={styles.headResult}>
                            {inputData.staff.question}
                        </Text>
                    </View>
                </Col>
                <Col style={{backgroundColor: inputData.colors.magenta, flex: 1}}>
                    <TouchableHighlight onPress= { () => {
                        pollState.staff = "S3"
                        cursorNavigation.navigate('EnvironmentScreen')
                    }} underlayColor="white">
                        <Image 
                            source={inputData.staff.high.image} 
                            style={styles.answer}
                        />
                    </TouchableHighlight>
                </Col>
           </Row>
            <Row>
                <Col style={{backgroundColor: inputData.colors.blue}}>
                    <TouchableHighlight onPress= { () => {
                        pollState.staff = "S2"
                        cursorNavigation.navigate('EnvironmentScreen')
                    }} underlayColor="white">
                        <Image 
                            source={inputData.staff.medium.image} 
                            style={styles.answer}
                        />
                    </TouchableHighlight>

                </Col>
                <Col style={{backgroundColor: inputData.colors.yellow}}>
                    <TouchableHighlight onPress= { () => {
                        pollState.staff = "S1"
                        cursorNavigation.navigate('EnvironmentScreen')
                    }} underlayColor="white">
                        <Image 
                            source={inputData.staff.low.image} 
                            style={styles.answer}
                        />
                    </TouchableHighlight>
                </Col>
           </Row>
        </Grid>
      </LandscapeView>
    );
  }
}

class EnvironmentScreen extends React.Component {
  render() {
    cursorNavigation = this.props.navigation
    return (
      <LandscapeView style={styles.gridContainer}>
        <Grid>
              <Row>
                <Col style={styles.canvasText}>
                    <View>
                        <Text style={styles.headResult}>
                            {inputData.environment.question}
                        </Text>
                    </View>
                </Col>
                <Col style={styles.canvasMagenta}>
                    <TouchableHighlight onPress= { () => {
                        pollState.environment = "E3"
                        cursorNavigation.navigate('YouScreen')
                    }} underlayColor="white">
                        <Image 
                            source={inputData.environment.high.image} 
                            style={styles.answerJPG}
                        />
                    </TouchableHighlight>
                </Col>
           </Row>
            <Row>
                <Col style={styles.canvasBlue}>
                    <TouchableHighlight onPress= { () => {
                        pollState.environment = "E2"
                        cursorNavigation.navigate('YouScreen')
                    }} underlayColor="white">
                            <Image 
                                source={inputData.environment.medium.image} 
                                style={styles.answerJPG}
                            />
                    </TouchableHighlight>

                </Col>
                <Col style={styles.canvasYellow}>
                    <TouchableHighlight onPress= { () => {
                        pollState.environment = "E1"
                        cursorNavigation.navigate('YouScreen')
                    }} underlayColor="white">
                            <Image 
                                source={inputData.environment.low.image} 
                                style={styles.answerJPG}
                            />
                    </TouchableHighlight>
                </Col>
           </Row>
        </Grid>
      </LandscapeView>
    );
  }
}

class YouScreen extends React.Component {
  render() {
    var image = pollState.feeling +"_" + pollState.staff + "_" + pollState.environment
    
    // hot debug
    console.log(image)

    return (
        <LandscapeView style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.result}>
                <Text style={styles.headResult}>
                    Voici la nana qui vous correspond.
                </Text>

                <Image 
                    source={inputData.result[image]} 
                    style={{width: 400, height: 400}}
                />
                <Text style={styles.headResult}>
                    Récupérez votre carte postale personnalisée !
                </Text>
            </View>
              <Button
                title="Repartir du début"
                onPress={() =>
                    cursorNavigation.navigate('FeelingScreen', { name: 'Jane' })
                }
             />
      </LandscapeView>
    );
  }  
}

export default createStackNavigator({
    FeelingScreen: {
        screen: FeelingScreen,
    },
    StaffScreen: {
        screen: StaffScreen,
    },
    EnvironmentScreen: {
        screen: EnvironmentScreen,
    },
    YouScreen: {
        screen: YouScreen,
    }
}, {
    initialRouteName: 'FeelingScreen',
});

const styles = StyleSheet.create({
   canvasText: {
        backgroundColor: 'white', 
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   },
   canvasMagenta: {
     backgroundColor: inputData.colors.magenta
   },
  canvasYellow: {
     backgroundColor: inputData.colors.yellow
   },  
   canvasBlue: {
     backgroundColor: inputData.colors.blue
  }, 
  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white'
  },
  headResult: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
    fontSize: 30,
    textAlign: 'center'
  },
  answer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  answerJPG: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200    
  },
  gridContainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  }
});
