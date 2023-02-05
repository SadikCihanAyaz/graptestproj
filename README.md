## creating mock data was used following web site

https://beeceptor.com

## dont forget replace following code part with your beeceptor endpoint

https://testmocktest.free.beeceptor.com/graphql


## response body must be following. (Click Mocking Rules and add following response body) (Secondly before try to add that response body to beeceptor start the application with npm start command. You should see the request on the beeceptor website.)

{
  "data": {
    "users": [
      {
        "name": "User 1",
        "email": "user1@example.com"
      },
      {
        "name": "User 2",
        "email": "user2@example.com"
      }
    ]
  }
}
