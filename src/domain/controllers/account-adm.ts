import { IlevelPermission, IlevelPermissionOption, IlevelSelect } from './../../shared/interface';
import { FirebaseUserRecord } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { ModelUser } from "../model/users";
import { DataRemote } from "../repository/data-remote";
import { responseValidatorError } from "../validators/validators-response";
import { UserController } from "../model/user.controllers"
import { _debugBack } from '../repository/debug';

export class AccountAdm extends DataRemote {

  data = {} as ModelUser
  permission = {} as IlevelPermissionOption

  constructor(public req: Irequest,) {
    super(req)
    this.data = this.req.data[this.req.document]
    console.log(this.data)

  }

  createUserLevel() {

    const document = this.req.document as keyof IlevelSelect
    const level: IlevelSelect = { 'account-adm-new': 'adm' }

    if (level[document]) {

      this.data.level = level[document]

    } else {

      throw `Level: ${document} not Exist`
    }

    if (_debugBack.createUser) {
      console.log('01-createUserLevel')
      console.log('Level: ', this.data.level)
      console.log('Data: ', this.data)
    }
  }

  createUserCustom() {

    this.data.emailVerified = false
    this.data.multiFactor = false

    if (_debugBack.createUser) {
      console.log('02-createUserCustom')
      console.log('emailVerified: ', this.data.emailVerified)
      console.log('multiFactor: ', this.data.multiFactor)
    }
    
  }
  createUserPermission() {
    const level = this.data.level
    const permission = this.db.permissions
    const { partner, client, system } = permission
    const levelPermission: IlevelPermission = {
      'adm': permission,
      'partner': { partner, client, system },
      'client': { client, system },
      'system': { system }
    }

    if (levelPermission[level]) {
      this.permission = levelPermission[level]
    } else { throw new Error(`Level Permission: ${level} not Exist`); }

    if (_debugBack.createUser) {
      console.log('03-createUserPermission')
      console.log('Level Permission: ', this.data.level)
    }
    
  }

  async createNewUserAndId() {
    const { uid } = await this.db.auth.createUser(new UserController(this.data).firebaseCreate) as FirebaseUserRecord
    this.data.userId = uid

    if (_debugBack.createUser) {
      console.log('04-createNewUserAndId')
      console.log('UserId: ', this.data.userId)
    }
    return
  }

  async createUserCustomInGoogleAuth() {
    const { level } = this.data
   
    await this.db.auth.setCustomUserClaims(this.data.userId, { level })
  
    if (_debugBack.createUser) {
      console.log('05-createUserCustomInGoogleAuth')
      console.log('Level: ', level)
    }
  }
 
  async createLoteAndSaveDataBase() {

    const db = this.db
    const data = this.data
    const req = this.req
    const permission = this.permission

    db.lote.create(db.pathDocument(data.userId).document, {
      permission,
      [`${req.document}`]: data,
      [`user-adm`]: data,
      [`developing-one`]: data,
      [`developing-two`]: data,
      [`partner-developing-one`]: data,
      [`partner-developing-two`]: data,
      [`partner-developing-three`]: data,
      [`client-developing-one`]: data,
      [`client-developing-two`]: data,
      [`client-developing-three`]: data,
      _dateLastUpdate: new Date(),
      _hitoric: db.getStatistic.historicDocument({
        userId: data.userId,
        name: data.name,
        email: data.email
      }, { permission, data })
    })
    db.lote.set(db.pathDocument().historic, { ...db.statistic[this.req.action]})

    await db.lote.commit()

    if (_debugBack.createUser) {
      console.log('06-createLoteAndSaveDataBase')
      console.log('Commit: ')
    }
    return

  }
  async createStatistic() {
    const db = this.db

    const { exists } = await db.pathDocument('user-adm').statistic.get()

    await (exists ?
      db.pathDocument('user-adm').statistic.update({ ...db.getStatistic.create }) :
      db.pathDocument('user-adm').statistic.create({ ...db.getStatistic.create }))
   
    if (_debugBack.createUser) {
        console.log('07-createStatistic')
        console.log('Statistic ok: ')
      }
    
    return null
  }
  async create(): Promise<IresponseValidatorCompose | null> {

    try {

      this.createUserLevel()
      this.createUserCustom()
      this.createUserPermission()
      await this.createNewUserAndId()
      await this.createUserCustomInGoogleAuth()
      await this.createLoteAndSaveDataBase()
      await this.createStatistic()

      return null
    } catch (error) {

      console.log('CREATE NEW USER: ======================================')
      console.log(error)
      return responseValidatorError(error, this.req)

    }
  }

  async createiNVALIDE(): Promise<IresponseValidatorCompose | null> {

    /* console.log('Error DE user') */

    /* this.createNewUserId() */

    const db = this.db

    // User - Front Input
    const data = this.req.data[this.req.document] as Pick<
      ModelUser, 'name' | 'email' | 'password' | 'phone' | 'acceptTerms'>

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

        /* const { uid } = await db.createUser as FirebaseUserRecord */
        const uid = 'teste'
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
            const permission = db.permissions

            db.lote.create(db.pathDocument(userId).document, {
              permission,
              [`user-adm`]: user,
              [`developing-one`]: user,
              [`developing-two`]: user,
              [`partner-developing-one`]: user,
              [`partner-developing-two`]: user,
              [`partner-developing-three`]: user,
              [`client-developing-one`]: user,
              [`client-developing-two`]: user,
              [`client-developing-three`]: user,
              _dateLastUpdate: new Date(),
              _hitoric: db.getStatistic.historicDocument({
                userId: user.userId,
                name: user.name,
                email: user.email
              }, { permission, user })
            })
            db.lote.set(db.pathDocument().historic, { ...db.getStatistic.create })

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
      return responseValidatorError(error, this.req)
    }
  }

  async update(): Promise<IresponseValidatorCompose | null> {
    const db = this.db

    // User - Front Input
    const data = this.req.data[this.req.document] as ModelUser

    // User - Custom Back
    const customUser: Pick<ModelUser, 'level'> = {
      level: data.level
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
            const permission = db.permissions

            db.lote.update(db.pathDocument(this.req.user!.userId).document, {
              permission,
              [`user-adm`]: user,
              _dateLastUpdate: { ...db.getStatistic.dateLastUpdate },
              _hitoric: db.getStatistic.historicDocument({
                userId: user.userId,
                name: user.name,
                email: user.email
              }, { permission, user })
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