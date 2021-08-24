// Remove line breaks before putting data: https://www.textfixer.com/tools/remove-line-breaks.php
const data = `10019200, Alan Flavio Nascimento de Oliveira Santos, 80.00, 39.76 / 10003904, Alexandre Emiliano Lessa Carvalho, 89.00, 30.31 / 10000161, Aline Almeida Gomes, 84.00, 39.72 / 10006265, Ana Gabriela Menezes Cavalcanti Pimentel, 81.00, 39.78 / 10019135, Anderson Fernando de Carvalho Gomes, 76.00, 39.92 / 10006165, Andre Avelino Barroso Badin Telles, 85.00, 39.90 / 10007237, Arlon Gravata Almeida Lima, 82.00, 39.63 / 10000336, Arthur Acioli Xavier, 78.00, 39.85 / 10000366, Azlan dos Anjos Silva, 80.00, 39.91 / 10026268, Bruno Leonardo da Silva Alves, 79.00, 0.00 / 10020690, Bruno Pereira de Medeiros Silva, 76.00, 30.29 / 10012759, Carlos Felipe Santos Silva, 84.00, 30.32 / 10004183, Carolina Ardana Ferreira, 78.00, 39.72 / 10007719, Christiano Rodrigo Chaves Magalhaes Abreu, 87.00, 39.69 / 10014050, Clarissa Maria Carvalho Amorim, 77.00, 39.89 / 10016664, Claudio Guilherme Cardoso Mendonca, 85.00, 39.48 / 10012164, Cristiano Lins Batista Silva, 84.00, 30.14 / 10017030, Davi Maximo de Oliveira Junior, 77.00, 30.11 / 10000474, Diego Jose Sousa de Magalhaes, 78.00, 30.46 / 10002600, Diogo Albuquerque Costa Paes, 88.00, 40.00 / 10014674, Emanoel Barros Barboza de Carvalho, 82.00, 29.75 / 10015745, Felipe Carlos Ramalho, 76.00, 39.28 / 10016137, Felipe Duarte Silva Oliveira, 83.00, 39.68 / 10001229, Felipe Teixeira Araujo, 77.00, 30.13 / 10013480, Fidel Comino Medeiros, 88.00, 39.88 / 10017857, Filipe Sostenes Feijo dos Santos, 77.00, 39.83 / 10017765, Flavio Antonio Andrade de Lima, 79.00, 30.23 / 10015331, Gabriel Dantas da Cruz, 91.00, 39.69 / 2 10009491, Gabriel Matheus Silva Lima, 84.00, 39.91 / 10022615, Gabriel Medeiros de Amorim Nobre, 77.00, 39.45 / 10016063, Gabriel Teodoro Maciel Dias, 80.00, 39.62 / 10022380, Gustavo de Oliveira Gama, 79.00, 39.90 / 10026259, Helmiton Valdemar da Silva Filho, 86.00, 39.83 / 10001378, Hugo de Santana Maia, 87.00, 38.86 / 10005211, Jailson Florencio da Silva, 76.00, 30.00 / 10008404, Jamerson Willian da Silva Costa, 76.00, 39.77 / 10023316, Janison Oliveira Paz Rodrigues, 78.00, 39.69 / 10003792, Joanisio Pita de Omena Neto, 76.00, 39.77 / 10005251, Joao Gabriel Bonifacio Presbitero Xavier, 77.00, 39.50 / 10024162, Joao Lucas Bertolino Cafe dos Santos, 79.00, 39.50 / 10016475, Joao Paulo de Jesus Mendonca, 76.00, 39.82 / 10001923, Jonathan de Oliveira Cerqueira, 77.00, 39.77 / 10017496, Jose Thomas Fonseca Ferreira Silva, 78.00, 39.81 / 10009007, Josinaldo Jose dos Santos Junior, 87.00, 39.65 / 10011494, Julio Almeida de Oliveira, 87.00, 39.87 / 10013627, Julio Cesar Teixeira Leao, 76.00, 39.71 / 10008775, Kamila Maria Rodrigues Alves, 80.00, 39.58 / 10007407, Lucas de Souza Fernandes, 80.00, 39.73 / 10006959, Luiz Andre Eustaquio de Melo Cisti, 94.00, 39.36 / 10002887, Luiz Andrei Valenca Farias, 81.00, 39.53 / 10000174, Madson Filipe Santos Viana Henrique, 78.00, 39.78 / 10004967, Marcos Vinicius Nascimento Diniz Santos, 83.00, 39.67 / 10024917, Marcos Vinicius Vieira dos Santos, 77.00, 39.67 / 10019029, Marcus Magnum de Araujo Saraiva, 84.00, 39.75 / 10016338, Maria Eduarda Pereira David, 76.00, 39.81 / 10009392, Maria Leydjane da Silva Machado, 80.00, 39.80 / 10004598, Mariana dos Santos Dantas, 85.00, 39.91 / 10000581, Max Willian dos Santos Cavalcante, 76.00, 30.05 / 10006681, Nicolas Gabriel Gomes dos Santos, 79.00, 39.38 / 10019436, Paulo Arthur Cavalcante Leandro, 76.00, 39.68 / 10015817, Rafael Santos Feitosa, 78.00, 39.63 / 10014486, Rafael Silva Dantas Capatto, 90.00, 39.77 / 10011098, Ramon Cardoso Lima, 76.00, 39.23 / 10019824, Raul Teixeira de Albuquerque, 81.00, 30.27 / 10006760, Roesio Oliveira Santos, 80.00, 39.96 / 10010236, Ruan Crystoph Tavares dos Santos, 79.00, 30.21 / 10012364, Sharllisson Wevinne Mota Cavalcante, 87.00, 30.47 / 10015255, Silas Olimpio Prado, 85.00, 39.59 / 10010828, Tarcisio Fernando Honorio da Silva, 78.00, 30.20 / 10005950, Tassio Felipe Honorio da Silva, 79.00, 39.74 / 10010729, Thamyson Medeiros de Santana, 80.00, 18.59 / 10013100, Tulio Henrique da Silva Queiroz, 80.00, 39.93 / 10000053, Vitor Gomes Neto, 76.00, 39.66`

const candidatos = data.split('/')
let notas = []
let classificacao = []

// Sum grade
candidatos.forEach((value) => {
  const splittedValue = value.split(',')

  const inscricao = splittedValue[0].trim()
  const nome = splittedValue[1].trim()
  const notaObjetiva = Number(splittedValue[2])
  const notaDiscursiva = Number(splittedValue[3])
  const notaTotal = notaObjetiva + notaDiscursiva

  notas.push({ inscricao, nome, notaObjetiva, notaDiscursiva, notaTotal })
})

// Sort array `notas` from top to bottom in order
notas.sort((a, b) => b.notaTotal - a.notaTotal)

// Order all candidates
notas.forEach((value, index) => {
  console.log(`${index + 1}° colocado: ${value.nome} (Objetiva: ${value.notaObjetiva}, Discursiva: ${value.notaDiscursiva}, Total: ${value.notaTotal})`)
})
