const axios = require('axios')
const graphql = require('graphql')

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema, GraphQLBoolean } = graphql

//LaunchType
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    id: {type:GraphQLString},
    flight_number: { type: GraphQLInt },
    name: {type:GraphQLString},
    cores:{
      type: new GraphQLList(CoresType) ,
    } 
  }),
})

//CoresType
const CoresType = new GraphQLObjectType({
  name: 'Core',
  fields: () => ({
    core: { type: GraphQLString },
    flight: { type: GraphQLInt }
  }),
})

//RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: ()=>({
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, agrs) {
        return axios.get('https://api.spacexdata.com/v4/launches')
          .then(res => res.data);
      }
    },
    launch: {
      type: LaunchType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v4/launches/${args.id}`)
          .then(res => res.data);
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery
})