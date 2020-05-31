import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// imports
import { screenPrimaryColor } from '~/app/colors';
// services
// types
import { NavigationProp } from '@react-navigation/native';
// actions
import { getMessages, unmontMessages } from '~/store/duck/chat';
// components
import Header from './Header';
import Input from './Input';
import Message from './Message';
import Loading from '~/components/Loading';

interface StateProps {
	navigation: NavigationProp<any>;
	route: any;
	messages: any[];
	loading: boolean;
}

interface DispatchProps {
	unmontMessages(): void;
}

type Props = StateProps & DispatchProps;

class Chat extends Component<Props> {

	keyboardListener: any;
	refs: any;

	state = {
		heightScroll: 0,
		positionScroll: 0, // ainda nã utilizado
	};

	// faz com que a tela desça até o final ao abrir o teclado
	onKeyboardListener() {
		// keyboardDidShow executar ação depois de abrir o teclado
		this.keyboardListener = Keyboard.addListener("keyboardDidShow", () => {
			// ação que será feita
			this.refs.chat.scrollToOffset({
				offset: this.state.heightScroll,
				animated: false
			});
		})
	}

	componentDidMount() {
		this.onKeyboardListener();
	}

	componentWillUnmount() {

		Keyboard.dismiss();
		// resetar o array de conversas no store toda vez que sair da tela do chat
		this.props.unmontMessages();
		// remover todos os listeners do teclado
		this.keyboardListener.remove();
	}

	// renders

	render() {

		// dados do usuario que esta ativo no chat
		const user = this.props.route.params.user;

		if (this.props.loading) {
      return <Loading />
    }

		return (
			<View style={styles.container}>

				<Header user={user} navigation={this.props.navigation} />

				<FlatList
					ref="chat"
					onContentSizeChange={(_, heightScroll) => {
						this.setState({ heightScroll });
						this.refs.chat.scrollToEnd({ animated: false })
					}}
					style={styles.messagesContainer}
					data={this.props.messages}
					keyExtractor={(_, index) => index.toString()}
					renderItem={({ item }: any) => (
						<Message data={item} received={item.id === 0} />
					)}
				/>

				<Input user={user} />

			</View>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		messages: state.chat.messages,
		loading: state.chat.loading
	}
}

const mapDispatchToProps = (dispatch: any) => {

	return bindActionCreators({ getMessages, unmontMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: screenPrimaryColor
	},
	messagesContainer: {
		paddingHorizontal: 30,
	},
});