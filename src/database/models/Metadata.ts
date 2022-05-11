import Attribute from './Attribute';

type Metadata = {
    id: Number;
    description: String;
    external_url: String;
    image: String;
    name: String;
    attributes: Attribute[];
};

export default Metadata;
