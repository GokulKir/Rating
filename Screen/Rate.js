import { StyleSheet, Text, View , TouchableOpacity , ScrollView , Image , TextInput , Alert } from 'react-native'
import React , {useEffect , useState} from 'react'
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/Feather";
import firestore from '@react-native-firebase/firestore';
export default function Rate({navigation , route}) {
    const [maxRating , setMaxRating]  =  useState([1 , 2 , 3 , 4 , 5])
    const [defaultRating , setDefaultRating]  = useState(0)
    const [Mobile , setMobile] = useState('')
    const {data} = route.params ;

  const phone = data.Mobile


    const Submit = () =>{
      if(phone === Mobile) {
   console.log("Mobile is used");
   Alert.alert('Used Mobile')
      }else if(Mobile <= 9){
            console.log("Enter Mobile max 10 digits");
            Alert.alert("max 10 digits")
        }else if(defaultRating === 0){
          Alert.alert("No rated product !")
        }else{
      firestore().collection(data.uid).doc(Mobile).set({
        Mobile : Mobile,
        Rate : defaultRating,
        data : data.img,
        uid : data.uid
      })
     
      Users()
    

        }
    }

    const Users = () =>{
        firestore().collection("Products").doc(data.uid).set({
          name : data.name ,
          Rate : data.Rate,
          Dis : data.Dis ,
          img : data.img ,
          uid : data.uid ,
          Rating:defaultRating,
          Mobile : Mobile
        })
        Alert.alert("User rated")
        navigation.navigate('Home')
           
      
    }

    const Rating = () =>{
        return (
            <View style={{flexDirection:'row'}}>
                {maxRating.map((obj , index)=>{
                    return (
                        <TouchableOpacity  key={index} style={{flexDirection:'row'}}  onPress={()=> setDefaultRating(obj)}>
                         { obj <= defaultRating ? 
                          <Icon1  style={{marginLeft:8}}    name="star"   color="yellow"   size={44}/>  
                          :  <Icon1 style={{marginLeft:8}}    name="star"   color="#fff"   size={34}/>   
                        }
                        </TouchableOpacity>
                    )
                })}

            </View>
        )
    }
  return (
    <View style={styles.container}>

<View style={{marginLeft:30 , marginTop:14}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <Icon2 name="arrow-left" size={34} color="black"/>
        </TouchableOpacity>
        </View>

        <View style={{flex: 1 , backgroundColor:'black' , marginTop:40 , borderTopLeftRadius:50 , borderTopRightRadius:50}}>
        <ScrollView>
            <View style={{alignItems:'center' , marginTop:74}}>

                <View style={{width:'80%' , height:324 , backgroundColor:'orange' , borderRadius:50 , alignItems:'center' , justifyContent:'center' , elevetion:10}}>
                    <Image style={{width:'100%' , height:'100%'  , borderRadius:50}} source={{uri : data.img}}/>

                </View>

            </View>

            <View style={{alignItems:'center' , marginTop:50}}>
                <View style={{ width:'80%' , height:70 , borderColor:'orange' , borderWidth:2 , borderRadius:10 , alignItems:'center' , justifyContent:'center' }}>
               <Rating />
                </View>
            </View>
            <View style={{alignItems:"center"}}>

            {defaultRating === 1 ? 
             <Text style={{color:'red' , marginTop:30 , fontSize:20 , fontWeight:'bold'}}>Terrible</Text>
        : defaultRating === 2 ? 
        <Text style={{color:'orange' , marginTop:30 , fontSize:20 , fontWeight:'bold'}}>Bad</Text>
   : defaultRating === 3  ?  <Text style={{color:'blue' , marginTop:30 , fontSize:20 , fontWeight:'bold'}}>Okay</Text>  

 :  defaultRating === 4 ?  <Text style={{color:'#84fc03' , marginTop:30 , fontSize:20 , fontWeight:'bold'}}>Good</Text>  
 :  defaultRating === 5 ?  <Text style={{color:'#dbfc03' , marginTop:30 , fontSize:20 , fontWeight:'bold'}}>Greate</Text>  
 : null
}

    
            </View>


            <View style={{alignItems:'center' , marginTop:60 , flexDirection:'row' , marginLeft:'3%'}}>

        <View style={{width: "75%" , height:44 , backgroundColor:'#fff' , borderRadius:10 , flexDirection:'row'}}>
        <Icon3 name="phone" size={33} color="black" style={{marginLeft:10 , marginTop:5}}/>
        <TextInput  onChangeText={setMobile} style={{width:'100%' , height:'100%' , paddingLeft:8 , fontSize:17}}  maxLength={10}  keyboardType="numeric"  placeholder="User mobile"/>
        </View>
        <TouchableOpacity onPress={Submit} style={{width:86 , height:44 , backgroundColor:'orange' , borderRadius:10 , alignItems:'center' , justifyContent:'center'}}>
        <Icon2 size={30} color="#fff" name="arrow-right" />
         </TouchableOpacity>       

    </View>
    <View style={{height:96}}></View>
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