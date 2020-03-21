import { config } from "dotenv";
import fetch from "fetch";

config();
const fetchUrl = fetch.fetchUrl;
const wizKey = process.env.WIZ_KEY; // copied from apiPermits.html
const wizServer = "lb1.wizcloud.co.il";
const company = process.env.WIZ_COMPANY; // wizcloud server domain, defaults to wizcloud.co.il;

// ensure authentication
export function wizCloudAuth() {
  const p = new Promise((resolve, reject) => {
    if (!wizKey || !wizServer) {
      reject({ reason: "call init() first " });
      return;
    }
    const url = `https://${wizServer}/createSession/${wizKey}/${company}`;
    fetchUrl(url, async (error, response, body) => {
      if (error != null) {
        console.log("error:", error.toString()); // Print the error if one occurred
        reject({ reason: "auth http fail", url, err: error });
        return;
      }
      resolve(await body.toString());
    });
  });

  return p;
}

export async function wizCloudCallApi(apiPath, data) {
  const p = new Promise(async (resolve, reject) => {
    wizCloudAuth()
      .then((result) => {
        const wizAuthToken = result;
        const url = `https://${wizServer}/${apiPath}`;
        const options = {
          form: data,
          headers: {
            Authorization: `Bearer ${wizAuthToken}`,
          },
          method: "POST",
        };

        fetchUrl(url, options, (error, response, body) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(body.toString());
          }
        });
      }, (error) => {
        console.log("ERR12", error);
        throw new Error("auth error");
      })
      .catch((e) => {
        console.log("ERR12", e);
        throw new Error("auth error");
      });
  });

  return p;
}
