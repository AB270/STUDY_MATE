import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
//import { Table, Row, Rows } from 'react-native-table-component';


export default class TimetableScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
  //     DataTable: [
  //       ['1', '2', '3', '4', '5'],
  //       ['a', 'b', 'c', 'd', 'e'],
  //       ['1', '2', '3', '4', '5'],
  //       ['a', 'b', 'c', 'd', 'e'],
  //       ['1', '2', '3', '4', '5']
  //     ]
  //   }
  // }

  render() {
    const state = this.state;
    return (
      <View >
        
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     padding: 18,
//     paddingTop: 35,
//     backgroundColor: '#ffffff' 
//   },
//   HeadStyle: { 
//     height: 50,
//     alignContent: "center",
//     backgroundColor: '#ffe0f0'
//   },
//   TableText: { 
//     margin: 10
//   }
// });

// <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
//           <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
//           <Rows data={state.DataTable} textStyle={styles.TableText}/>
//         </Table>