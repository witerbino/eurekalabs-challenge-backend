<div align="center">
  <br/>
  <div>
    <img src="github/logo.png" width="64"/>
  </div>
  <br/>
  <br/>
  <p>
    Projeto desenvolvido para o desafio da vaga de desenvolvedor NodeJS e ReactJS na <a href="https://eurekalabs.com.br/">Eureka Labs</a></p>

<p>O objetivo do projeto era desenvolver uma API, aonde seja possível através de um endpoint passar um <strong>CEP</strong>, no primeiro momento esse cep será consultado na api do <a href="https://viacep.com.br/">Via Cep</a>, depois de consultar esse cep ele deverá ser armazenado em um banco de dados, aonde nas próximas consultas não será mais necessário consultar esse mesmo cep na API do Via Cep novamente.</p>

<p>Também apliquei alguns conceitos que venho estudando como <strong>Clean Architecture e SOLID</strong></p>

<p>O frontend do projeto pode ser visto <a href="https://github.com/witerbino/eurekalabs-challenge-frontend">aqui</a></p>
<br/>
<br/>
</div>

# Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Node Postgres](https://node-postgres.com/)
- [Postgres](https://www.postgresql.org/)
- [Axios](https://github.com/axios/axios)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

# Rodando

1. É preciso ter o docker instalado e o docker compose
2. Clone esse repositório `git clone https://github.com/witerbino/eurekalabs-challeng-backend.git`
3. Entre na pasta do projeto `cd eurekalabs-challenge-backend`
4. Execute o comando `docker-compose up`
5. Executando esse comando ele já ira subir o container do banco e da aplicação, também irá criar a tabela **address**
6. O projeto vai estar rodando no link `http://localhost:4000/api/address/{{ cep }}`

# Licença

Este projeto está licenciado sob a Licença MIT - veja a página [LICENÇA](https://opensource.org/licenses/MIT) para detalhes.