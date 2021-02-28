import React,{Component} from 'react';
import MapContainer from '../../components/Map/Map';
import Posts from '../../components/Pagination/post';
class CompleteMap extends Component{
     render(){
    return(
           <>
           <div className="row Main">
               <div className="col-lg-6">
               <MapContainer/>
               </div>
               <div className="col-lg-6">
               <Posts/>
               </div> 
           </div>
           </>
        );
}
}

export default CompleteMap;