import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {

	constructor(props) {
		super(props);
		this.state = { albums: [] };
	}

	componentWillMount(){
		axios.get("https://rallycoding.herokuapp.com/api/music_albums")
			.then(response => this.setState({ albums: response.data}));
	}

	renderAlbums() {
		return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
	}

	render () {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#eeeeee',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'

	},
	textStyle: {
		fontSize: 20
	}
});

export default AlbumList;
