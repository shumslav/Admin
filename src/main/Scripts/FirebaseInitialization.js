  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
  import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAIYgp4_fQM9IN3P5GI2a_s2vxNz4ysrjQ",
    authDomain: "stenograffia.firebaseapp.com",
    databaseURL: "https://stenograffia-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stenograffia",
    storageBucket: "stenograffia.appspot.com",
    messagingSenderId: "853799927087",
    appId: "1:853799927087:web:e7d954472e6558c09bb5da",
    measurementId: "G-FV1WNG0482"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const dbRef = ref(getDatabase());
get(child(dbRef, `SurfaceExchange`)).then((snapshot) => {
  if (snapshot.exists()) {
    document.write ('<table background="black" width="70%" border="1">')
    snapshot.forEach(function (child){
        document.writeln("<tr>");
        var value = child.val();
        document.writeln ("<td><img src=\""+value.imgUrlForExchange+"\"" + "width=\"189\" height=\"255\"><\/td>");
        document.writeln("<td><a>"+value.address+"</a><\/td>")
        document.writeln("<td><a>"+value.description+"</a><\/td>")
        console.log(value.address);
        document.writeln("<\/tr>");
    });
    document.body.className = 'bodyclass';
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});