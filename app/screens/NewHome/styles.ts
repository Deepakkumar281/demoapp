import { Platform, StyleSheet, Dimensions } from "react-native";
import OutlineTextinput from "../../components/OutlineTextinput";
import AppStyle from "../../config/styles";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: "white", 
},
  containers: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30,
},
loadingContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
header: {
  backgroundColor: '#f0f0f0',
  padding: 10,
},
headerText: {
  fontSize: 20,
  fontWeight: 'bold',
},
nav: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 10,
},
navText: {
  fontSize: 16,
  color: 'blue',
  textDecorationLine: 'underline',
},
main: {
  flex: 1,
  padding: 10,
},
hero: {
  marginTop:30,
},
heroText: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign:'center'
},
rocketName1: {
  fontSize: 16,

  color:"black"
},
hero1: {
  fontSize: 20,
 
  textAlign:'center'
},
features: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},
feature: {
  flex: 1,
  marginRight: 10,
},
featureText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
link: {
  color: 'blue',
  textDecorationLine: 'underline',
},
footer: {
  backgroundColor: '#f0f0f0',
  padding: 10,
  alignItems: 'center',
},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  touchableOpacityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    backgroundColor: '#e6e8f4',
    borderRadius: 10,
    padding: 20,
    width: '40%',
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  logoIcon: {
    fontSize: 70,
    color: '#5C9BFF',
},
  cardview : {
    textAlign: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  logoText: {
    fontSize: 13,
    marginTop: 5,
    color: 'black',
  },
  abbTitle: {
    margin: 15, 
    fontSize:22,
    textAlign:"center",    
},
  fab: {
    backgroundColor: AppStyle.color.PRIMARY_BUTTON_COLOR,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  card: {
    borderRadius: 20,
  margin: 15,
  padding: 5,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '25%',
  minHeight: 100,
  textAlignVertical: 'center',
  backgroundColor: '#fff',
  borderColor: 'lightgrey',
  borderWidth: 1,
  elevation: 4,
  
},
gradient: {
  flex: 1,
  padding: 16,
  justifyContent: 'center',
  alignItems: 'center',
},
card2: {
  borderRadius:20,
  margin: 10,
  padding:5,
  textAlign:'center',
  justifyContent:'center',
  alignItems:'center',
  minWidth:'80%',
  minHeight: 100,
  textAlignVertical: 'center',
  backgroundColor:'#fff',
  border: '1px solid #77aaff', 
  //shadowOffset: {width: -2, height: 4},  
  shadowColor: '#171717',  
  shadowOpacity: 0.2,  
  shadowRadius: 3,   
  elevation: 20, 
  opacity:.5,

},
vehtitle :{
  fontSize:18,
  marginLeft:15,
  fontWeight:'bold'
},
cimg : {
height:50,
margin:5,
justifyContent:'center',
width:50
},
cardTitle: {
  textAlign:'center',
    marginBottom: 10, 
    fontSize:13,
    lineHeight:20,
    fontWeight:'600'    
},
cardActions: {
    marginTop: 0

},
carddesc:{
  fontSize:6    
}
});

export default styles;
