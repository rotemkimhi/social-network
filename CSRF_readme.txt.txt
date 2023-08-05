CSRF_readme

Some basic flow of the project.
In our code we added a volnarbility that aloows someone to use csrf attack to change a user mail.
Inorder to do so we modify two pages in the project:
1) pages/api/auth/login.ts
2)pages/api/changeEmail.ts 
In each of them we have "two" code parts: PROTECTED & VULNERABLE

Inorder to run the attack we need to set both of them to VULNERABLE aka commiting the PROTECTED part

once we commited the POTECTED part we need to do the following:
f12 -> application -> storage -> cookies -> auth/csrf

copying the auth and csrf 
once we have them we placed them on this tamplate:

curl -X POST "http://localhost:3000/api/changeEmail" -H "Content-Type: application/json" -H "Cookie: auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImoiLCJpZCI6MTIsImVtYWlsIjoibmV3ZW1haWxAZ21haWwuY29tIiwiaWF0IjoxNjkxMTYyMDcxfQ.APEEVVS4r9M-iHCiasMbVNKVZLZUFh8mUA4qYXb6XuY"  --data "{\"newEmail\": \"newemail@gmail.com\"}"

where you need to replave the part after auth= with the auth you copied and  run the command

for the protected code you need to set both of them to PROTECTED aka commiting the VULNERABLE part

and copy paste boath the auth and the csrf you got using this process
f12 -> application -> storage -> cookies -> auth/csrf-token
in that curl command

paste the csrf-token over the key you got in the command below



curl -X POST "http://localhost:3000/api/changeEmail" -H "Content-Type: application/json" -H "Cookie: auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImoiLCJpZCI6MTIsImVtYWlsIjoibmV3ZW1haWxAZ21haWwuY29tIiwiaWF0IjoxNjkxMTYyMDcxfQ.APEEVVS4r9M-iHCiasMbVNKVZLZUFh8mUA4qYXb6XuY" --data "{\"newEmail\": \newMail@gmail.com\", \"csrfToken\":\"f30e868c9cfcc1a870adf87168a201d9832e6821130a636bf5be3c42f1cef562%7C7395bf6b739cee243b464208ad8c16b8c226945b0049d117bbb7cbaef1e01439\"}"





