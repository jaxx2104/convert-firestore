#! /usr/bin/env node

require('dotenv').config()

const firebase = require('firebase')
const content = require('./xxxxxxxx-XXXXX-export.json')

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

content &&
  Object.keys(content).forEach(contentKey => {
    const nestedContent = content[contentKey]
    if (typeof nestedContent === 'object') {
      Object.keys(nestedContent).forEach(docTitle => {
        firebase
          .firestore()
          .collection(contentKey)
          .doc(docTitle)
          .set(nestedContent[docTitle])
      })
    }
  })
