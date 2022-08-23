import path from "path/posix";
import { Request, Response, NextFunction } from "express"

const proxy = (req: Request, res: Response, next: NextFunction) => {

    let reqPath = path.join(__dirname, '../deskpassServices/');
    const deskpassApprovedFetchSites = ["cocktail", "country", "dog"];
    const deskpassApprovedServices = ["servicea", "serviceb", "servicec"];
    const requestURL = req.url.split('/')[2];
    const requestService = req.url.split('/')[1];

    if (deskpassApprovedFetchSites.includes(requestURL)) {
        next();
    } else if (deskpassApprovedServices.includes(requestService)) {
        res.sendFile(`${requestService}.html`, { root: reqPath });
    } else {
        return res.status(404).json({response: "Unapproved site"});
    };
}

export default proxy;