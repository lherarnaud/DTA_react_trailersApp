import React from 'react';
import _ from 'lodash';

import { NetInfo } from 'react-native';

import {getAsyncStorageItem, setAsyncStorageItem, TRAILERS_STORAGE_KEY} from '../providers/storageApi';

export function getTrailers() {

  return NetInfo.isConnected.fetch().then(isConnected => {

    if(isConnected) {  

      return fetch('http://127.0.0.1:8080/trailers')
        .then((response) => response.json())
        .then((responseJson) => {
          let trailersList = _.sortBy(responseJson, ['title']); 
          setAsyncStorageItem(TRAILERS_STORAGE_KEY, trailersList).then(() => {});

          return trailersList;
        })
      .catch((error) => {
        console.error(error);
      });

    } else {
      return getAsyncStorageItem(TRAILERS_STORAGE_KEY)
      .then((trailersList) => {
          return trailersList;
      });
    }

  });

}