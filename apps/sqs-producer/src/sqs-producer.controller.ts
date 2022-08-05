import { Controller, Get, Query, Res } from "@nestjs/common";
import { SqsService } from "@ssut/nestjs-sqs";
import { Message } from "@app/commons";
import { Response } from 'express'
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
          planId: 16526,
          data: {
            hiredPlan: 16526,
            fund_id: '48',
            customer_cpf: '54548281819',
            tax_regime: 'progressive',
            plan_type: 'pgbl',
            payment_recurrence: 'm',
            payment_data: {
              monthly_payment: { day_for_payment: 1, amount: 400 },
              initial_payment: {
                due_date_of_payment: '1',
                amount: 1000,
                type: 'bank_slip',
                debit_account: [Object]
              }
            },
            signature: {
              signed: true,
              ip: '127.0.0.1',
              signatureDate: '2022-08-04 20:00:00'
            },
            legal_heir: true
          }
        }

      }
    } else if (message === "platform") {
      data = {
        date: (+new Date()).toString(),
        message: {
          planId: 16526,
          data: {
            hiredPlan: 16526,
            fund_id: '48',
            customer_cpf: '54548281819',
            tax_regime: 'progressive',
            plan_type: 'pgbl',
            payment_recurrence: 'm',
            payment_data: {
              monthly_payment: { day_for_payment: 1, amount: 400 },
              initial_payment: {
                due_date_of_payment: '1',
                amount: 1000,
                type: 'bank_slip',
                debit_account: [Object]
              }
            },
            signature: {
              signed: false,
              ip: '127.0.0.1',
              signature_date: '2022-08-04 20:00:00',
            },
            legal_heir: true
          }
        }

      }
    }

    await this.sqsService.send("service-handle-contract", {
      id: data.date,
      body: data.message
    });

    return "ok";
  }

  @Get('tests')
  async hello(@Res() res: Response) {
    res.render('hello.hbs')
  }
}
