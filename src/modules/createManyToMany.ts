import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createManyToMany(){
    const result = await prisma.coursesModules.create({
        data:{
            fk_id_course:"78e9dd14-3d99-4600-a28c-d9fd2d1d1414",
            fk_id_module:"598bd7b3-7014-44d6-8cb1-541bec60f96d"
        }
    })
    console.log(result)
}

createManyToMany();