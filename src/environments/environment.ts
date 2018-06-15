// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyCishaJ6nxZVpDcD06xE8SdyrU_S8cj1yE",
      authDomain: "beerlog-aafbc.firebaseapp.com",
      databaseURL: "https://beerlog-aafbc.firebaseio.com",
      projectId: "beerlog-aafbc",
      storageBucket: "beerlog-aafbc.appspot.com",
      messagingSenderId: "931559534745"
  }
};
