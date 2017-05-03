//import { NavigationActions } from 'react-navigation';
import Config from '../config'
import {listUpdate} from '../store/note';

class NoteHelper 
{
    
    static  List(callback)
    {
        let response = fetch(Config.ApiUrl,{
            method : 'GET',
            headers : Config.Headers
        })
        .then((response)=> response.json())
        .then((responseJson)=>{
            callback(responseJson);
        });

          response.then((data)=>{
            listUpdate(data);
         });

     }

     static noteList()
     {
         let response = fetch(Config.ApiUrl,{
             method : 'GET',
             headers : Config.Headers
         }).then((response) => {
             return response.json();
         })
         .catch((error)=>{
             console.error(error);
         });

         response.then((data)=>{
            listUpdate(data);
         });
     }
    
}

export default NoteHelper;