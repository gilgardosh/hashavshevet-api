import { Request, Response } from "express";
import {
  napi,
  tmpJurnalBatch,
  chkJurnalBatch,
  newJurnalBatch,
  issueJurnalBatch,
  importIndexRecords,
  deleteIndexRecords,
  importBankPageRecords,
  exportDataRecords,
  createDocument,
  showDocument,
  delDocument,
  issueDoc,
  crmActivities,
  crmActivitiesTest,
  CompaniesForToken
} from "../utils/wizcloud";

export default [
  // {
  //     path: "/",
  //     method: "get",
  //     handler: async (req: Request, res: Response) => {
  //         res.send("Hello world!");
  //     }
  // },
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/aa.html");
    }
  },
  {
    path: "/aa.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/aa.html");
    }
  },
  {
    path: "/ab.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/ab.html");
    }
  },
  {
    path: "/ad.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/ad.html");
    }
  },
  {
    path: "/ba.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/ba.html");
    }
  },
  {
    path: "/ca.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/ca.html");
    }
  },
  {
    path: "/cb.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/cb.html");
    }
  },
  {
    path: "/cc.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/cc.html");
    }
  },
  {
    path: "/cd.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/cd.html");
    }
  },
  {
    path: "/da.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/da.html");
    }
  },
  {
    path: "/ea.html",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendFile(__dirname + "/ui/ea.html");
    }
  },
  {
    path: "/method/napi",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(napi());
    }
  },
  {
    path: "/method/tmpJurnalBatch",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await tmpJurnalBatch(req.query));
    }
  },
  {
    path: "/method/chkJurnalBatch",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await chkJurnalBatch(req.query));
    }
  },
  {
    path: "/method/newJurnalBatch",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await newJurnalBatch());
    }
  },
  {
    path: "/method/issueJurnalBatch",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await issueJurnalBatch(req.query));
    }
  },
  {
    path: "/method/importIndexRecords",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await importIndexRecords(req.query));
    }
  },
  {
    path: "/method/deleteIndexRecords",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await deleteIndexRecords(req.query));
    }
  },
  {
    path: "/method/importBankPageRecords",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await importBankPageRecords(req.query));
    }
  },
  {
    path: "/method/exportDataRecords",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await exportDataRecords(req.query));
    }
  },
  {
    path: "/method/createDocument",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await createDocument(req.query));
    }
  },
  {
    path: "/method/showDocument",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await showDocument(req.query));
    }
  },
  {
    path: "/method/delDocument",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await delDocument(req.query));
    }
  },
  {
    path: "/method/issueDoc",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await issueDoc());
    }
  },
  {
    path: "/method/crmActivities",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await crmActivities(req.query));
    }
  },
  {
    path: "/method/crmActivitiesTest",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await crmActivitiesTest(req.query));
    }
  },
  {
    path: "/method/CompaniesForToken",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(await CompaniesForToken());
    }
  }
];
