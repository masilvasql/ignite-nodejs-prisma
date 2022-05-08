import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteRegister(){
    const result = await prisma.coursesModules.delete({
        where:{
            id:"228622cf-0035-438a-8d21-3746d2e393dd"
        }
    })
    console.log(result)
}

deleteRegister();