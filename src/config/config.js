const config = {
    apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
    authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
    projectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
    senderId: String(import.meta.env.VITE_FIREBASE_SENDER_ID),
    appId: String(import.meta.env.VITE_FIREBASE_APP_ID),
    storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET)
}

export default config