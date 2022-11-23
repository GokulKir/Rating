import { StyleSheet, Text, View , Image , ScrollView , TouchableOpacity } from 'react-native'
import React , {useState , useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import Icon1 from "react-native-vector-icons/Ionicons";
export default function UserRate({navigation , route}) {
    const [post , setPost] = useState([])
    const {data} = route.params ;
  useEffect(()=>{
  firestore().collection(data.uid).get().then((snapshot) =>{
    const AllUser = snapshot.docs.map((User)=>{
        return {
            ...User.data(),
            id : User.id,
        }
    })
    setPost(AllUser)
    console.log(AllUser);
  })

  })
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'balck' , fontSize:39 , fontWeight:'bold' , color:'black' , marginLeft:40 , marginTop:10}}>Listing</Text>
            <View style={{width:52 , height:52 , backgroundColor:'orange' , marginTop:10 , marginLeft:126 , borderRadius:100 , alignItems:'center' , justifyContent:'center'}}>
                <Text style={{color:'black' , fontSize:20 , fontWeight:'bold'}}>2</Text>


            </View>
        </View>
        <View style={{flex: 1, backgroundColor:'black' , marginTop:60 , borderTopLeftRadius:50 , borderTopRightRadius:50}}>
          <ScrollView>
            <View style={{alignItems:'center' , marginTop:70}}>
            

       
      <View  style={{width:323 , height:323 , backgroundColor:'orange' , borderRadius:30}}>
      <Image style={{width:'100%' , height:'100%' , borderRadius:30}}   source={{uri:data.img}}/>
     
       </View>
 
     
   
    
      

              <View style={{alignItems:'center' , marginTop:20}}>
                <Text style={{color:'#fff' , fontSize:15 , fontWeight:'bold'}}>{data.name}</Text>
                <Text style={{color:'#fff' , fontSize:15 , fontWeight:'bold' , marginTop:20 , color:'orange'}}>{data.Dis}</Text>

              </View>
           
            </View>


            <View style={{alignItems:'center' , marginTop:40}}>
              <Text style={{color:'#fff' , fontSize:15 , fontWeight:'bold'}}>Rated users</Text>

            </View>
           <View style={{alignItems:'center' , marginTop:40}}>
            
           </View>

          {post.map((obj , index)=>{

       
     return (

      obj.Rate === 1 ? 
            <View  key={index} style={{alignItems:'center' , flexDirection:'row'}}>
       <View style={{alignItems:'center' , flexDirection:'row' , marginTop:30}}>
        <View style={{width:"100%" , height:90 , flexDirection:'row'}}>
         <View style={{width:60 , height:60 , backgroundColor:'#fff' , marginTop:0  , borderRadius:100}} >

         <Image style={{width:'100%' , height:'100%'}} source={require('../assets/user.png')}/>
         </View>
         <View style={{ marginLeft:30 , marginTop:8}}>
         <Text style={{color:'red' , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
         <View style={{flexDirection:'row' , marginTop:10}}>
         
         <Icon1  style={{marginLeft:8}}    name="star"   color="red"   size={14}/>
         <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>  
         <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>  
         <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>  
         <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>    
         </View>
      
         </View>

         <Text style={{color:'#e80c1a' , marginLeft:106 , marginTop:20 ,fontSize:23}}>Bad !</Text>
      
        
        
        
        </View>
      
       
       </View>
      
            </View>
            : null
     )


})}


{post.map((obj , index)=>{

       
return (

 obj.Rate === 2 ? 
       <View  key={index} style={{alignItems:'center' , flexDirection:'row'}}>
  <View style={{alignItems:'center' , flexDirection:'row' , marginTop:30}}>
   <View style={{width:"100%" , height:90 , flexDirection:'row'}}>
    <View style={{width:60 , height:60 , backgroundColor:'#fff' , marginTop:0  , borderRadius:100}} >

    <Image style={{width:'100%' , height:'100%'}} source={require('../assets/user.png')}/>
    </View>
    <View style={{ marginLeft:30 , marginTop:8}}>
    <Text style={{color:'orange' , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
    <View style={{flexDirection:'row' , marginTop:10}}>
    
    <Icon1  style={{marginLeft:8}}    name="star"   color="orange"   size={14}/>
    <Icon1  style={{marginLeft:8}}    name="star"   color="orange"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>    
    </View>
 
    </View>

    <Text style={{color:'orange' , marginLeft:106 , marginTop:20 ,fontSize:23}}>Poor !</Text>
 
   
   
   
   </View>
 
  
  </View>
 
       </View>
       : null
)


})}





{post.map((obj , index)=>{

       
return (

 obj.Rate === 3 ? 
       <View  key={index} style={{alignItems:'center' , flexDirection:'row'}}>
  <View style={{alignItems:'center' , flexDirection:'row' , marginTop:30}}>
   <View style={{width:"100%" , height:90 , flexDirection:'row'}}>
    <View style={{width:60 , height:60 , backgroundColor:'#fff' , marginTop:0  , borderRadius:100}} >

    <Image style={{width:'100%' , height:'100%'}} source={require('../assets/user.png')}/>
    </View>
    <View style={{ marginLeft:30 , marginTop:8}}>
    <Text style={{color:'yellow' , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
    <View style={{flexDirection:'row' , marginTop:10}}>
    
    <Icon1  style={{marginLeft:8}}    name="star"   color="yellow"   size={14}/>
    <Icon1  style={{marginLeft:8}}    name="star"   color="yellow"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="yellow"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>    
    </View>
 
    </View>

    <Text style={{color:'yellow' , marginLeft:106 , marginTop:20 ,fontSize:23}}>Okay</Text>
 
   
   
   
   </View>
 
  
  </View>
 
       </View>
       : null
)


})}




{post.map((obj , index)=>{

       
return (

 obj.Rate === 4 ? 
       <View  key={index} style={{alignItems:'center' , flexDirection:'row'}}>
  <View style={{alignItems:'center' , flexDirection:'row' , marginTop:30}}>
   <View style={{width:"100%" , height:90 , flexDirection:'row'}}>
    <View style={{width:60 , height:60 , backgroundColor:'#fff' , marginTop:0  , borderRadius:100}} >

    <Image style={{width:'100%' , height:'100%'}} source={require('../assets/user.png')}/>
    </View>
    <View style={{ marginLeft:30 , marginTop:8}}>
    <Text style={{color:'#2deddd' , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
    <View style={{flexDirection:'row' , marginTop:10}}>
    
    <Icon1  style={{marginLeft:8}}    name="star"   color="#2deddd"   size={14}/>
    <Icon1  style={{marginLeft:8}}    name="star"   color="#2deddd"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#2deddd"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#2deddd"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#fff"   size={14}/>    
    </View>
 
    </View>

    <Text style={{color:'#2deddd' , marginLeft:106 , marginTop:20 ,fontSize:23}}>Good</Text>
 
   
   
   
   </View>
 
  
  </View>
 
       </View>
       : null
)


})}




{post.map((obj , index)=>{

       
return (

 obj.Rate === 5 ? 
       <View  key={index} style={{alignItems:'center' , flexDirection:'row'}}>
  <View style={{alignItems:'center' , flexDirection:'row' , marginTop:30}}>
   <View style={{width:"100%" , height:90 , flexDirection:'row'}}>
    <View style={{width:60 , height:60 , backgroundColor:'#fff' , marginTop:0  , borderRadius:100}} >

    <Image style={{width:'100%' , height:'100%'}} source={require('../assets/user.png')}/>
    </View>
    <View style={{ marginLeft:30 , marginTop:8}}>
    <Text style={{color:'#2ded2d' , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
    <View style={{flexDirection:'row' , marginTop:10}}>
    
    <Icon1  style={{marginLeft:8}}    name="star"   color="#2ded2d"   size={14}/>
    <Icon1  style={{marginLeft:8}}    name="star"   color="#2ded2d"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#2ded2d"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#2ded2d"   size={14}/>  
    <Icon1  style={{marginLeft:8}}    name="star"   color="#2ded2d"   size={14}/>    
    </View>
 
    </View>

    <Text style={{color:'#2ded2d' , marginLeft:106 , marginTop:20 ,fontSize:23}}>Greate</Text>
 
   
   
   
   </View>
 
  
  </View>
 
       </View>
       : null
)


})}



            
          </ScrollView>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
 container : {
    flex : 1,
    backgroundColor: '#fff'
 }


})