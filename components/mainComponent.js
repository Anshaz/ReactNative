import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './dishDetailComponent';
import { View, Platform } from 'react-native';
import Home from './HomeComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';



const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff",
                flex: 2
            }
        }
    }
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff",
            flex: 2
            
        },
        headerTintColor: "#fff"
    })
});

const MainNavigator = createDrawerNavigator({

    Home:
    {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            
        }
    },
    Menu:
    {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        },
    }
}, {
    drawerBackgroundColor: '#D1C4E9',
});

class Main extends Component {
   
    render() {

        return (
            <View style={{ flex: 1 }}>
                <MainNavigator />
               
            </View>
        );
    }
}

export default Main;