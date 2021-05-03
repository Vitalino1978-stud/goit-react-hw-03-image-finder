import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt }) => {
	return (
		<img src={url}
		alt={alt} className="ImageGalleryItem-image" />
	 );
}

ImageGalleryItem.propTypes = {
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}
 
export default ImageGalleryItem;

