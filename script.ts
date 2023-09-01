import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function criarBaby() {
  const mae = await prisma.mother.create({
    data: {
      nome: 'Maria',
      endereco: 'Rua ABC, 123',
      telefone: '123456789',
      dataNascimento: new Date('1990-01-01'),
    },
  });

  const medico = await prisma.doctor.create({
    data: {
      crm: '12345',
      nome: 'Dr. Smith',
      telefoneCelular: '987654321',
      especialidade: 'Pediatria',
    },
  });

  const baby = await prisma.baby.create({
    data: {
      nome: 'João',
      dataNascimento: new Date(),
      pesoNascimento: 3.2,
      altura: 50,
      mae: {
        connect: { id: mae.id },
      },
      medico: {
        connect: { id: medico.id },
      },
    },
  });

  console.log('Bebê criado:', baby);
}

// Chame a função para criar um bebê
criarBaby()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });