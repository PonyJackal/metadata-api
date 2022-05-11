import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    const random = (n: number) => {
        return Math.floor(Math.random() * n);
    };

    const countries = [
        { name: 'country_01', _id: uuidv4() },
        { name: 'country_02', _id: uuidv4() },
        { name: 'country_03', _id: uuidv4() },
        { name: 'country_04', _id: uuidv4() },
        { name: 'country_05', _id: uuidv4() },
        { name: 'country_06', _id: uuidv4() },
        { name: 'country_07', _id: uuidv4() },
        { name: 'country_08', _id: uuidv4() },
        { name: 'country_09', _id: uuidv4() },
        { name: 'country_10', _id: uuidv4() },
        { name: 'country_11', _id: uuidv4() },
    ];

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

    const teams = [
        { name: 'teams_01', _id: uuidv4() },
        { name: 'teams_02', _id: uuidv4() },
        { name: 'teams_03', _id: uuidv4() },
        { name: 'teams_04', _id: uuidv4() },
        { name: 'teams_05', _id: uuidv4() },
        { name: 'teams_06', _id: uuidv4() },
        { name: 'teams_07', _id: uuidv4() },
        { name: 'teams_08', _id: uuidv4() },
        { name: 'teams_09', _id: uuidv4() },
        { name: 'teams_10', _id: uuidv4() },
        { name: 'teams_11', _id: uuidv4() },
    ];

    // prettier-ignore
    const pilots = [
        { _id: uuidv4(), name: 'pilot_01', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_02', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_03', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_04', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_05', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_06', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_07', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_08', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_09', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_10', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
        { _id: uuidv4(), name: 'pilot_11', country_id: countries[random(11)]._id, team_id: teams[random(11)] },
    ];

    // prettier-ignore
    const circuits = [
        { _id: uuidv4(), year: 2010, name: 'circuit_01', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2011, name: 'circuit_02', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2012, name: 'circuit_03', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2013, name: 'circuit_04', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2014, name: 'circuit_05', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2015, name: 'circuit_06', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2016, name: 'circuit_07', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2017, name: 'circuit_08', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2018, name: 'circuit_09', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2019, name: 'circuit_10', country_id: countries[random(11)]._id },
        { _id: uuidv4(), year: 2020, name: 'circuit_11', country_id: countries[random(11)]._id },
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
            id: 6,
            trait_type: 'Generation',
            value: '2',
            display_type: 'number',
            token_id: tokens[random(4)].id,
        },
        {
            id: 7,
            trait_type: 'Base',
            value: 'Starfish',
            token_id: tokens[random(4)].id,
        },
        {
            id: 8,
            trait_type: 'Eyes',
            value: 'Big',
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
    ];

    // prettier-ignore
    const championships = [
        { _id: uuidv4(), placing: 2010, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2011, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2012, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2013, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2014, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2015, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2016, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2017, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2018, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2019, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
        { _id: uuidv4(), placing: 2020, circuit_id: circuits[random(11)]._id, team_id: teams[random(11)]._id },
    ];

    // Deletes ALL existing entries
    await knex('tokens').del();
    await knex('attributes').del();

    // Inserts seed entries
    await knex('tokens').insert(tokens);
    await knex('attributes').insert(attributes);
}
