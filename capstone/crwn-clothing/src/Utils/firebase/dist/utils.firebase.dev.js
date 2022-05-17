"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserAuthWithEmailAndPassword = exports.createUserDocumentFromAuth = exports.db = exports.signInWithGooglePopup = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCTjfOzuvWuv06KcBF_TEehDgFYNdD_k9E",
  authDomain: "crowndb-64b9e.firebaseapp.com",
  projectId: "crowndb-64b9e",
  storageBucket: "crowndb-64b9e.appspot.com",
  messagingSenderId: "435202955284",
  appId: "1:435202955284:web:e99e346b17a1627fb4ef01",
  measurementId: "G-MNLCJHNDYN"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var provider = new _auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
var auth = (0, _auth.getAuth)();
exports.auth = auth;

var signInWithGooglePopup = function signInWithGooglePopup() {
  return (0, _auth.signInWithPopup)(auth, provider);
};

exports.signInWithGooglePopup = signInWithGooglePopup;
var db = (0, _firestore.getFirestore)();
exports.db = db;

var createUserDocumentFromAuth = function createUserDocumentFromAuth(userAuth) {
  var userDocRef, userSnapshot, displayName, email, createdAt;
  return regeneratorRuntime.async(function createUserDocumentFromAuth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userDocRef = (0, _firestore.doc)(db, "users", userAuth.uid);
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDoc)(userDocRef));

        case 3:
          userSnapshot = _context.sent;

          if (userSnapshot.exists()) {
            _context.next = 16;
            break;
          }

          displayName = userAuth.displayName, email = userAuth.email;
          createdAt = new Date();
          _context.prev = 7;
          _context.next = 10;
          return regeneratorRuntime.awrap((0, _firestore.setDoc)(userDocRef, {
            displayName: displayName,
            email: email,
            createdAt: createdAt
          }));

        case 10:
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](7);
          console.log("error creating user", _context.t0.message);

        case 15:
          return _context.abrupt("return", userDocRef);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 12]]);
};

exports.createUserDocumentFromAuth = createUserDocumentFromAuth;

var createUserAuthWithEmailAndPassword = function createUserAuthWithEmailAndPassword(email, password) {
  return regeneratorRuntime.async(function createUserAuthWithEmailAndPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!email || !password)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return");

        case 2:
          (0, _auth.createUserWithEmailAndPassword)(auth, email, password);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.createUserAuthWithEmailAndPassword = createUserAuthWithEmailAndPassword;