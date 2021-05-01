import ImageGalleryItem from '../ImageGalleryItem'
const ImageGallery = ({ pictures }) => {

	return (
		<ul className="ImageGallery">
			{pictures.map(({ id, webformatURL, tags }) => (
				<li className="ImageGalleryItem" key={id}>
					<ImageGalleryItem url={webformatURL} alt={ tags}/>
				</li>
			))}	
  
		</ul>
	);
}
 
export default ImageGallery;