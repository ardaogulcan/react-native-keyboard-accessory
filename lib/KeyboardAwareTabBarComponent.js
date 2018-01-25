import React from 'react'
import PropTypes from 'prop-types';
import { Keyboard, Platform } from 'react-native'
import { TabBarBottom } from 'react-navigation'

export default class KeyboardAwareTabBarComponent extends React.PureComponent {

    constructor(props) {
        super(props);

        this.keyboardWillShow = this.keyboardWillShow.bind(this);
        this.keyboardWillHide = this.keyboardWillHide.bind(this);

        this.state = {
            isVisible: true
        }
    }

    componentWillMount() {
        const keyboardShowEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
        const keyboardHideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

        this.keyboardWillShowSub = Keyboard.addListener(keyboardShowEvent, this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener(keyboardHideEvent, this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow(event) {
        this.setState({
            isVisible: false
        })
    }

    keyboardWillHide(event) {
        this.setState({
            isVisible: true
        })
    }

    render() {
        const TabBarComponent = this.props.tabBarComponent;

        return this.state.isVisible
            ? <TabBarComponent {...this.props} />
            : null
    }
}

KeyboardAwareTabBarComponent.propTypes = {
    tabBarComponent: PropTypes.func
};

KeyboardAwareTabBarComponent.defaultProps = {
    tabBarComponent: TabBarBottom
};

