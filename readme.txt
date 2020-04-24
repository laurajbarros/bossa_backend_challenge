OK 0: A API deve responder na porta 3000
OK: Deve haver uma rota para listar todas as ferramentas cadastradas

            [
                {
                    id: 1, // ou qualquer outro identificador
                    title: "Notion",
                    link: "https://notion.so",
                    description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
                    tags: [
                        "organization",
                        "planning",
                        "collaboration",
                        "writing",
                        "calendar"
                    ]
                },
                {
                    id: 2,
                    title: "json-server",
                    link: "https://github.com/typicode/json-server",
                    description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
                    tags: [
                        "api",
                        "json",
                        "schema",
                        "node",
                        "github",
                        "rest"
                    ]
                },
                {
                    id: 3,
                    title: "fastify",
                    link: "https://www.fastify.io/",
                    description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                    tags: [
                        "web",
                        "framework",
                        "node",
                        "http2",
                        "https",
                        "localhost"
                    ]
                }
            ]


2: Deve ser possível filtrar ferramentas utilizando uma busca por tag
GET /tools?tag=node (node é a tag sendo buscada neste exemplo)


        [
            {
                id: 2, // ou qualquer outro identificador
                title: "json-server",
                link: "https://github.com/typicode/json-server",
                description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
                tags: [
                    "api",
                    "json",
                    "schema",
                    "node",
                    "github",
                    "rest"
                ]
            },
            {
                id: 3,
                title: "fastify",
                link: "https://www.fastify.io/",
                description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                tags: [
                    "web",
                    "framework",
                    "node",
                    "http2",
                    "https",
                    "localhost"
                ]
            }
        ]

3: Deve haver uma rota para cadastrar uma nova ferramenta
O corpo da requisição deve conter as informações da ferramenta a ser cadastrada, sem o ID (gerado automaticamente pelo servidor). A resposta, em caso de sucesso, deve ser o mesmo objeto, com seu novo ID gerado.

POST /tools Content-Type: application/json


            {
                "title": "hotel",
                "link": "https://github.com/typicode/hotel",
                "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
                "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
            }

Resposta:

Status: 201 Created

Content-Type: application/json


            {
                "title": "hotel",
                "link": "https://github.com/typicode/hotel",
                "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
                "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
                "id":5 // ou qualquer outro identificador
            }

4: O usuário deve poder remover uma ferramenta por ID
DELETE /tools/:id

Resposta:

Status: 204 No Content

Critérios de Aceitação
A API deve ser real e escrita por você. Ferramentas que criam APIs automaticamente (Loopback, json-server, etc) não são aceitas;
Todos os requisitos acima devem ser cumpridos, seguindo o padrão de rotas estabelecido;
Deve haver um documento de API Blueprint ou OpenAPI (antigo Swagger) descrevendo sua API;
Se você julgar necessário, adequado ou quiser deixar a aplicação mais completa (bônus!) você pode adicionar outras rotas, métodos, meios de autenticação com usuários, etc.
Quando terminar de realizar o desafio você deverá gravar um vídeo de no máximo 30 minutos (mas não se prenda a esse número, ele é apenas um guia. Use o tempo necessário que precisar), contando pra gente esses principais pontos:

Um pouco sobre você, o que gosta de fazer, como chegou nessa carreira e tudo mais;
Como conheceu a BossaBox e porque se interessou por ela;
Como é a sua rotina hoje;
Quanto tempo você pode se dedicar à projetos da BossaBox durante a semana;
Compartilhe sua tela no vídeo e mostre o que você construiu no desafio, passando sobre o código e o resultado final, e os pontos que você julga importante para o funcionamento do mesmo;
As decisões que teve que tomar para construí-lo;
Ferramentas utilizadas e porquê;
Bom trabalho!
