import { Request, Response } from "express";
import { wizCloudCallApi } from "../utils/wizCloud";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/aa.html");
    }
  },
  {
    path: "/aa.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/aa.html");
    }
  },
  {
    path: "/ab.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ab.html");
    }
  },
  {
    path: "/ad.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ad.html");
    }
  },
  {
    path: "/ba.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ba.html");
    }
  },
  {
    path: "/ca.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ca.html");
    }
  },
  {
    path: "/cb.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/cb.html");
    }
  },
  {
    path: "/cc.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/cc.html");
    }
  },
  {
    path: "/cd.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/cd.html");
    }
  },
  {
    path: "/da.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/da.html");
    }
  },
  {
    path: "/ea.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/views/ea.html");
    }
  },
  {
    path: "/method/napi",
    method: "get",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('api/napi', {}).then(r => res.send(r));
    }
  },
  {
    path: "/method/tmpJurnalBatch",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('jtransApi/tmpBatch', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/chkJurnalBatch",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('jtransApi/chkBatch', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/newJurnalBatch",
    method: "get",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('jtransApi/newBatch', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/issueJurnalBatch",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('jtransApi/issueBatch', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/importIndexRecords",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('IndexApi/importIndex', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/deleteIndexRecords",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('IndexApi/deleteIndex', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/importBankPageRecords",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('BankPagesApi/importBankPage', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/exportDataRecords",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('ExportDataApi/exportData', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/createDocument",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('invApi/createDoc', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/showDocument",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('invApi/getDoc', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/delDocument",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('invApi/delDocument', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/issueDoc",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('invApi/issueDocument', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/crmActivities",
    method: "post",
    handler: async (req: Request, res: Response) => {
      wizCloudCallApi('crmActivitiesApi/createSchema', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/crmActivitiesTest",
    method: "post",
    handler: (req: Request, res: Response) => {
      wizCloudCallApi('crmActivitiesTest/createSchema', req.body).then(r => res.send(r));
    }
  },
  {
    path: "/method/CompaniesForToken",
    method: "get",
    handler: (req: Request, res: Response) => {
      wizCloudCallApi('CompanyListToTokenApi/TokenCompanies', req.body).then(r => res.send(r));
    }
  }
];
