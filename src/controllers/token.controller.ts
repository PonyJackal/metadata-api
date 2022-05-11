import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import knex from '../database/db';

async function create(req: Request, res: Response) {
    const { id, description, external_url, image, name } = req.body;
    return knex('tokens')
        .insert({
            _id: uuidv4(),
            id,
            description,
            external_url,
            image,
            name,
        })
        .then(result => {
            return res.status(201).json({ message: 'Token added!!' });
        })
        .catch(err => {
            return res.status(400).json({ error: err });
        });
}

async function findOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result = await knex('tokens').where('id', id?.toString());

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ err: err, message: 'Error' });
    }
}

export default { create, findOne };
