import React from 'react';
import { StackNavigator } from 'react-navigation';

import TrailersListScreen, {TRAILERS_LIST_SCENE_NAME} from './screens/TrailersListScreen';
import TrailerScreen, {TRAILER_SCENE_NAME} from './screens/TrailerScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[TRAILERS_LIST_SCENE_NAME] = {
    screen : TrailersListScreen
};

stackNavigatorConfig[TRAILER_SCENE_NAME] = {
    screen : TrailerScreen
};

const AppNavigator = StackNavigator(stackNavigatorConfig, {
    initialRouteName: TRAILERS_LIST_SCENE_NAME
});

export default () => <AppNavigator/>;