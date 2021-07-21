import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  questions() {
    const questions = {
      "data": {
        "name": "Calculadora de Custo de Aplicativo Móvel",
        "version": "0.0.0.0",
        "questions": [
          {
            "title": "Que nível de qualidade você está procurando?",
            "answers": [
              {
                "title": "Ótima qualidade",
                "effort": 15.0,
                "cost": 16500.0,
                "image": "../../../assets/answer-1-1.png",
                "id": "60ba7f6608790ee11f174384"
              },
              {
                "title": "Boa relação custo e preço",
                "effort": 7.5,
                "cost": 8250.0,
                "image": "../../../assets/answer-1-2.png",
                "id": "60ba7f6608790ee11f174385"
              },
              {
                "title": "Não estou interesado em muita qualidade",
                "effort": 5.0,
                "cost": 5500.0,
                "image": "../../../assets/answer-1-3.png",
                "id": "60ba7f6608790ee11f174386"
              }
            ],
            "id": "60ba7f6608790ee11f174387"
          },
          {
            "title": "Qual o tipo de aplicativo você precisa?",
            "answers": [
              {
                "title": " Android",
                "effort": 1.0,
                "cost": 1100.0,
                "image": "../../../assets/answer-2-1.png",
                "id": "60ba7f6608790ee11f174388"
              },
              {
                "title": "iPhone",
                "effort": 1.0,
                "cost": 1100.0,
                "image": "../../../assets/answer-2-2.png",
                "id": "60ba7f6608790ee11f174389"
              },
              {
                "title": "Android & iPhone",
                "effort": 2.0,
                "cost": 2200.0,
                "image": "../../../assets/answer-2-4.png",
                "id": "60ba7f6608790ee11f17438a"
              },

            ],
            "id": "60ba7f6608790ee11f17438b"
          },
          {
            "title": "Qual design você deseja que seu aplicativo tenha?",
            "answers": [
              {
                "title": "Interface simples",
                "effort": 6.0,
                "cost": 6600.0,
                "image": "../../../assets/answer-3-1.png",
                "id": "60ba7f6608790ee11f17438c"
              },
              {
                "title": "Interface personalizada",
                "effort": 10.0,
                "cost": 11000.0,
                "image": "../../../assets/answer-3-2.png",
                "id": "60ba7f6608790ee11f17438d"
              },
              {
                "title": "Interface semelhante a Web",
                "effort": 12.0,
                "cost": 13200.0,
                "image": "../../../assets/answer-3-3.png",
                "id": "60ba7f6608790ee11f17438e"
              },

            ],
            "id": "60ba7f6608790ee11f17438f"
          },
          {
            "title": "Qual o retorno financeiro que deseja ter?",
            "answers": [
              {
                "title": "Não cobrarei pelo aplicativo",
                "effort": 1.0,
                "cost": 1100.0,
                "image": "../../../assets/answer-4-1.png",
                "id": "60ba7f6608790ee11f174390"
              },
              {
                "title": "Usarei publicidade",
                "effort": 3.0,
                "cost": 3300.0,
                "image": "../../../assets/answer-4-3.png",
                "id": "60ba7f6608790ee11f174391"
              },
              {
                "title": "Aplicativo pago",
                "effort": 1.0,
                "cost": 1100.0,
                "image": "../../../assets/answer-4-2.png",
                "id": "60ba7f6608790ee11f174392"
              },

            ],
            "id": "60ba7f6608790ee11f174394"
          },
          {
            "title": "Seu aplicativo precisa de login?",
            "answers": [
              {
                "title": "Sim, integrado com redes sociais",
                "effort": 2.0,
                "cost": 2200.0,
                "image": "../../../assets/answer-5-1.png",
                "id": "60ba7f6608790ee11f174395"
              },
              {
                "title": "Sim, apenas com email.",
                "effort": 1.0,
                "cost": 1100.0,
                "image": "../../../assets/answer-5-2.png",
                "id": "60ba7f6608790ee11f174396"
              },
              {
                "title": "Não preciso de login",
                "effort": 0.0,
                "cost": 0.0,
                "image": "../../../assets/answer-5-3.png",
                "id": "60ba7f6608790ee11f174397"
              }
            ],
            "id": "60ba7f6608790ee11f174398"
          },
          {
            "title": "Seu aplicativo será integrado a um Website?",
            "answers": [
              {
                "title": "Sim.",
                "effort": 5.0,
                "cost": 5500.0,
                "image": "../../../assets/answer-6-1.png",
                "id": "60ba7f6608790ee11f174399"
              },
              {
                "title": "Não.",
                "effort": 0.0,
                "cost": 0.0,
                "image": "../../../assets/answer-6-2.png",
                "id": "60ba7f6608790ee11f17439a"
              },
              {
                "title": "Ainda não sei.",
                "effort": 2.5,
                "cost": 2750.0,
                "image": "../../../assets/answer-6-3.png",
                "id": "60ba7f6608790ee11f17439b"
              }
            ],
            "id": "60ba7f6608790ee11f17439c"
          },
          {
            "title": "Usuário criará perfil?",
            "answers": [
              {
                "title": "Sim.",
                "effort": 2.0,
                "cost": 2200.0,
                "image": "../../../assets/answer-7-1.png",
                "id": "60ba7f6608790ee11f17439d"
              },
              {
                "title": "Não.",
                "effort": 0.0,
                "cost": 0.0,
                "image": "../../../assets/answer-7-2.png",
                "id": "60ba7f6608790ee11f17439e"
              },
              {
                "title": "Ainda não sei.",
                "effort": 1.0,
                "cost": 1100.0,
                "image": "../../../assets/answer-7-3.png",
                "id": "60ba7f6608790ee11f17439f"
              }
            ],
            "id": "60ba7f6608790ee11f1743a0"
          },
          {
            "title": "Seu aplicativo precisa de painel administrativo?",
            "answers": [
              {
                "title": "Sim.",
                "effort": 4.0,
                "cost": 4400.0,
                "image": "../../../assets/answer-8-1.png",
                "id": "60ba7f6608790ee11f1743a1"
              },
              {
                "title": "Não.",
                "effort": 0.0,
                "cost": 0.0,
                "image": "../../../assets/answer-8-2.png",
                "id": "60ba7f6608790ee11f1743a2"
              },
              {
                "title": "Ainda não sei.",
                "effort": 2.0,
                "cost": 2200.0,
                "image": "../../../assets/answer-8-3.png",
                "id": "60ba7f6608790ee11f1743a3"
              }
            ],
            "id": "60ba7f6608790ee11f1743a4"
          },

          {
            "title": "Seu aplicativo fornecerá suporte a multiplas linguas?",
            "answers": [
              {
                "title": "Sim.",
                "effort": 2.0,
                "cost": 2200.0,
                "image": "../../../assets/answer-9-1.png",
                "id": "60ba7f6608790ee11f1743a5"
              },
              {
                "title": "Não.",
                "effort": 0.0,
                "cost": 0.0,
                "image": "../../../assets/answer-9-2.png",
                "id": "60ba7f6608790ee11f1743a6"
              },
              {
                "title": "Ainda não sei.",
                "effort": 1.0,
                "cost": 1100.0,
                "image": "../../../assets/answer-9-3.png",
                "id": "60ba7f6608790ee11f1743a7"
              }

            ],
            "id": "60ba7f6608790ee11f1743a8"
          }
        ],
        "id": "60ba7f6608790ee11f1743a9"
      }
    }

    return questions;
  }
}
