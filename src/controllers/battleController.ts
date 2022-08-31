import { Request, Response } from "express";
import * as battleService from "../services/battleService";

export default async function createBattle(req: Request, res: Response) {
    const { firstUser, secondUser } = req.body;

    await battleService.createBattle(firstUser, secondUser);

}