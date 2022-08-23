import { Request, Response, NextFunction } from "express"
import { isAlcoholic } from "../../plugIns"

export const nonAlcoholic = (req: Request, res: Response, next: NextFunction) => {
    const query: string  | undefined = req.query.alcoholic?.toString(); 
    if (!isAlcoholic(query)) {
        next();
    } else {
        return res.status(404).json({response: "Drink is Alcoholic"});
    }
}