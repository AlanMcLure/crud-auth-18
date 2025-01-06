import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"crud-auth-18","appId":"1:511439928212:web:52b54f8a3de4e73b366d81","storageBucket":"crud-auth-18.firebasestorage.app","apiKey":"AIzaSyCdpSfSBssfKya4cGG6HSrdquSrbRwiqtA","authDomain":"crud-auth-18.firebaseapp.com","messagingSenderId":"511439928212"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
