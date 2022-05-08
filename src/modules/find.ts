import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findOndeByAssociativeTable(){
    const result = await prisma.coursesModules.findMany({
        include:{
            course:true,
            module:true
        }
    })

    console.log(result);
}

// findOndeByAssociativeTable();

async function findByCourse(){
    const result = await prisma.courses.findMany({
        where:{
            id:"f44e000b-a357-4e1e-99f1-3ae028c36317"
        },
        include:{
            coursesModules:true
        }
        
    })

    console.log(JSON.stringify(result));
}

// findByCourse();


async function findAllByCourse(){
    const result = await prisma.courses.findMany({
        include:{
            coursesModules:true
        }
        
    })

    console.log(JSON.stringify(result));
}

findAllByCourse();
