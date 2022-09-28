import { FirebaseUserRecord } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { DataRemote } from "../repository/data-remote";
import { responseValidatorError } from "../validators/validators-response";

export class AccountAdm extends DataRemote {

  constructor(public req: Irequest) {

    super(req)

  }

  async create(): Promise<IresponseValidatorCompose | null> {

   /*  console.log('CREATE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log(this.req); */

    // Functions
    const req = this.req
    /*    const test = this.testPermisionDomain() */
    const db = this.db

    // Values Get
    const value = {
      uid: '',
      user: {},
      config: {
        nivel: 'adm',
        acceptTerms: true,
      },
    }

    // Create Status
    const create = {
      test: true,
      user: false,
      userConfig: false,
      userPermission: false,
      statistic: false
    }

    try {
      //TEST
      /*  const func = await test */
      /*    create.test = !func */

      // CREATE USER
      if (create.user = create.test) {

        const { uid } = await db.createUser as FirebaseUserRecord
        value.uid = uid

        // CREATE CONFIG
        if (create.userConfig = typeof uid === 'string' ? true : false) {

          const config = await db.createUserConfig.setCustomUserClaims(value.uid, value.config)

          // CREATE USER PERMISSION and PERMISSION

          if (create.userPermission = typeof config == 'undefined' ? true : false) {

            db.lote.create(db.pathDocument(value.uid).document, {
              permission: { [`${value.config.nivel}`]: db.getLocalDocument.permission}
            })
            db.lote.set(db.pathDocument().historic, { ...req })

            const salve = await db.lote.commit()


            if (create.statistic = Array.isArray(salve)) {


              const { exists } = await db.pathDocument('account-adm').statistic.get()

              console.log(create)

              await (exists ? db.pathDocument('account-adm').statistic.update({ ...db.getStatistic.create }) : db.pathDocument('account-adm').statistic.create({ ...db.getStatistic.create }))

              return null

            }

          }
        }

      }
      console.log(process)

      return null

    } catch (error) {
      console.log(process)
      return responseValidatorError(error, this.req)
    }
  }
}