import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    const random = (n: number) => {
        return Math.floor(Math.random() * n);
    };

    const tokens = [
        {
            id: 0,
            description:
                'Friendly OpenSea Creature that enjoys long swims in the ocean. 0',
            external_url: 'https://openseacreatures.io/0',
            image: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/0.png',
            name: 'Dave Starbelly 0',
        },
        {
            id: 1,
            description:
                'Friendly OpenSea Creature that enjoys long swims in the ocean. 1',
            external_url: 'https://openseacreatures.io/1',
            image: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/1.png',
            name: 'Dave Starbelly 1',
        },
        {
            id: 2,
            description:
                'Friendly OpenSea Creature that enjoys long swims in the ocean. 2',
            external_url: 'https://openseacreatures.io/2',
            image: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/2.png',
            name: 'Dave Starbelly 2',
        },
        {
            id: 3,
            description:
                'Friendly OpenSea Creature that enjoys long swims in the ocean. 3',
            external_url: 'https://openseacreatures.io/3',
            image: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png',
            name: 'Dave Starbelly 3',
        },
    ];

    const attributes = [
        {
            id: 0,
            trait_type: 'Base',
            value: 'Starfish',
            token_id: tokens[random(4)].id,
        },
        {
            id: 1,
            trait_type: 'Eyes',
            value: 'Big',
            token_id: tokens[random(4)].id,
        },
        {
            id: 2,
            trait_type: 'Mouth',
            value: 'Surprised',
            token_id: tokens[random(4)].id,
        },
        {
            id: 3,
            trait_type: 'Stamina',
            value: 'Big',
            token_id: tokens[random(4)].id,
        },
        {
            id: 4,
            trait_type: 'Personality',
            value: 'Sad',
            token_id: tokens[random(4)].id,
        },
        {
            id: 5,
            trait_type: 'Aqua Power',
            value: '40',
            display_type: 'boost_number',
            token_id: tokens[random(4)].id,
        },
        {
            id: 6,
            trait_type: 'Stamina Increase',
            value: '10',
            display_type: 'boost_percentage',
            token_id: tokens[random(4)].id,
        },
        {
            id: 7,
            trait_type: 'Generation',
            value: '2',
            display_type: 'number',
            token_id: tokens[random(4)].id,
        },
        {
            id: 8,
            trait_type: 'Base',
            value: 'Starfish',
            token_id: tokens[random(4)].id,
        },
        {
            id: 9,
            trait_type: 'Mouth',
            value: 'Surprised',
            token_id: tokens[random(4)].id,
        },
        {
            id: 10,
            trait_type: 'Stamina',
            value: 'Big',
            token_id: tokens[random(4)].id,
        },
        {
            id: 11,
            trait_type: 'Personality',
            value: 'Sad',
            token_id: tokens[random(4)].id,
        },
        {
            id: 12,
            trait_type: 'Aqua Power',
            value: '40',
            display_type: 'boost_number',
            token_id: tokens[random(4)].id,
        },
        {
            id: 13,
            trait_type: 'Stamina Increase',
            value: '10',
            display_type: 'boost_percentage',
            token_id: tokens[random(4)].id,
        },
        {
            id: 14,
            trait_type: 'Generation',
            value: '2',
            display_type: 'number',
            token_id: tokens[random(4)].id,
        },
        {
            id: 15,
            trait_type: 'Eyes',
            value: 'Big',
            token_id: tokens[random(4)].id,
        },
    ];

    // Deletes ALL existing entries
    await knex('tokens').del();
    await knex('attributes').del();

    // Inserts seed entries
    await knex('tokens').insert(tokens);
    await knex('attributes').insert(attributes);
}
