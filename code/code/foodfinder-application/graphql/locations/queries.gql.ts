const queries = `
    allLocations: [Location]!
    locationsById(locations_ids: [String]!): [Location]!
    onUserWishlist(user_id: String!): [Location]!
`; 

export default queries;