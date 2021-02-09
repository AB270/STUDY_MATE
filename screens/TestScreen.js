import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
FlatList,
} from 'react-native';
import {ListItem} from "react-native-elements"
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class TestScreen extends Component{
    constructor() {
        super();
        this.state = {
          userId: firebase.auth().currentUser.email,
          testQuestionsList: [],
        };
        this.requestRef = null;
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, i }) => {
        return (
            <ListItem bottomDivider> 
            <ListItem.Content>
                <ListItem.Title>{item.question}</ListItem.Title>
               
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        // this.props.navigation.navigate("QuestionDetails", {
                        // details: item,
                        // });
                        Alert.alert("Working")
                    }}
                    >
                    <Text style={{ color: "#ffff" }}>View</Text>
                </TouchableOpacity>

                


            </ListItem.Content>
            </ListItem>
        );
      };



    render(){
     return(
        <View style={styles.view}>
        <MyHeader title="Test Questions" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.testQuestionsList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>No Tests Available</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.testQuestionsList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
     );   
    }

    getTests (){
        var testQuestions = []
        db.collection("tests").onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                testQuestions = [...testQuestions,doc.data()] ;
            })
            this.setState({testQuestionsList :testQuestions })
            console.log(this.state.testQuestionsList)
        })
    }
    componentDidMount(){
        this.getTests();
    }
}

const styles = StyleSheet.create({
    subContainer: {
      flex: 1,
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: 100,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
    },
    view:{
      flex: 1,
      backgroundColor: "#fff"
    }
  });

//   <ListItem
//   key={i}
//   title={item.question}
//   titleStyle={{ color: "black", fontWeight: "bold" }}
//   rightElement={
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => {
//         this.props.navigation.navigate("QuestionDetails", {
//           details: item,
//         });
//       }}
//     >
//       <Text style={{ color: "#ffff" }}>View</Text>
//     </TouchableOpacity>
//   }
//   bottomDivider
// />