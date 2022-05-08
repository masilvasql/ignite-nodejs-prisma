import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(){
    const result = await prisma.modules.create({
        data:{
            description:"Aprendendo Firebase do zero",
            name:"Aprendendo Firebase",
            coursesModules:{
                create:{
                    course:{
                        connect:{
                            id:"22157da6-4314-4ae7-8435-e1b51810ec8f"
                        }
                    }
                }
            }
        }
    })
    console.log(result);
}

create();