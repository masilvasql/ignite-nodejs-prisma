import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.courses.create({
    data:{
      name:"SQL",
      duration:150,
      description: "SQL",
      teacher:{
        connectOrCreate:{
          where:{
            name:"Joice Pépe"
          },
          create:{
            name:"Joice Pépe"
          }
        }
      }
    }
  })

  console.log(result)

}

main();