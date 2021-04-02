import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { Root } from "type-graphql";

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: Root,
    graphiql: true
}));
try {
    app.listen(4000);
    console.log('Running on port 4000');
} catch (error) {
    console.error('Cannot start server')
}