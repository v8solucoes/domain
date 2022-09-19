import { FirebaseUserRecord } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { responseValidatorError } from "../validators/validators-response";
import { DocumentDomain } from "./document.domain";

export class AccountAdm extends DocumentDomain {

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
        permission: 'adm',
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

            db.lote.create(db.path(value.uid).colection, { permission: db.local.permission })
            db.lote.set(db.path().historic, { ...req })

            const salve = await db.lote.commit()


            if (create.statistic = Array.isArray(salve)) {


              const { exists } = await db.path('account-adm').statistic.get()

              console.log(create)

              await (exists ? db.path('account-adm').statistic.update({ ...db.statistic.create }) : db.path('account-adm').statistic.create({ ...db.statistic.create }))

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