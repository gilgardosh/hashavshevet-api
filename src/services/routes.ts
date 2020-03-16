import { Request, Response } from "express";

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
            res.sendFile(__dirname + '/ui/aa.html');
        }
    },
    {
        path: "/aa.html",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.sendFile(__dirname + '/ui/aa.html');
        }
    },
    {
        path: "/ab.html",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.sendFile(__dirname + '/ui/ab.html');
        }
    }
];