import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

    let  intialValue = 0; 
    const totPerPage = 2;

    const result = await prisma.courses.findMany({
        skip:intialValue,
        take:totPerPage
    })

    console.log(result);
}

main()