import React, {Component} from 'react';
import '../Styles/galleryItem.css';
import PrjCover from '../Components/PrjCover';

const bgURL = '/assets/prjPlaceHolder.jpg'
class GalleryItem extends Component{

    
    render(){
        return(
            <div>
                <div className="frontFacing">
                    <PrjCover title="Experience Adaptech" sub="An interactive trade show exhibit!" bg="/assets/adaptech.jpg"/>
                </div>
            </div>
        )
    }


}


export default GalleryItem;