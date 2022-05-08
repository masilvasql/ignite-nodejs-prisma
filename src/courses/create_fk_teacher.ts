import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.courses.create({
    data:{
      name:"Repasse Técnico",
      duration:150,
      description: "Repasse Técnico",
      fk_id_teacher:"80054352-9b87-48e7-b206-2cb387922ef9"
    }
  })

  console.log(result)

}

main();