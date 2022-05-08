import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findOne(){
    // SELECT * FROM COURSES LIMIT 1;
    const result = await prisma.courses.findFirst();
    console.log("=> primeiro registro inserido ", result);
    console.log("________________________________________");
}

 findOne();

 async function findLastRegister(){
    // SELECT * FROM COURSES ORDER BY ID DESC LIMIT 1;
    const result = await prisma.courses.findFirst({
        take:-1
    });
    console.log("=> último registro inserido ", result);
    console.log("________________________________________");
}

findLastRegister();

