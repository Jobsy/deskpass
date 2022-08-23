import { Request, Response, NextFunction } from "express"
import { isDeskpassPresent } from "../../plugIns"

export const countriesWithDeskpass = (req: Request, res: Response, next: NextFunction) => {
    let query: string = req.query.country!.toString(); 

    if (isDeskpassPresent(query)) {
        next()
    } else {
        return res.status(404).json({response: "Deskpass not yet present"})
    }
}