import { IlevelPermission, IlevelPermissionOption, IlevelSelect } from './../../shared/interface';
import { FirebaseUserRecord } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { ModelUser } from "../model/users";
import { DataRemote } from "../repository/data-remote";
import { DataLocal } from "../repository/data-local";
import { responseValidatorError } from "../validators/validators-response";
import { UserController } from "../model/user.controllers"
import { _debugBack } from '../repository/debug';

export class AccountAdm extends DataRemote {

  data = {} as ModelUser
  permission = {} as IlevelPermissionOption
  datalocal = new DataLocal()
  constructor(
    public req: Irequest,
   ) {
    super(req)
    this.data = this.req.data[this.req.document]
    console.log(this.data)

  }
  async create(): Promise<IresponseValidatorCompose | null> {

    try {

      this.testUserLevel()
      this.testUserPermission()
      this.createUserCustom()
      await this.createNewUserAndId()
      await this.setUserCustomInGoogleAuth()
      await this.createLoteAndSaveDataBase()
      await this.createStatistic()

      return null
    } catch (error) {

      console.log('CREATE NEW USER: ======================================')
      console.log(error)
      return responseValidatorError(error, this.req)

    }
  }
  async updateNotImplmented(): Promise<IresponseValidatorCompose | null> {

    try {

      this.testUserLevel()
      this.testUserPermission()
      /*   this.createUserCustom() */
      await this.updateUserAuth()
      await this.setUserCustomInGoogleAuth()
      await this.updateLoteAndSaveDataBase()
      await this.createStatistic()

      return null
    } catch (error) {

      console.log('Update USER: ======================================')
      console.log(error)
      return responseValidatorError(error, this.req)

    }
  }

  testUserLevel() {

    const document = this.req.document as keyof IlevelSelect
    const level: IlevelSelect = {
      'account-adm-new': 'adm',
      'user-adm': 'adm'
    }

    if (level[document]) {

      this.data.level = level[document]

    } else {

      throw `Level: ${document} not Exist`
    }

    if (_debugBack.createUser) {
      console.log('testUserLevel')
      console.log('Level: ', this.data.level)
      console.log('Data: ', this.data)
    }
  }

  testUserPermission() {
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
      console.log('testUserPermission')
      console.log('Level Permission: ', this.data.level)
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

  updateUserPermission() {
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
      console.log('testUserPermission')
      console.log('Level Permission: ', this.data.level)
    }

  }

  async createNewUserAndId() {

    const { uid } = await this.db.auth.createUser(new UserController(this.data).firebaseCreate) as FirebaseUserRecord
    this.data.userId = uid

    if (_debugBack.createUser) {
      console.log('createNewUserAndId')
      console.log('UserId: ', this.data.userId)
    }
    return
  }

  async updateUserAuth() {

    await this.db.auth.updateUser(this.data.userId, new UserController(this.data).firebaseUpdate) as FirebaseUserRecord

    if (_debugBack.createUser) {
      console.log('createNewUserAndId')
      console.log('UserId: ', this.data.userId)
    }
    return
  }

  async setUserCustomInGoogleAuth() {

    const { level } = this.data

    await this.db.auth.setCustomUserClaims(this.data.userId, { level })

    if (_debugBack.createUser) {
      console.log('createUserCustomInGoogleAuth')
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
      [`send-message`]: this.datalocal.document['send-message'],
      [`pendency`]: this.datalocal.document['pendency'],
      [`client-adm`]: this.datalocal.document['client-adm'],
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
    db.lote.set(db.pathDocument().historic, { ...db.statistic[this.req.action] })

    await db.lote.commit()

    if (_debugBack.createUser) {
      console.log('06-createLoteAndSaveDataBase')
      console.log('Commit: ')
    }
    return

  }

  async updateLoteAndSaveDataBase() {

    const db = this.db
    const req = this.req
    const data = this.req.data
    const permission = this.permission

    db.lote.update(db.pathDocument(data.userId).document, {

      [`${req.document}`]: data,

      _dateLastUpdate: new Date(),
      _hitoric: db.getStatistic.historicDocument({
        userId: data.userId,
        name: data.name,
        email: data.email
      }, { permission, data })
    })
    db.lote.set(db.pathDocument().historic, { ...db.statistic[this.req.action] })

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

  async update(): Promise<IresponseValidatorCompose | null> {

    try {

      return null

    } catch (error) {
      console.log('Error Update')
      return responseValidatorError(null, this.req)
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