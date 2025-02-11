import { google } from "googleapis";

const KEYFILEPATH = "npoca.json";
const SCOPES = ["https://www.googleapis.com/auth/drive.file"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

export const uploadFileToDrive = async (
  fileStream,
  originalFileName,
  mimeType
) => {
  const drive = google.drive({ version: "v3", auth: await auth.getClient() });

  const fileMetadata = {
    name: originalFileName,
    parents: ["root"], // Optional: The ID of the folder where you want to upload the file
  };
  const media = {
    mimeType: mimeType,
    body: fileStream,
  };

  const res = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: "id",
  });

  const fileId = res.data.id;

  await drive.permissions.create({
    fileId: fileId,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  const personalEmail = "vervew24@gmail.com";
  await drive.permissions.create({
    fileId: fileId,
    requestBody: {
      role: "writer",
      type: "user",
      emailAddress: personalEmail,
    },
  });

  const result = await drive.files.get({
    fileId: fileId,
    fields: "webViewLink",
  });

  return result.data.webViewLink;
};
