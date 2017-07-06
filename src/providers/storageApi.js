import React from 'React';
import { AsyncStorage } from 'react-native';


export const TRAILERS_STORAGE_KEY = 'trailers';

export async function setAsyncStorageItem(key, object) {
    let value = JSON.stringify(object);

    try {
        // TODO check arguments
        await AsyncStorage.setItem(key, value);
    } catch (error) {
       console.log(error);
    }
}

export async function getAsyncStorageItem(key) {
    try {
        // TODO check argument
        let value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
        return null;
    } catch (error) {
        console.log(error);
    }
}

