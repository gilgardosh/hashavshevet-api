const request = require("request"); //NEED TO INSTALL THIS FOR request-promise !!!
require("dotenv").config();

let wizKey = process.env.WIZ_KEY, //copied from apiPermits.html
  wizServer = "lb1.wizcloud.co.il",
  company = process.env.WIZ_COMPANY; //wizcloud server domain, defaults to wizcloud.co.il;

//ensure authentication
function wizCloudAuth() {
  let p = new Promise((resolve, reject) => {
    if (!wizKey || !wizServer) {
      reject({ reason: "call init() first " });
      return;
    }
    let url = `https://${wizServer}/createSession/${wizKey}/${company}`;

    request.get(url, function(error, response, body) {
      if (error || response.statusCode != 200) {
        console.log("error:", error); // Print the error if one occurred
        reject({ reason: "auth http fail", url, err: error });
        return;
      }
      resolve(body);
    });
  });

  return p;
}

export async function wizCloudCallApi(apiPath, data) {
  let p = new Promise(async (resolve, reject) => {
    wizCloudAuth()
      .then(result => {
        let wizAuthToken = result;

        let options = {
          url: `https://${wizServer}/${apiPath}`,
          headers: {
            Authorization: `Bearer ${wizAuthToken}`
          },
          form: data
        };

        request.post(options, function(error, response) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(response);
          }
        });
      }, error => {
        console.log("ERR12", error);
        throw new Error("auth error");
      })
      .catch(e => {
        console.log("ERR12", e);
        throw new Error("auth error");
      });
  });

  return p;
}
