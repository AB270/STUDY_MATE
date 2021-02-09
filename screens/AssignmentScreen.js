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

export default class AssignmentScreen extends Component{
    constructor() {
        super();
        this.state = {
          userId: firebase.auth().currentUser.email,
          AssignmentList: [],
        };
        this.requestRef = null;
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, i }) => {
        return (
            <ListItem bottomDivider> 
            <ListItem.Content>
                <ListItem.Title>{item.assignment}</ListItem.Title>
               
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
        <MyHeader title="Assignments" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.AssignmentList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>No Assignments Pending!!</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.AssignmentList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
     );   
    }

    getAssignments (){
        var Assignments = []
        db.collection("assignments").onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                Assignments = [...Assignments,doc.data()] ;
            })
            this.setState({AssignmentList :Assignments })
            console.log(this.state.AssignmentList)
        })
    }
    componentDidMount(){
        this.getAssignments();
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