import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, doc, getDocFromServer } from "firebase/firestore";
import firebaseConfig from "../firebase-applet-config.json";

let app, auth, db;
let isConfigured = false;

if (firebaseConfig.projectId) {
    isConfigured = true;
    try {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        
        // Initialize Firestore with the specific databaseId from config
        db = initializeFirestore(app, {
            localCache: persistentLocalCache({
                tabManager: persistentMultipleTabManager()
            })
        }, (firebaseConfig as any).firestoreDatabaseId || "(default)");

        // CRITICAL CONSTRAINT: Test connection on boot
        const testConnection = async () => {
            try {
                await getDocFromServer(doc(db, 'test', 'connection'));
                console.log("Firestore connection verified.");
            } catch (error) {
                if(error instanceof Error && error.message.includes('the client is offline')) {
                    console.error("Please check your Firebase configuration: Client is offline.");
                } else {
                    console.warn("Initial Firestore connection test failed (expected if collection doesn't exist):", error);
                }
            }
        };
        testConnection();
        
    } catch (error) {
        console.warn("Error initializing Firebase (Offline Mode active):", error);
        isConfigured = false;
    }
}

export { db, auth, isConfigured, onAuthStateChanged, signInAnonymously };
