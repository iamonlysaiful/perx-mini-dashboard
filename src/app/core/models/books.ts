export interface IBook {
    id: string;
    type: string;
    links: Links;
    attributes: Attributes;
    relationships: Relationships;
}

interface Attributes {
    urn: string;
    created_at: string;
    updated_at: string;
    content: string;
    properties: null;
    display_properties: DisplayProperties;
}


interface DisplayProperties {
    type: string;
    image: string;
}


interface Links {
    self: string;
}

interface Relationships {
    authors: AuthorsPublishers;
    publishers: AuthorsPublishers;
}

interface AuthorsPublishers {
    links: AuthPubLinks;
}

interface AuthPubLinks {
    self: string;
    related: string;
}