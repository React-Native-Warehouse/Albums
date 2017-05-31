import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {

	constructor(props) {
		super(props);
		const { title, artist, thumbnail_image } = props.album;
	}
	render () {
		return (
			<Card>
				<CardSection>
					<View style={styles.thumbnailContainerStyle}>
						<Image
						 	style={styles.thumbnailStyle}
							source={{ uri: this.props.album.thumbnail_image }}/>
					</View>
					<View style={styles.headerContentStyle}>
						<Text
							style={styles.headerTextStyle}>{this.props.album.title}</Text>
						<Text>{this.props.album.artist}</Text>
					</View>
				</CardSection>
				<CardSection>
					<Image
					 	style={styles.imageStyle}
						source={{ uri: this.props.album.image }}/>
				</CardSection>
				<CardSection>
					<Button onPress={() => Linking.openURL(this.props.album.url)}>
						Buy Now
					</Button>
				</CardSection>
			</Card>
		);
	}
};

const styles = StyleSheet.create({
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
});

export default AlbumDetail;
