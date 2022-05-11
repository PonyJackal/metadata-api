import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import knex from '../database/db';
import Token from '../database/models/Token';
import Attribute from '../database/models/Attribute';
import Metadata from '../database/models/Metadata';

async function create(req: Request, res: Response) {
    const { id, description, external_url, image, name, attributes } = req.body;
    return knex('tokens')
        .insert({
            _id: uuidv4(),
            id,
            description,
            external_url,
            image,
            name,
        })
        .returning('id')
        .then(id => {
            const attributesData = attributes.map((ele: Attribute) => ({
                ...ele,
                token_id: id[0],
                _id: uuidv4(),
            }));
            return knex('attributes')
                .insert(attributesData)
                .then(result => {
                    return res.status(201).json({ message: 'Token added!!' });
                });
        })
        .catch(err => {
            return res.status(400).json({ error: err });
        });
}

async function findOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result: Token[] = await knex
            .select(['id', 'description', 'external_url', 'image', 'name'])
            .from('tokens')
            .where('id', id?.toString());

        if (result.length == 0) {
            return res.status(404).json({ message: 'token not found' });
        }

        const attributes: Attribute[] = await knex
            .select(['display_type', 'trait_type', 'value'])
            .from('attributes')
            .where('token_id', id?.toString());

        const tokenMetadata: Metadata = {
            ...result[0],
            attributes,
        };

        return res.status(200).json(tokenMetadata);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ err: err, message: 'Error' });
    }
}

async function update(req: Request, res: Response) {
    const { id } = req.params;
    const { description, external_url, image, name } = req.body;

    return knex('tokens')
        .update({
            id,
            description,
            external_url,
            image,
            name,
        })
        .where({ id })
        .then(result => {
            return res.status(201).json({ message: 'Token updated!!' });
        })
        .catch(err => {
            return res.status(400).json({ error: err });
        });
}

async function remove(req: Request, res: Response) {
    const { id } = req.params;
    return knex('tokens')
        .del()
        .where({ id })
        .then(result => {
            return res.status(201).json({ message: 'Token removed!!' });
        })
        .catch(err => {
            return res.status(400).json({ error: err });
        });
}

export default { create, findOne, update, remove };
