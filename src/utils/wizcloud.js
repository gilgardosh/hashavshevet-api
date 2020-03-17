const request = require("request"); //NEED TO INSTALL THIS FOR request-promise !!!
require("dotenv").config();

let wizAuthToken = undefined, //token aquired from wizcloud using the wizKey
  wizKey = process.env.WIZ_KEY, //copied from apiPermits.html
  wizServer = "lb1.wizcloud.co.il",
  company = process.env.WIZ_COMPANY; //wizcloud server domain, defaults to wizcloud.co.il;

//ensure authentication
function auth(company) {
  let p = new Promise((resolve, reject) => {
    if (wizAuthToken) {
      resolve();
    }

    if (!wizKey || !wizServer) {
      reject({ reason: "call init() first " });
      return;
    }
    let url = `https://${wizServer}/createSession/${wizKey}/${company}`;

    request(url, function(error, response, body) {
      if (error || response.statusCode != 200) {
        console.log("error:", error); // Print the error if one occurred
        reject({ reason: "auth http fail", url, err: error });
        return;
      }
      wizAuthToken = body;
      // console.log("wizAuthToken",response.statusCode,wizAuthToken)
      resolve();
    });
  });

  return p;
}

async function callApi(apiPath, company, data) {
  let p = new Promise(async (resolve, reject) => {
    await auth(company).catch(e => {
      console.log("ERR12", e);
      throw new Error("auth error");
    }); //check auth

    let options = {
      url: `https://${wizServer}/${apiPath}`,
      headers: {
        Authorization: `Bearer ${wizAuthToken}`
      },
      form: data
    };
    //console.log("ZZZ", options);
    request.post(options, function(error, response, body) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
  return p;
}

async function napi(data) {
  return callApi("api/napi", company, data);
}
//jurnal
async function tmpJurnalBatch(data) {
  return callApi("jtransApi/tmpBatch", company, data);
}
async function chkJurnalBatch(data) {
  return callApi("jtransApi/chkBatch", company, data);
}
async function newJurnalBatch(data) {
  return callApi("jtransApi/newBatch", company, data);
}
async function issueJurnalBatch(data) {
  return callApi("jtransApi/issueBatch", company, data);
}
//index
async function importIndexRecords(data) {
  return callApi("IndexApi/importIndex", company, data);
}
async function deleteIndexRecords(data) {
  return callApi("IndexApi/deleteIndex", company, data);
}
//bankpages
async function importBankPageRecords(data) {
  return callApi("BankPagesApi/importBankPage", company, data);
}
//data export
async function exportDataRecords(data) {
  return callApi("ExportDataApi/exportData", company, data);
}
//inv documents
async function createDocument(data) {
  return callApi("invApi/createDoc", company, data);
}
async function showDocument(data) {
  return callApi("invApi/getDoc", company, data);
}
async function delDocument(data) {
  return callApi("invApi/delDocument", company, data);
}
async function issueDoc(data) {
  return callApi("invApi/issueDocument", company, data);
}
//crm
async function crmActivities(data) {
  return callApi("crmActivitiesApi/createSchema", company, data);
}
async function crmActivitiesTest(data) {
  return callApi("crmActivitiesTest/createSchema", company, data);
}
//companies list
async function CompaniesForToken() {
  return callApi("CompanyListToTokenApi/TokenCompanies");
}

module.exports.napi = napi;
// inv doc
module.exports.createDocument = createDocument;
module.exports.showDocument = showDocument;
module.exports.delDocument = delDocument;
module.exports.issueDoc = issueDoc;
//jurnal
module.exports.tmpJurnalBatch = tmpJurnalBatch;
module.exports.newJurnalBatch = newJurnalBatch;
module.exports.chkJurnalBatch = chkJurnalBatch;
module.exports.issueJurnalBatch = issueJurnalBatch;
//index
module.exports.importIndexRecords = importIndexRecords;
module.exports.deleteIndexRecords = deleteIndexRecords;
//bankpages
module.exports.importBankPageRecords = importBankPageRecords;
//companies list
module.exports.CompaniesForToken = CompaniesForToken;
//exportdata
module.exports.exportDataRecords = exportDataRecords;
//crm
module.exports.crmActivities = crmActivities;
module.exports.crmActivitiesTest = crmActivitiesTest;
