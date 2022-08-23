import { Request, Response, NextFunction } from "express"
import { is18 } from "../../plugIns"


export const is18Plus = (req: Request, res: Response, next: NextFunction) => {
    const query: string  | undefined = req.query.is18?.toString(); 

    if (is18(query)) {
        next();
    } else {
        return res.status(404).json({response: "Drink is 18+"});
    }
} 
