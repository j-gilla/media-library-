import React, { Component } from 'react';
import { flickrImages, shutterStockVideos } from '../Api/api';

class MediaGalleryPage extends Component {

  componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  render() {
    //Todo: Render videos & images here
    console.log(this.props.images, 'Images');
    console.log(this.props.videos, 'videos')
    console.log(this.props.selectedImage, 'SelectedImage')
    console.log(this.props.selectedVideo, 'SelectedVideo');
    return (<div> </div>)
  }
}

MediaGalleryPage.proppTypes = {

};


const mapStateToProps = ({ iamges, videos}) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

export default connect (
  mapStateToProps)(MediaGalleryPage);
