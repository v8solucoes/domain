import { FirebaseUserRecord } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { ModelUser } from "../model/users";
import { DataRemote } from "../repository/data-remote";
import { responseValidatorError } from "../validators/validators-response";

export class GenericCrud extends DataRemote {

  constructor(public req: Irequest) {

    super(req)

  }

  async update(): Promise<IresponseValidatorCompose | null> {
    console.log('CRETAASDFASDFASDF')
    const db = this.db

    // User - Front Input
    const data = this.req.data[this.req.document] as any 

    // User - Custom Back
    const customUser: Pick<ModelUser, 'level'> = {
      level: 'adm'
    }
    // User - ID Firebase Auth
    let userId: ModelUser['userId']

    // User Default Config
    const personUser: Pick<ModelUser, 'emailVerified' | 'multiFactor'> = {
      emailVerified: false,
      multiFactor: false
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

      // CREATE USER
      if (create.user = create.test) {

        const { uid } = await db.createUser as FirebaseUserRecord
        userId = uid
        
        // CREATE CONFIG
        if (create.userConfig = typeof uid === 'string' ? true : false) {
          
          const config = await db.createUserConfig.setCustomUserClaims(userId, customUser)


          // CREATE USER PERMISSION

          if (create.userPermission = typeof config == 'undefined' ? true : false) {
           const user = {
              ...data,
              ...customUser,
              ...personUser,
              userId
           }
            const permission = { [`${customUser.level}`]: db.getUserAdm.permission }  
            
            db.lote.create(db.pathDocument(userId).document, {
              permission,
              [`user-adm`]: user,
              _hitoric: db.getStatistic.historicDocument({
                userId: user.userId,
                name: user.name,
                email: user.email
              },{permission,user})
            })
            db.lote.set(db.pathDocument().historic, { ...db.getStatistic.create })

            const salve = await db.lote.commit()

            if (create.statistic = Array.isArray(salve)) {

              const { exists } = await db.pathDocument('user-adm').statistic.get()

              console.log(create)

              await (exists ?
                db.pathDocument('user-adm').statistic.update({ ...db.getStatistic.create }) :
                db.pathDocument('user-adm').statistic.create({ ...db.getStatistic.create }))

              return null

            }

          }
        }

      }

      return null

    } catch (error) {
      console.log('Peguei erro')
      console.log(error)
      return responseValidatorError(error, this.req)
    }
  }
  async create(): Promise<IresponseValidatorCompose | null> {
    console.log('CRETAASDFASDFASDF')
    const db = this.db

    // User - Front Input
    const data = this.req.data[this.req.document] as Pick<
      ModelUser, 'name' | 'email' | 'password' |'phone' | 'acceptTerms'> 

    // User - Custom Back
    const customUser: Pick<ModelUser, 'level'> = {
      level: 'adm'
    }
    // User - ID Firebase Auth
    let userId: ModelUser['userId']

    // User Default Config
    const personUser: Pick<ModelUser, 'emailVerified' | 'multiFactor'> = {
      emailVerified: false,
      multiFactor: false
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

      // CREATE USER
      if (create.user = create.test) {

        const { uid } = await db.createUser as FirebaseUserRecord
        userId = uid
        
        // CREATE CONFIG
        if (create.userConfig = typeof uid === 'string' ? true : false) {
          
          const config = await db.createUserConfig.setCustomUserClaims(userId, customUser)


          // CREATE USER PERMISSION

          if (create.userPermission = typeof config == 'undefined' ? true : false) {
           const user = {
              ...data,
              ...customUser,
              ...personUser,
              userId
           }
            const permission = { [`${customUser.level}`]: db.getUserAdm.permission }  
            
            db.lote.create(db.pathDocument(userId).document, {
              permission,
              [`user-adm`]: user,
              _hitoric: db.getStatistic.historicDocument({
                userId: user.userId,
                name: user.name,
                email: user.email
              },{permission,user})
            })
            db.lote.set(db.pathDocument().historic, { ...db.getStatistic.create })

            const salve = await db.lote.commit()

            if (create.statistic = Array.isArray(salve)) {

              const { exists } = await db.pathDocument('user-adm').statistic.get()

              console.log(create)

              await (exists ?
                db.pathDocument('user-adm').statistic.update({ ...db.getStatistic.create }) :
                db.pathDocument('user-adm').statistic.create({ ...db.getStatistic.create }))

              return null

            }

          }
        }

      }
      console.log('NOerror CreateUser')
      console.log(process)

      return null

    } catch (error) {
      console.log('error CreateUser')
      console.log(error)
      return responseValidatorError(error, this.req)
    }
  }
}