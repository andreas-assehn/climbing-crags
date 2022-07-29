import * as Realm from 'realm-web';

export async function connectToRealm() {
  const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
  const app = new Realm.App({ id: REALM_APP_ID });
  const credentials = Realm.Credentials.anonymous();
  const user = await app.logIn(credentials);
  const client = app.currentUser.mongoClient('mongodb-atlas');
  return { client, user };
}

export function gradesObj() {
  const gradesObj = JSON.parse(
    '[{"id":1,"fra_routes":"-","usa_routes":"3/4"},["-","3/4"],{"id":13,"fra_routes":"3a","usa_routes":"5.3"},{"id":15,"fra_routes":"3b","usa_routes":"5.3"},{"id":17,"fra_routes":"3c","usa_routes":"5.3"},{"id":21,"fra_routes":"4a","usa_routes":"5.4"},{"id":23,"fra_routes":"4b","usa_routes":"5.5"},["2","5.1"],{"id":29,"fra_routes":"5a","usa_routes":"5.7"},{"id":30,"fra_routes":"5a+","usa_routes":"5.7"},{"id":31,"fra_routes":"5b","usa_routes":"5.8"},{"id":32,"fra_routes":"5b+","usa_routes":"5.8"},{"id":33,"fra_routes":"5c","usa_routes":"5.9"},["3a","5.3"],{"id":36,"fra_routes":"6a","usa_routes":"5.10a"},["3b","5.3"],{"id":40,"fra_routes":"6b","usa_routes":"5.10c"},["3c","5.3"],{"id":44,"fra_routes":"6c","usa_routes":"5.11a"},{"id":46,"fra_routes":"6c+","usa_routes":"5.11b"},{"id":49,"fra_routes":"7a","usa_routes":"5.11d"},["4a","5.4"],{"id":53,"fra_routes":"7b","usa_routes":"5.12b"},["4b","5.5"],{"id":57,"fra_routes":"7c","usa_routes":"5.12d"},["4c","5.6"],{"id":62,"fra_routes":"8a","usa_routes":"5.13b"},{"id":64,"fra_routes":"8a+","usa_routes":"5.13c"},{"id":66,"fra_routes":"8b","usa_routes":"5.13d"},["5a","5.7"],["5a+","5.7"],["5b","5.8"],["5b+","5.8"],["5c","5.9"],["5c+","5.9"],{"id":76,"fra_routes":"9a/+","usa_routes":"5.14d/.15a"},["6a","5.10a"],{"id":78,"fra_routes":"9a+/9b","usa_routes":"5.15a/b"},["6a+","5.10b"],{"id":80,"fra_routes":"9b/+","usa_routes":"5.15b/c"},["6b","5.10c"],null,["6b+","5.10d"],null,["6c","5.11a"],null,["6c+","5.11b"],null,null,["7a","5.11d"],null,["7a+","5.12a"],null,["7b","5.12b"],null,["7b+","5.12c"],null,["7c","5.12d"],null,["7c+","5.13a"],null,null,["8a","5.13b"],null,["8a+","5.13c"],null,["8b","5.13d"],null,["8b+","5.14a"],null,["8c","5.14b"],["8c/+","5.14b/c"],["8c+","5.14c"],["8c+/9a","5.14c/d"],null,["9a","5.14d"],["9a/+","5.14d/.15a"],["9a+","5.15a"],["9a+/9b","5.15a/b"],["9b","5.15b"],["9b/+","5.15b/c"],["9b+","5.15c"]]',
  );
  return gradesObj;
}

// TODO: move gradesObj to different utils
// const client = app.currentUser.mongoClient('mongodb-atlas');
// const gradesDb = client.db('Climbing-crags').collection('grades');
// const grade = await gradesDb.find();
