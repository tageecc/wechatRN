import React from 'react';

import {AppRegistry, Text, View, ScrollView} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';


import Home from './pages/home';
import Shelf from './pages/shelf';
import Detail from './pages/detail';
import Catalogs from './pages/catalogs';
import Menu from './pages/menu';
// import ReadPage from './pages/readpage';

//生成路由关系
const ModalTab = TabNavigator({
    Home: {
        path: 'home',
        screen: Home,
    },
    Shelf: {
        path: 'shelf',
        screen: Shelf,
    },
}, {
    swipeEnabled: false,
});
//生成路由关系
const ModalStack = StackNavigator({
    Index: {
        path: 'index',
        screen: ModalTab
    },
    Detail: {
        path: 'detail',
        screen: Detail,
    },
    Catalogs: {
        path: 'catalogs',
        screen: Catalogs
    },
    Menu: {
        path: 'menu',
        screen: Menu
    },
});

AppRegistry.registerComponent('storyNative', () => ModalStack);
