//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import { StyleSheet, Text, View, Image } from 'react-native';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";
import { Vibration } from 'react-native';

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyCxxUT3o93qzZ3Jb0Udh1ZGRVFr92udw5c",
    authDomain: "react-with-firebase-f9b6e.firebaseapp.com",
    databaseURL: "https://react-with-firebase-f9b6e-default-rtdb.firebaseio.com",
    projectId: "react-with-firebase-f9b6e",
    storageBucket: "react-with-firebase-f9b6e.appspot.com",
    messagingSenderId: "283455180651",
    appId: "1:283455180651:web:cfddfb580d0257db06062e",
    measurementId: "G-2ZY0NGSFRX"
};

//사용 방법
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export var firebase_db = firebase.database();
