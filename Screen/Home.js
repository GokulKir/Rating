import { StyleSheet, Text, View , ScrollView , TouchableOpacity , Image } from 'react-native'
import React , {useState , useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import Icon1 from "react-native-vector-icons/Ionicons";
export default function Home({navigation}) {
    const [Pro , setPro]  = useState([])
    const [uid , setUid] = useState('')
    const [use , setUse] = useState([])
    useEffect(()=>{
       firestore().collection('Products').get().then((snapshot)=>{
           const Allpost = snapshot.docs.map((user)=>{
            return {
                ...user.data(),
                 id : user.id
            }
           })
           setPro(Allpost)
           setUid(Allpost)
           console.log(Allpost);
       })

  
    },[Pro])



    const User = () =>{
      
    }


  return (
    <View style={styles.container}>

        <View style={{marginTop:20 , marginLeft:50 , flexDirection:'row' }} >

            <Text style={{fontSize:39 , color:'black' , fontWeight:'bold' }}>Home</Text>
            <View style={{width:50 , height:50 , backgroundColor:'orange' , alignItems:'center' , justifyContent:'center' , marginLeft:"40%" , borderRadius:45}}>
                 <Text style={{fontSize:20 , color:'black' , fontWeight:'bold'}}>1</Text>
            </View>


        </View>





       <View style={{alignItems:'center', marginTop:80  }}>
        <View  style={{width:'100%' , height:'100%' , backgroundColor:'black' ,   borderTopLeftRadius:50 ,borderTopRightRadius: 50}}>
        <ScrollView >

          {Pro.map((obj , index)=>{
    
            return (

      
      
        <View  key={index} style={{alignItems:'center' , marginTop:20}}>
        <TouchableOpacity  onPress={()=> navigation.navigate('UserRate' , {data:obj})}  style={{width:'100%' , height:86  , borderRadius:10 , flexDirection:'row' , marginTop:10}}>
         <View style={{width:80 , height:80 , backgroundColor:'#fff' , marginLeft:3 , marginTop:0 , borderRadius:100}}>
       <Image style={{width:'100%' , height:'100%' , borderRadius:100}} source={{uri : obj.img}}/>
         </View>
         <View style={{width:180 }}>

            <Text style={{color:'#fff' , marginLeft:40 , fontWeight:'bold' , marginTop:12}}>{obj.name}</Text>
            <Text style={{color:'#fff' , marginLeft:40}}>{obj.Dis}</Text>
            <Text style={{color:'orange', marginLeft:40}}>RS : {obj.Rate}</Text>
           { obj.Rating === 1  ?
              <View style={{flexDirection:'row' , marginTop:10 , marginLeft:45}}>

                <Icon1 name="star" style={{marginLeft:2}} color="red" size={13}/>
                <Icon1 name="star" style={{marginLeft:2}} color="#fff" size={13}/>
                <Icon1 name="star" style={{marginLeft:2}}  color="#fff" size={13}/>
                <Icon1 name="star" style={{marginLeft:2}}  color="#fff" size={13}/>
                <Icon1 name="star"  style={{marginLeft:2}}  color="#fff" size={13}/>

              </View>
              :  obj.Rating === 2 ?    
              <View style={{flexDirection:'row' , marginTop:10 , marginLeft:45}}>

              <Icon1 name="star" style={{marginLeft:2}} color="orange" size={13}/>
              <Icon1 name="star" style={{marginLeft:2}} color="orange" size={13}/>
              <Icon1 name="star" style={{marginLeft:2}}  color="#fff" size={13}/>
              <Icon1 name="star" style={{marginLeft:2}}  color="#fff" size={13}/>
              <Icon1 name="star"  style={{marginLeft:2}}  color="#fff" size={13}/>

            </View>  : obj.Rating === 3 ?    
         <View style={{flexDirection:'row' , marginTop:10 , marginLeft:45}}>

<Icon1 name="star" style={{marginLeft:2}} color="yellow" size={13}/>
<Icon1 name="star" style={{marginLeft:2}} color="yellow" size={13}/>
<Icon1 name="star" style={{marginLeft:2}}  color="yellow" size={13}/>
<Icon1 name="star" style={{marginLeft:2}}  color="#fff" size={13}/>
<Icon1 name="star"  style={{marginLeft:2}}  color="#fff" size={13}/>

</View>  : obj.Rating === 4 ?    
         <View style={{flexDirection:'row' , marginTop:10 , marginLeft:45}}>

<Icon1 name="star" style={{marginLeft:2}} color="#2deddd" size={13}/>
<Icon1 name="star" style={{marginLeft:2}} color="#2deddd" size={13}/>
<Icon1 name="star" style={{marginLeft:2}}  color="#2deddd" size={13}/>
<Icon1 name="star" style={{marginLeft:2}}  color="#2deddd" size={13}/>
<Icon1 name="star"  style={{marginLeft:2}}  color="#fff" size={13}/>

</View>  :  obj.Rating === 5 ?    
         <View style={{flexDirection:'row' , marginTop:10 , marginLeft:45}}>

<Icon1 name="star" style={{marginLeft:2}} color="#2ded2d" size={13}/>
<Icon1 name="star" style={{marginLeft:2}} color="#2ded2d"  size={13}/>
<Icon1 name="star" style={{marginLeft:2}}  color="#2ded2d" size={13}/>
<Icon1 name="star" style={{marginLeft:2}}  color="#2ded2d" size={13}/>
<Icon1 name="star"  style={{marginLeft:2}}  color="#2ded2d" size={13}/>

</View>  : null

            }
         </View>
         <View>
            <TouchableOpacity    onPress={()=> navigation.navigate('Rate' , {data : obj})} style={{width:86 , height:25 , backgroundColor:'orange' , marginLeft:10 , marginTop:30 , borderRadius:10 , alignItems:'center' , justifyContent:'center'}}>
       <Text style={{color:'black' , fontWeight:'bold'}}>Rate now</Text>
            </TouchableOpacity>
         </View>
        </TouchableOpacity>
       </View>
   
    
      
            )

})}
        </ScrollView>

        <View style={{alignItems:'center' , marginBottom:140}}>
            <TouchableOpacity  onPress={()=> navigation.navigate('Add')} style={styles.Button}>
                 <Text style={{fontSize:29 , fontWeight:'bold' , color:'black'  }}>Add</Text>
                 <View style={{width:96 , height:56 , backgroundColor:'orange' , marginLeft:85 , borderRadius:100 , alignItems:'center' , justifyContent:'center'}}>
                    <Text style={{fontSize:34 , color:'black' , fontWeight:'bold'}}>+</Text>
                 </View>
            </TouchableOpacity>
        </View>
        
        </View>
        
       </View>
       
      
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'#fff'
    },
    Button :{
        width:'80%' ,
        height:75,
        backgroundColor:'#fff' ,
        borderRadius:100,
        alignItems:'center' ,
        justifyContent:'center',
        flexDirection:'row'
      

    }
})