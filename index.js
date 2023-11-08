/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require('firebase-functions');
const {onRequest} = require('firebase-functions/v2/https');
const {onDocumentCreated} = require('firebase-functions/v2/firestore');
const admin = require('firebase-admin');
// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require('firebase-admin/app');

initializeApp();

exports.hiArriversary = onRequest((request, response) => {
  logger.info('Hello logs!', {structuredData: true});
  response.send({status: 'success', data: 'Hello from Firebase!'});
});
