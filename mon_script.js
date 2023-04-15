// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQjDy0jv8gt_IXzfDjjP9E7b2vWq_nnzk",
  authDomain: "icourts.firebaseapp.com",
  projectId: "icourts",
  storageBucket: "icourts.appspot.com",
  messagingSenderId: "960059532233",
  appId: "1:960059532233:web:8b0426cab091c1b3aa7e18",
  measurementId: "G-6W0TLVSBFP"
};

firebase.initializeApp(firebaseConfig);

// Create a reference to the Firestore database
const db = firebase.firestore();

// Get form elements
const form = document.querySelector('form');
const titleInput = document.querySelector('#titre');
const descriptionInput = document.querySelector('#texte');
const textFieldInput = document.querySelector('#champ-texte');

// Add a new course document to the "courses" collection
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const description = descriptionInput.value;
  const textField = textFieldInput.value;
  
  db.collection('courses').add({
    title: title,
    description: description,
    textField: textField
  })
  .then(function(docRef) {
    console.log('Document written with ID: ', docRef.id);
    alert('Course added successfully!');
    form.reset();
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
  });
});
