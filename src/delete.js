"use strict";

const AWS = require("aws-sdk")

const deleteItem = async (event) => {

  const {id} = JSON.parse(event.body);

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  await dynamodb.delete({
    TableName: "MyFirstTable", 
    Key : {id}
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(
      { msg: 'Item deleted'}
    ),
  };
};


module.exports = {
    handler:deleteItem
}