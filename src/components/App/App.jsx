import React, { Component } from "react";
import Loader from "react-loader-spinner";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ButtonLoadMore from '../Button/Button';
import Modal from '../Modal/Modal';
import imagesAPI from "../../services/imagesApi";
import   "./App.css";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
    modalIsOpen: false,
    largeImageURL: "",
  };

  componentDidMount() {
    if(this.state.query) {
      this.fetchImages()
    }
    window.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  }

  fetchImages = (query) => {
    this.setState({ isLoading: true, query: query, images: [] });
    imagesAPI.resetPage()
    imagesAPI.fetchImages(query)
      .then(({ data }) => this.setState({ images: [...data.hits] }))
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  handleLoadMoreImages = () => {
    imagesAPI.incrementPage();
    this.setState({ isLoading: true });
    imagesAPI.fetchImages(this.state.query)
      .then(({ data }) =>{
        this.setState((state) => ({ images: [...state.images, ...data.hits] }));
        this.windowScrollTo()
      })
      .catch((err) => console.error(err))
      .finally(() => this.setState({ isLoading: false }));
  }

  windowScrollTo () {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  handleModalOpen = (src) => {
    this.setState({
      modalIsOpen: true,
      largeImageURL: src,
    })
  }

  handleCloseModal = (e) => {
    if(e.target.className === 'Overlay') {
      this.closeModal()
    }
  }

  handleKeyPress = (e) => {
    if (e.code === "Escape") this.closeModal();
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      largeImageURL: '',
    })
  }
  
  render() {
    const { images, isLoading, error, modalIsOpen, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.fetchImages} />
        {error && <p>Whoops, somthing went wrong: {error.message}</p>}
        {images.length > 0 && <ImageGallery images={images} onClick={this.handleModalOpen}  />}
        {isLoading && (
          <div className="loader">
            <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
          </div>
        )}
        {images.length > 0 && <ButtonLoadMore  loadMore={this.handleLoadMoreImages} />}
        {!!modalIsOpen && <Modal largeImageURL={largeImageURL} closeModal={this.handleCloseModal}/>}
      </div>
    );
  }
}
