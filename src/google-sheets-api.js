const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',
  clientId: '1016332852556-fqauv3qn6q0cl6epp47l48ill5fb3usf.apps.googleusercontent.com',
  clientSecret: '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',
  redirectUri: 'http://localhost',
});

const sheets = google.sheets('v4');

async function appendData(spreadsheetId, range, data) {
  const authClient = await auth.getClient();
  const request = {
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    resource: { values: [data] },
  };
  try {
    await sheets.spreadsheets.values.append(request, authClient);
    console.log(`Data appended to sheet ${range}`);
  } catch (err) {
    console.error(`Error appending data to sheet ${range}: ${err}`);
  }
}

module.exports = { appendData };