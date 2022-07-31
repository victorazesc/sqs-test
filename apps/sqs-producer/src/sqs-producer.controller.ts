import { Controller, Get, Query, Res } from "@nestjs/common";
import { SqsService } from "@ssut/nestjs-sqs";
import { Message } from "@app/commons";
import { join } from "path";
@Controller()
export class SqsProducerController {
  constructor(private readonly sqsService: SqsService) { }

  @Get()
  async sendQueue(@Query("message") message: any) {
    let data: Message;
    if (message === "app") {
      data = {
        date: (+new Date()).toString(),
        message: {
          hire: {
            id: 1,
            code: "8916282",
            creationDate: "2022-07-13",
            taxRegime: 0,
            insurance: "zurich",
            broker: {
              logoUrl:
                "https://saks-images.s3.us-east-2.amazonaws.com/2706223893",
            },

            funds: [
              {
                susepNumber: "15414.628959/2019-38",
                riskType: 0,
                risk: 0,
                productCode: "VGBL",
                name: "ARX DENALI RF CP",
                minMonthlyContribution: 300,
                minInitialContribution: 1000,
                planCode: 698,
                managementFee: "0.9",
                incomeRate: 1,
                cnpj: "34.461.856/0001-86",
                category: "renda_fixa_pos",
                alternative: null,
                active: true,
                type: "VGBL",
              },
            ],
          },
          financialRepresentative: {
            cpf: "123123",
            email: "rewrwer@sdfsdfs.com",
            id: 3,
            kinship: "pai",
            name: "fabioo",
          },

          legalRepresentative: {
            name: "fabioo",
            cpf: "123123",
            email: "victorazesc@hotmail.com",
            kinship: "pai",
            birthdate: "2020-07-04",
            rgNumber: "123123",
            rgIssuingInstitution: "ssp",
            rgIssuingDate: "2020-07-04",
          },

          customer: {
            birthdate: "1997-10-04",
            brokerConsultantId: "800",
            cpf: "10463808932",
            email: "victorazesc@gmail.com",
            gender: "M",
            name: "Victor Henrique de Azevedo",
            occupation: "Software Engineer",
            phone: "+5547988194473",
            refSource: "b2b",
            customerDetail: {
              publicAgent: 0,
              publicServer: 0,
              americanCitizen: 0,
              taxResidence: 0,
              maritalStatus: "Solteiro",
              nationality: "Brasil",
              birthState: "SC",
              birthCity: "Balneario Camboriu",
              motherName: "Rosália do Nascimento",
              rgNumber: "88318265",
              monthlyIncome: "99999",
              brazilResident: 0,
              phoneResidential: "+554732484006",
              rgIssuingInstitution: "SSP",
              rgIssuingDate: "2009-12-07",
            },
            address: {
              street: "Rua Edmundo Victorino",
              number: "6",
              neighborhood: "Brilhante 1",
              city: "Itajai",
              state: "SC",
              country: "Brasil",
              complement: "Casa",
              zipCode: "88318265",
            },
          },

          signature: {
            date: "2022-07-14",
            ip: "10.0.0.1",
          },
          paymentData: {
            monthlyPayment: {
              amount: 10000,
              dayForPayment: 15,
              type: "invoice",
              debitAccount: {
                bankCode: "1",
                agency: "0001",
                agencyDigit: "9",
                accountNumber: "1341338",
                accountDigit: "4",
              },
            },
            initialPayment: {
              amount: 50000,
              type: "credit_card|pix|invoice |",
              debitAccount: {
                bankCode: "1",
                agency: "0001",
                agencyDigit: "9",
                accountNumber: "1341338",
                accountDigit: "4",
              },
            },
          },

          beneficiaries: [
            {
              name: "john doe",
              birthdate: "2022-07-14",
              kinship: "Pai",
              participation: "10",
            },
            {
              name: "john doe",
              birthdate: "2022-07-14",
              kinship: "Pai",
              participation: "90",
            },
          ],
        },
      };
    } else if (message === "platform") {
      data = {
        date: (+new Date()).toString(),
        message: {
          planId: 16510
        }
      }
    } else if (message === "underage") {
      data = {
        date: (+new Date()).toString(),
        message: {
          hire: {
            id: 3,
            code: "9170316",
            creationDate: "2022-07-13",
            taxRegime: 0,
            insurance: "zurich",
            broker: {
              logoUrl:
                "https://saks-images.s3.us-east-2.amazonaws.com/2706223893",
            },

            funds: [
              {
                susepNumber: "15414.628959/2019-38",
                riskType: 0,
                risk: 0,
                productCode: "VGBL",
                name: "ARX DENALI RF CP",
                minMonthlyContribution: 300,
                minInitialContribution: 1000,
                planCode: 698,
                managementFee: "0.9",
                incomeRate: 1,
                cnpj: "34.461.856/0001-86",
                category: "renda_fixa_pos",
                alternative: null,
                active: true,
                type: "VGBL",
              },
            ],
          },
          financialRepresentative: {
            cpf: "123123",
            email: "rewrwer@sdfsdfs.com",
            id: 3,
            kinship: "pai",
            name: "fabioo",
          },

          legalRepresentative: {
            name: "fabioo",
            cpf: "123123",
            email: "victor.azevedo@hellosaks.com",
            kinship: "pai",
            birthdate: "2020-07-04",
            rgNumber: "123123",
            rgIssuingInstitution: "ssp",
            rgIssuingDate: "2020-07-04",
          },

          customer: {
            birthdate: "2020-10-04",
            brokerConsultantId: "800",
            cpf: "10463808932",
            email: "victorazesc@gmail.com",
            gender: "M",
            name: "Victor Henrique de Azevedo",
            occupation: "Software Engineer",
            phone: "+5547988194473",
            refSource: "b2b",
            customerDetail: {
              publicAgent: 0,
              publicServer: 0,
              americanCitizen: 0,
              taxResidence: 0,
              maritalStatus: "Solteiro",
              nationality: "Brasil",
              birthState: "SC",
              birthCity: "Balneario Camboriu",
              motherName: "Rosália do Nascimento",
              rgNumber: "88318265",
              monthlyIncome: "99999",
              brazilResident: 0,
              phoneResidential: "+554732484006",
              rgIssuingInstitution: "SSP",
              rgIssuingDate: "2009-12-07",
            },
            address: {
              street: "Rua Edmundo Victorino",
              number: "6",
              neighborhood: "Brilhante 1",
              city: "Itajai",
              state: "SC",
              country: "Brasil",
              complement: "Casa",
              zipCode: "88318265",
            },
          },

          paymentData: {
            monthlyPayment: {
              amount: 10000,
              dayForPayment: 15,
              type: "invoice",
              debitAccount: {
                bankCode: "1",
                agency: "0001",
                agencyDigit: "9",
                accountNumber: "1341338",
                accountDigit: "4",
              },
            },
            initialPayment: {
              amount: 50000,
              type: "credit_card|pix|invoice |",
              debitAccount: {
                bankCode: "1",
                agency: "0001",
                agencyDigit: "9",
                accountNumber: "1341338",
                accountDigit: "4",
              },
            },
          },

          beneficiaries: [
            {
              name: "john doe",
              birthdate: "2022-07-14",
              kinship: "Pai",
              participation: "10",
            },
            {
              name: "john doe",
              birthdate: "2022-07-14",
              kinship: "Pai",
              participation: "90",
            },
          ],
        },
      };
    }

    await this.sqsService.send("service-handle-contract", {
      id: data.date,
      body: data,
    });

    return "ok";
  }

  @Get('tests')
  renderPage(@Res() res) {
    res.sendFile(join(__dirname, '/index.html'));
  }
}
