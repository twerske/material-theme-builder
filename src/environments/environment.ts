// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  key: {
    apiKey: 'AIzaSyAFxlffe78CbcKynlTiHq7VVtEx0vKoMSk'
  },
  firebase: {
    apiKey: 'AIzaSyAFxlffe78CbcKynlTiHq7VVtEx0vKoMSk',
    authDomain: 'theme-builder-1623190217839.firebaseapp.com',
    projectId: 'theme-builder-1623190217839',
    storageBucket: 'theme-builder-1623190217839.appspot.com',
    messagingSenderId: '887391964424',
    appId: '1:887391964424:web:e85922a8671630dc3330bd',
    measurementId: 'G-4JV9CPL856',
    emulators: {
      ui: {
        enabled: true,
        port: 4000
      },
      functions: {
        enabled: true,
        port: 5001
      }
    }
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
