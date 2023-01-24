import { FirebaseUserRecord } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { ModelUser } from "../model/users";
import { DataRemote } from "../repository/data-remote";
import { responseValidatorError } from "../validators/validators-response";
import { UserController } from "../model/user.controllers"

export class AccountAdm extends DataRemote {

  constructor(public req: Irequest) {

    super(req)

  }

  async create(): Promise<IresponseValidatorCompose | null> {

    console.log('Error DE user')

    const db = this.db
    
    // User - Front Input
    const data = this.req.data[this.req.document] as Pick<
    ModelUser, 'name' | 'email' | 'password' |'phone' | 'acceptTerms'> 
    
    // User - Custom Back
    const customUser: Pick<ModelUser, 'nivel'> = {
      nivel: 'adm'
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
            const permission = { [`${customUser.nivel}`]: db.getUserAdm.permission }  
            
            db.lote.create(db.pathDocument(userId).document, {
              permission,
              [`user-adm`]: user,
              _dateLastUpdate: new Date(),
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
      console.log('Error Create user')
      return responseValidatorError(error, this.req)
    }
  }
 
  async update(): Promise<IresponseValidatorCompose | null> {
    const db = this.db
    
    // User - Front Input
    const data = this.req.data[this.req.document] as ModelUser 
    
    // User - Custom Back
    const customUser: Pick<ModelUser, 'nivel'> = {
      nivel: data.nivel
    }
    // User - ID Firebase Auth
    /*     let userId: ModelUser['userId'] */
    
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
      
      console.log('Error DE user')
      // Update Get USER
      if (create.user = create.test) {
        
        /*  const emailUpdate = await FirebaseAPI.auth.updateProviderConfig(this.req.user!.userId, new UserController(data).firebaseCreate)
        console.log(emailUpdate) */
        // CREATE CONFIG
        if (create.userConfig = true) {
          
          const config = await db.createUserConfig.setCustomUserClaims(this.req.user!.userId, customUser)


          // CREATE USER PERMISSION

          if (create.userPermission = typeof config == 'undefined' ? true : false) {
           const user = {
              ...data,
              ...customUser,
              ...personUser,
              userId: this.req.user!.userId
           }
            const permission = { [`${customUser.nivel}`]: db.getUserAdm.permission }  
            
            db.lote.update(db.pathDocument(this.req.user!.userId).document, {
              permission,
              [`user-adm`]: user,
              _dateLastUpdate: {...db.getStatistic.dateLastUpdate},
              _hitoric: db.getStatistic.historicDocument({
                userId: user.userId,
                name: user.name,
                email: user.email
              },{permission,user})
            })
            db.lote.set(db.pathDocument().historic, { ...db.getStatistic.update })

            const salve = await db.lote.commit()

            if (create.statistic = Array.isArray(salve)) {

              const { exists } = await db.pathDocument('user-adm').statistic.get()

              console.log(create)

              await (exists ?
                db.pathDocument('user-adm').statistic.update({ ...db.getStatistic.update }) :
                db.pathDocument('user-adm').statistic.create({ ...db.getStatistic.create }))

              return null

            }

          }
        }

      }

      return null

    } catch (error) {
      console.log('Error Create user')
      console.log(new UserController(data).firebaseCreate)

      return responseValidatorError(error, this.req)
    }
  }
  async null(): Promise<IresponseValidatorCompose | null> {

    try {

      return null

    } catch (error) {
      console.log('Error Null')
      return responseValidatorError(null, this.req)
    }
  }
}