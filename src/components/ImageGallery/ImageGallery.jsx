import ImageGalleryItem from '../ImageGalleryItem'

const ImageGallery = ({ pictures, openModal }) => {

	return (
		<>
		<ul className="ImageGallery">
				{pictures.map(({ id, webformatURL, tags, largeImageURL }) => {
				
				return (
				<li className="ImageGalleryItem" key={id} onClick={() => openModal(largeImageURL) }>
					<ImageGalleryItem url={webformatURL} alt={tags} />
				</li>
			)
			})}	
  
		</ul>
			
			{/* <button type='button' onClick={this.fetchPictures}>Load more</button> */}
			</>
	);
}
 
export default ImageGallery;