import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Header extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.viewStyle}>
				<Text style={styles.textStyle}>{this.props.headerText}</Text>
			</View>
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

export default Header;
