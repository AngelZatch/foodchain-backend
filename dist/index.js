"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
const schema = graphql_1.buildSchema(`
    type Query {
        hello: String
    }
`);
const app = express();
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema,
    rootValue: type_graphql_1.Root,
    graphiql: true
}));
try {
    app.listen(4000);
    console.log('Running on port 4000');
}
catch (error) {
    console.error('Cannot start server');
}
