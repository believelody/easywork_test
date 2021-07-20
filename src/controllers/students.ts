import { Application, NextFunction } from "express";

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
    // return res.status(200).json({
    //     message: 'pong'
    // });
};

export default { getStudents }