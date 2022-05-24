"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcoes = exports.Testar = exports.Compor = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var Compor = /** @class */ (function () {
    function Compor() {
    }
    Compor.prototype.criarArquivo = function (diretorio, arquivo) {
        fs.appendFileSync(path.join(__dirname, diretorio), arquivo);
        return "Criado " + diretorio;
    };
    Compor.prototype.start = function () {
        var funcoes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcoes[_i] = arguments[_i];
        }
        return function (valor) {
            return funcoes.reduce(function (acumulador, funcao) {
                return funcao(acumulador);
            }, valor);
        };
    };
    Compor.prototype.startAsync = function () {
        var funcoes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcoes[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, function (valor) {
                        return funcoes.reduce(function (acumulador, funcao) {
                            return funcao(acumulador);
                        }, valor);
                    }];
            });
        });
    };
    return Compor;
}());
exports.Compor = Compor;
function fun1(valor) {
    setTimeout(function (o) {
        console.log('tempo 200');
    }, 2000);
    return "".concat(valor, "/ um");
}
function fun2(valor) {
    setTimeout(function (o) {
        console.log('tempo 1000');
    }, 1000);
    return "".concat(valor, "/ dois");
}
/* const teste = new Compor<Promise<any>().startAsync(fun1,fun2)

console.log( teste({'teste':'ola'})) */
var Testar = /** @class */ (function () {
    /*  invocarCompor =  this.compor(this.promoessaAsync, this.fun1, this.fun2, this.fun3 ) */
    /*   invocarCompor = this.compor(this.fun1, this.fun2, this.fun3, this.promessa) */
    function Testar() {
        /*  console.log(this.invocarCompor('GALERA')) */
        this.comporAsync(this.promoessaAsync, this.promoessaAsync).then(function (o) { console.log(o); });
    }
    Testar.prototype.fun1 = function (valor) { console.log('1'); return "".concat(valor, "/ um"); };
    Testar.prototype.fun2 = function (valor) { console.log('2'); return "".concat(valor, "/ dois"); };
    Testar.prototype.fun3 = function (valor) { console.log('3'); return "".concat(valor, "/ tres"); };
    Testar.prototype.promoessaAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var teste, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.promessa()];
                    case 1:
                        teste = _a.sent();
                        return [4 /*yield*/, teste];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Testar.prototype.promessa = function () {
        var valor = "PROMESSAss";
        var tempo = 1000;
        return new Promise(function (Resolvido, Rejeitado) {
            var x = 0;
            setTimeout(function (o) {
                if (x == 0) {
                    return Resolvido({ valor: valor, tempo: tempo });
                }
                else {
                    Rejeitado("Error");
                }
            }, tempo);
            return Resolvido({ valor: valor, tempo: tempo });
        });
    };
    Testar.prototype.compor = function () {
        var funcoes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcoes[_i] = arguments[_i];
        }
        return function (valor) {
            return funcoes.reduce(function (acumulador, funcao) {
                return funcao(acumulador);
            }, valor);
        };
    };
    Testar.prototype.comporPromisse = function () {
        var funcoes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcoes[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, function (valor) {
                        return funcoes.reduce(function (acumulador, funcao) {
                            funcao(acumulador);
                            return funcao(acumulador);
                        }, valor);
                    }];
            });
        });
    };
    Testar.prototype.comporAsync = function () {
        var funcoes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcoes[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, function (valor) {
                        return funcoes.reduce(function (acumulador, funcao) {
                            return funcao(acumulador);
                        }, valor);
                    }];
            });
        });
    };
    return Testar;
}());
exports.Testar = Testar;
new Testar();
var Funcoes = /** @class */ (function () {
    function Funcoes() {
    }
    Funcoes.rapida = function (valor) { return valor; };
    Funcoes.promessa = function (valor, tempo) {
        return new Promise(function (Resolvido, Rejeitado) {
            var x = 0;
            setTimeout(function (o) {
                if (x == 0) {
                    Resolvido({ valor: valor, tempo: tempo });
                }
                else {
                    Rejeitado("Error");
                }
            }, tempo);
        });
    };
    Funcoes.teste = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = (_a = console).log;
                        return [4 /*yield*/, Funcoes.promessa({ testes: 'op 1' }, 3000)];
                    case 1:
                        _b.apply(_a, [_g.sent()]);
                        console.log(Funcoes.rapida('rp 1'));
                        _d = (_c = console).log;
                        return [4 /*yield*/, Funcoes.promessa({ testes: 'op 1' }, 2000)];
                    case 2:
                        _d.apply(_c, [_g.sent()]);
                        console.log(Funcoes.rapida('rp 2'));
                        _f = (_e = console).log;
                        return [4 /*yield*/, Funcoes.promessa({ testes: 'op 1' }, 1000)];
                    case 3:
                        _f.apply(_e, [_g.sent()]);
                        console.log(Funcoes.rapida('rp 3'));
                        return [2 /*return*/];
                }
            });
        });
    };
    return Funcoes;
}());
exports.Funcoes = Funcoes;
/* const start = new Testar().func('olá meu nome'); */
/* const start = new Funcoes()
Funcoes.teste() */
