import { StyleSheet, Text, View , ScrollView , Image , TouchableOpacity , TextInput , Alert } from 'react-native'
import React,{useState , useEffect} from 'react'
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import uuid from 'react-native-uuid';
export default function Add({navigation}) {
  const uid = uuid.v4();
  const [name , setName] = useState('')
  const [Rate , setRate] = useState('')
  const [Dis , setDis] = useState('')
  const [img , setImg] = useState('')

  const OpenImage = () =>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setImg(image.path)
    }).catch((e)=>{
       console.log(error);
    })
  }

  const Add = () =>{
    if(name === ""){
      Alert.alert('Enter product name')
     console.log("Eneter name");
    }else if(Rate === ""){
      Alert.alert('Enter product rate')
      console.log("Eneter rate");

    }else if (Dis === ""){
      Alert.alert('Enter product Discription')
      console.log("Eneter Dis");

    }else if(img === "") {
      Alert.alert('Image not uploaded')
      console.log("Upload image");

    }else {
      const usersCollection = firestore().collection('Products').doc(uid).set({
        name : name ,
        Rate : Rate,
        Dis : Dis ,
        img : img ,
        uid : uid ,
        


      })
      Alert.alert("Product added")
      navigation.navigate('Home')
    }


  }
    
  return (
    <View style={styles.container}>
      
        <View style={{marginLeft:30 , marginTop:14}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <Icon2 name="arrow-left" size={34} color="black"/>
        </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'black' , flex : 1 , marginTop:30 , borderTopLeftRadius:50 , borderTopRightRadius:50}}>
    <ScrollView>
   <View style={{alignItems:'center'}}>
    <View  style={{width:245 , height:244 , borderWidth:1 , borderColor:'orange' , marginTop:80 , borderRadius:10 , alignItems:'center' , justifyContent:'center'}}>
      {img  === ""  ?  <Text style={{color:'#fff' , fontSize:43}}>+</Text> :  <Image  style={{width:'100%' , height:'100%'}} source={{uri:img}} />}
   
    
    </View>

    <View style={{alignItems:'center' , marginTop:30}}>
        <TouchableOpacity onPress={OpenImage} style={{width:156 , height:36 , backgroundColor:'orange' , borderRadius:100 , alignItems:"center" , justifyContent:'center'}}>
           
            <Icon name="camera" size={24} color="#fff"/>
        </TouchableOpacity>

    </View>


  
   </View>

  <View style={{alignItems:'center' , marginTop:60}}>

    <View style={{width:'90%' , height:44 , backgroundColor:'#fff' , borderRadius:10 , flexDirection:'row'}}>
    <Icon1 name="md-laptop" style={{marginLeft:13  , marginTop:6}} size={30} color="black"/>
    <TextInput  onChangeText={(e)=> setName(e)} style={{width:'100%' , height:'100%' , marginLeft:10 , fontSize:15}}   placeholder="Product name"/>
    </View>

    <View style={{width:'90%' , height:44 , backgroundColor:'#fff' , borderRadius:10 , flexDirection:'row' , marginTop:40}}>
    <Icon2 name="money" style={{marginLeft:13  , marginTop:6}} size={30} color="black"/>
    <TextInput   onChangeText={(e)=> setRate(e)}style={{width:'100%' , height:'100%' , marginLeft:10 , fontSize:15}}  maxLength={10}   placeholder="Product rate"/>
    </View>


    <View style={{width:'90%' , height:124 , backgroundColor:'#fff' , borderRadius:10 , flexDirection:'row' , marginTop:40 , paddingBottom:70}}>

    <TextInput    onChangeText={(e)=> setDis(e)} style={{width:'100%' , height:'100%' , marginLeft:10 , fontSize:15}}    placeholder="Product Discription"/>
    </View>
   
  

  <View style={{alignItems:'center' , marginTop:40}}>
     <TouchableOpacity  onPress={Add} style={{width:323 , height:50  , borderWidth:2 , borderColor:'#7542f5' , borderRadius:10 , alignItems:'center' , justifyContent:'center'}}>
        <Text style={{color:'#fff' , fontSize:18 , fontWeight:'bold'}}>Submit</Text>
    </TouchableOpacity> 

  </View>
  <View style={{height:56}}></View>
  </View>

    </ScrollView>
        </View>
        </View>
     

  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff' 
  }



})