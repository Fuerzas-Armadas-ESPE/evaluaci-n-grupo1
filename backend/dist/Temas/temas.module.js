"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const temas_controller_1 = require("./temas.controller");
const temas_service_1 = require("./temas.service");
const temas_model_1 = require("./temas.model");
let TemasModule = class TemasModule {
};
exports.TemasModule = TemasModule;
exports.TemasModule = TemasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: temas_model_1.Tema.name, schema: temas_model_1.TemaSchema }]),
        ],
        controllers: [temas_controller_1.TemasController],
        providers: [temas_service_1.TemasService],
        exports: [mongoose_1.MongooseModule.forFeature([{ name: temas_model_1.Tema.name, schema: temas_model_1.TemaSchema }])],
    })
], TemasModule);
//# sourceMappingURL=temas.module.js.map