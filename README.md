External libs: 

https://github.com/typicode/json-server
https://chancejs.com/usage/node.html

To run the project you can:
1. npm install
2. npm run start2

You can perform a query by importing the collection available in ./Insomnia_2022-07-26.json

The script start contains the following options
`$ json-server src/dynamic_db/index.js --port=7000 --id`
* --port is the port we want the API to run
* --id means that API will accept this as parameter (that's why a fake id was inserted to all faker objects in this commit: c22df3a9ecda4b86d7b1d2a65ab228d61e1fcc74)

The folder sampleData contains some collection our team has collected and based on these collections the faker were built. sampleData folder is useless in the application.