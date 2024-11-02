# Calculadora de Ranqueadas
Este projeto foi proposto pela [Digital Innovation One](https://www.dio.me/) como parte do **bootcamp GFT Start #6 - Lógica de Programação.**

O projeto calcula o saldo de vitórias em partidas ranqueadas e determina o nível do jogador com base nesse saldo. Utiliza funções e estruturas de decisão para classificar o nível e exibir o resultado no console.

## 🚀 Tecnologias Utilizadas
- JavaScript
- Node.js

## 📋 Pré-requisitos
- Node.js instalado

## ⚙️ Como Executar o Projeto
1. **Clone este repositório** em sua máquina:
   ```bash
   git clone https://github.com/LucasNotaro/calculadora-partidas-rankeadas
   ```
2. **Navegue até o diretório do projeto:**
    ```bash
    cd calculadora-partidas-rankeadas
    ```
3. **No arquivo index.js altere os valores das variaveis de Vitorias e Derrotas conforme desejado para testar diferentes saldos e níveis:**
    ```bash
    let vitorias = 89;  // Altere este valor
    let derrotas = 21;  // Altere este valor
    ```

3. **Execute o arquivo usando Node.js:**
    ```bash
    node index.js
    ```
4. **Visualize o resultado: O saldo e nível do jogador serão exibidos no console. Exemplo de saída:**
    ```bash
    O Herói tem saldo de 68 e está no nível de Ouro
    ```
<br><br>
# Descrição do Desafio Proposto:
## Calculadora de partidas Rankeadas
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"