import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import api from './services/pictures-api';
import ImageGallery from './components/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    currentPage: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      pictures: [],
    });
  };

  fetchPictures = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    api
      .fetchPictures(options)
      .then(picturesData =>
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...picturesData],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        if (currentPage > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      });
  };

  toggleModal = img => {
    console.log('img', img);
    this.setState(({ showModal, largeImageURL, tags }) => ({
      showModal: !showModal,
      largeImageURL: img,
      tags: tags,
    }));
  };

  render() {
    const { showModal, largeImageURL, tags } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery
          pictures={this.state.pictures}
          openModal={this.toggleModal}
        />
        {this.state.pictures.length !== 0 && !this.state.isLoading && (
          <LoadMoreBtn onClick={this.fetchPictures} />
        )}
        {this.state.isLoading && (
          <Loader type="ThreeDots" color="#3f51b5" className="Loader" />
        )}
        {showModal && (
          <Modal
            openModal={this.toggleModal}
            largeImage={largeImageURL}
            tags={tags}
          >
            <img
              width="100%"
              height="100%"
              src={this.state.largeImageURL}
              alt={this.state.tags}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
