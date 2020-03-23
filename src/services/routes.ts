import { Request, Response } from "express";
import { wizCloudCallApi } from "../utils/wizCloud";
import { wizCloudTest } from "../utils/wizcloud-test";

export default [
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/aa.html");
    },
    method: "get",
    path: "/",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/aa.html");
    },
    method: "get",
    path: "/aa.html",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ab.html");
    },
    method: "get",
    path: "/ab.html",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ad.html");
    },
    method: "get",
    path: "/ad.html",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ba.html");
    },
    method: "get",
    path: "/ba.html",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ca.html");
    },
    method: "get",
    path: "/ca.html",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/cb.html");
    },
    method: "get",
    path: "/cb.html",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/cc.html");
    },
    method: "get",
    path: "/cc.html",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/cd.html");
    },
    method: "get",
    path: "/cd.html",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/da.html");
    },
    method: "get",
    path: "/da.html",
  },
  {
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ea.html");
    },
    method: "get",
    path: "/ea.html",
  },
  {
    handler: (req: Request, res: Response) => {
      wizCloudCallApi("CompanyListToTokenApi/TokenCompanies", req.body).then((r) => res.send(r));
    },
    method: "get",
    path: "/method/CompaniesForToken",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("api/napi", {}).then((r) => res.send(r));
    },
    method: "get",
    path: "/method/napi",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("jtransApi/tmpBatch", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/tmpJurnalBatch",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("jtransApi/chkBatch", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/chkJurnalBatch",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("jtransApi/newBatch", req.body).then((r) => res.send(r));
    },
    method: "get",
    path: "/method/newJurnalBatch",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("jtransApi/issueBatch", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/issueJurnalBatch",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("IndexApi/importIndex", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/importIndexRecords",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("IndexApi/deleteIndex", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/deleteIndexRecords",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("BankPagesApi/importBankPage", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/importBankPageRecords",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("ExportDataApi/exportData", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/exportDataRecords",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("invApi/createDoc", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/createDocument",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("invApi/getDoc", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/showDocument",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("invApi/delDocument", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/delDocument",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("invApi/issueDocument", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/issueDoc",
  },
  {
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi("crmActivitiesApi/createSchema", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/crmActivities",
  },
  {
    handler: (req: Request, res: Response) => {
      wizCloudCallApi("crmActivitiesTest/createSchema", req.body).then((r) => res.send(r));
    },
    method: "post",
    path: "/method/crmActivitiesTest",
  },
  {
    handler: (req: Request, res: Response) => {
      wizCloudTest().then((r) => res.send(r));
    },
    method: "get",
    path: "/test",
  },
];
