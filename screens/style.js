import { StyleSheet } from 'react-native'

 const signup = StyleSheet.create({
   container: {
      alignItems: 'center',
      height:"100%",
      // paddingTop:'30%',
      paddingBottom:0,
      // backgroundColor:"yellow"
    },
    BackImg: {
      width:30,
      height:30,
      marginLeft:30,
    },
    image: {
      // marginTop: 60,
      resizeMode: 'contain',
      marginBottom: 70,
    },
    joinImage: {
      // marginTop: 60,
      resizeMode: 'contain',
      // width:50,
      // height:50,
      // marginBottom: 30,
    },
    footer: {
      justifyContent: 'flex-end',
      flex: 1,
    },
    textRow: {
      justifyContent: 'center',
      flexDirection: 'row',
    },
   disclaimer: {
     textAlign: 'center',
     width: '80%',
     marginBottom: 15,
     color:'gray'
   },
   joinContent:{
     textAlign: 'center',
     fontSize:28,
     fontWeight:'bold',
     color:"gray",
     marginBottom:55,
     marginTop:"25%",
     // backgroundColor:"red"
   },
   BtnText:{
     color:"#02a5de",
     fontSize:20,
     textAlign:'center',
     fontWeight:"bold"
   },
   DisablePersonBtn:{
     width: '60%',
     marginBottom: 20,
     borderRadius:9,
     justifyContent:"center",
     backgroundColor:"transparent",
     height:"8%",
     borderColor:"#02a5de",
     borderWidth:3
   },
   interpreterBtn:{
     width: '60%',
     borderRadius:9,
     justifyContent:"center",
     backgroundColor:"transparent",
     height:"8%",
     borderColor:"#02a5de",
     borderWidth:3
   },
   HeaderImg:{
     // objectFit:"scale-down",
     // width:"50%",
     position:"absolute",
     height:"50%",
     resizeMode:"contain",
     right:"-18%",
     // justifyContent:'center',
     // flex:3
   }
 })

 const signupForm = StyleSheet.create({

   container: {
      alignItems: 'center',
      height:"100%",
    },
    CredentialText: {
      textAlign: 'center',
      // alignItems:"center",
      color:"gray",
      width: '100%',
      fontSize:24,
      height:"10%",
      textAlignVertical:'bottom',
      paddingBottom:10
    },
    FormView:
    {
      height:"30%",
      // backgroundColor:'orange',
      width:'100%',
      justifyContent:"center",
      alignItems:"center"
    },
    fullName:{
      width:"65%",
      // backgroundColor:"yellow",
      height:"25%",
      borderBottomWidth:2,
      fontSize:16,
      marginBottom:"2%",
      borderColor:"gray"
    },
    emailField:
    {
      width:"65%",
      // backgroundColor:"yellow",
      height:"25%",
      borderBottomWidth:2,
      fontSize:16,
      marginBottom:"2%",
      borderColor:"gray"
    },
    passwordField:
    {
      width:"65%",
      height:"25%",
      // backgroundColor:"yellow",
      borderBottomWidth:2,
      fontSize:16,
      borderColor:"gray"
    },
    ButtonView:{
      width:"100%",
      // backgroundColor:"red",
      // justifyContent:'center',
      alignItems:'center',
      height:"30%",
      paddingTop:25
    },
    JoinBtn:
    {
      width: '65%',
      borderRadius:50,
      justifyContent:"center",
      backgroundColor:"#02a5de",
      height:"30%",
      alignItems:'center'
    },
    JoinBtnText:{
      color:"white",
      fontSize:20,
      fontWeight:"bold",
    },
    loginBtn:
    {
      marginTop:25,
      color:"black",
      fontSize:20,
      fontWeight:'bold',
      color:"gray",
    },
    BottomView:{
      width:"100%",
      // backgroundColor:"orange",
      height:"30%",
      alignItems:"center"

    },
    Facebookbtn:
    {
      backgroundColor:"#3B5998",
      height:"30%",
      alignItems:"center",
      justifyContent:"center",
      width:"55%"
    },
    FacebookbtnText:
    {
      color:"white",
      fontSize:20
    }

 });

 const login = StyleSheet.create({

   container: {
      alignItems: 'center',
      height:"100%",
      // paddingTop:'30%',
      // paddingBottom:0,
      // backgroundColor:"yellow"
    },
   CredentialText: {
     textAlign: 'center',
     // alignItems:"center",
     color:"gray",
     width: '100%',
     fontSize:24,
     height:"10%",
     textAlignVertical:'bottom',
     paddingBottom:10
   },
   InputFormView:
   {
     // backgroundColor:"red",
     width:"100%",
     justifyContent: 'flex-end',
     alignItems: 'center',
     height:'30%',
     paddingBottom:20
   },
   emailField:
   {
     width:"65%",
     // backgroundColor:"yellow",
     height:"25%",
     borderBottomWidth:2,
     fontSize:16,
     marginBottom:"2%",
     borderColor:"gray"
   },
   password:
   {
     width:"65%",
     height:"25%",
     // backgroundColor:"yellow",
     borderBottomWidth:2,
     fontSize:16,
     borderColor:"gray"
   },
   ButtonView:
   {
     width:"100%",
     // backgroundColor:"red",
     // justifyContent:'center',
     alignItems:'center',
     height:"30%",
     paddingTop:25
   },
   loginBtn: {
     width: '65%',
     borderRadius:50,
     justifyContent:"center",
     backgroundColor:"#02a5de",
     height:"30%",
     alignItems:'center'
   },
   loginBtnText:{
     color:"white",
     fontSize:20,
     fontWeight:"bold",
   },
   JoinDeaftwakBtn:{
     marginTop:25,
     color:"black",
     fontSize:20,
     fontWeight:'bold',
     color:"gray",
   },
   BottomView:{
     width:"100%",
     // backgroundColor:"orange",
     height:"30%",
     alignItems:"center"

   },
   Facebookbtn:
   {
     backgroundColor:"#3B5998",
     height:"30%",
     alignItems:"center",
     justifyContent:"center",
     width:"55%"
   },
   FacebookbtnText:
   {
     color:"white",
     fontSize:20
   }
 });
 const LoggedInScreenStyle = StyleSheet.create({

   container: {
      alignItems: 'center',
      height:"100%",
      // paddingTop:'30%',
      // paddingBottom:0,
      // backgroundColor:"yellow"
    },
    BackImg: {
      width:30,
      height:30,
      marginLeft:30,
      marginTop:20
    },
    userImageView:{
      width:'100%',
      // backgroundColor:"yellow",
      height:"36%",
      alignItems:'center'
    },
    userImage:{
      width:200,
      height:200,
      borderRadius:250,
      borderColor:"#02a5de",
      borderWidth:5
    },
    ImageBottomView:
    {
      // backgroundColor:"orange",
      width:"100%",
      height:'52%'
    },
    GreetingTextView:
    {
      // backgroundColor:"orange",
      width:"100%",
      height:"40%",
      alignItems:"center",
      color:"gray"
    },
    GreetingText:
    {
      fontSize:20,
      color:"gray",
      fontWeight:"bold"
    },
    RemainingMinText:
    {
      color:"gray",
      fontSize:18,
      marginTop:40
    },
    BottomBtnView:
    {
      width:'100%',
      height:'60%',
      // backgroundColor:'yellow',
      alignItems:"center",
    },
    reqInterpreterBtn:{
      width: '65%',
      borderRadius:50,
      justifyContent:"center",
      backgroundColor:"#02a5de",
      height:"25%",
    },
    reqInterpreterBtnText:{
      color:"white",
      fontSize:20,
      textAlign:'center',
      fontWeight:"bold"
    },
    purchaseMinBtn:{
      width: '65%',
      borderRadius:50,
      justifyContent:"center",
      backgroundColor:"gray",
      height:"25%",
      marginTop:15
    },
    purchaseMinBtnText:{
      color:"white",
      fontSize:20,
      textAlign:'center',
      fontWeight:"bold"
    },
    BottomTabView:{
      width:"100%",
      height:"12%",
      backgroundColor:"yellow",
      justifyContent:"flex-end"
    },
    BottomTab:{
      height:"100%"
    },
    tabimg:{
      width:40,
      height:40,
    }
 });
 const PurchaseStyle = StyleSheet.create({

   container: {
      alignItems: 'center',
      height:"100%",
    },
    HeadingContentView:{
      height:"30%",
      width:'100%',
      // backgroundColor:"yellow",
      // justifyContent:"center",
      alignItems:"center"
    },
    HeadingText:{
      // backgroundColor:"orange",
      color:"#BEBEBE",
      fontSize:32,
      fontWeight:"bold",
      height:"39%",
      textAlignVertical:"bottom"
    },
    RemainingMinText:{
      color:"gray",
      fontSize:24,
      height:"32%",
      // backgroundColor:"red",
      textAlignVertical:"center"
    },
    tapToPurchaseText:{
      color:"#BEBEBE",
      height:"29%",
      fontSize:14,
      // backgroundColor:"green",
      textAlignVertical:"top"
    },
    MinPurchaseView:{
      height:"70%",
      // backgroundColor:"red",
      width:"100%",
      alignItems:'center'
    },
    PurchaseMinBtn:
    {
      width:"80%",
      backgroundColor:"#02a5de",
      marginBottom: 20,
      borderRadius:9,
      justifyContent:"center",
      height:"15%",
      alignItems:"center",
      flexDirection:"row"
    },
    BtnTextLeft:{
      color:"white",
      fontSize:32,
      fontWeight:"bold",
      // backgroundColor:"blue",
      width:"50%",
    },
    BtnTextRight:{
      // backgroundColor:"red",
      width:"50%",
      textAlign:"right",
      color:"white",
      fontSize:32,
      fontWeight:"bold"
    }

 });
 export { signup, signupForm, login, LoggedInScreenStyle,PurchaseStyle }
