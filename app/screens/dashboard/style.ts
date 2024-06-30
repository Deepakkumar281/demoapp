import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tableContainer: {
      flex:1,
      paddingVertical: 16,
      paddingHorizontal: 8,
      maxWidth:"100%",
      position:"absolute",
      flexGrow:1,
      marginTop:46
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
    },
    columnHeader: {
      width: 75,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3CEOEA',
    },
    columnHeaderText: {
      fontWeight: 'bold',
      color:"#000000",
      fontSize:14
    },
    tableBody: {
      maxHeight: 400,  // Adjust this value to increase or decrease the maximum height
  },
    tableCell: {
      width: 75,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cellText: {
      textAlign: 'center',
      color:"#000000",
      fontSize:12
    },
  }); 
  export default styles;