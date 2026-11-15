// =====================  TATER TAPPER SETTINGS  =====================
const firebaseConfig = {
  apiKey: "AIzaSyDLyKJC_9I0FahwB34qldMsI0eAiI_3L44",
  authDomain: "tater-tapper.firebaseapp.com",
  projectId: "tater-tapper",
  storageBucket: "tater-tapper.firebasestorage.app",
  messagingSenderId: "597434611441",
  appId: "1:597434611441:web:4cb70a0b2a6a8bdec9db50"
};

// ===================================================================
// Don't change anything below this line.
window.TATER_CONFIG = { firebase: typeof firebaseConfig !== 'undefined' ? firebaseConfig : {} };
