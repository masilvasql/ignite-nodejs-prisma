import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main (){
    const result = await prisma.courses.update({
        where: {
            id:"3f89f654-d907-4532-ad9d-e2be005d6886"
        },
        data:{
            duration:250,   
            name:"Curso Flutter",
            description:"Curso com Leonardo Leitão"
        }
    })

    console.log(result)
}

main();