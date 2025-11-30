const{test, expect} = require('@playwright/test');
const { request } = require('http');

var userID;

test("Get user", async({request}) => {
    const response = await request.get("https://reqres.in/api/users")
    console.log(response.json())
    expect(response.status()).toBe(200);

})

test.only("Create user", async({request})=>{
    const response = await request.post('https://reqres.in/api/users',
        {
            data : {"name": "sanjeev", "job": "Software tester"},
            headers : {"Accept" : "application/json"}
        });

    console.log(response.json());
    expect(response.status()).toBe(201);

    var res = await response.json();
    userID = res.id;

})

test("Update user", async({request}) => {
    const response = await request.post('https://reqres.in/api/users' + userID,
        {
            data : {"name": "Yadav", "job": "Software traniee"},
            headers : {"Accept" : "application/json"}
        });

    console.log(response.json());
    expect(response.status()).toBe(200);
})

test("Delete user", async({request}) => {
     const response = await request.post('https://reqres.in/api/users' + userID);
    expect(response.status()).toBe(204);
})