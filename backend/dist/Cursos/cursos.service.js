"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const curso_model_1 = require("./curso.model");
const temas_model_1 = require("../Temas/temas.model");
let CursosService = class CursosService {
    constructor(cursoModel, temaModel) {
        this.cursoModel = cursoModel;
        this.temaModel = temaModel;
    }
    async createCurso(cursoData) {
        const nuevoCurso = new this.cursoModel(cursoData);
        return nuevoCurso.save();
    }
    async getCursos() {
        return this.cursoModel.find().exec();
    }
    async getCurso(id) {
        return this.cursoModel.findById(id).exec();
    }
    async updateCurso(id, cursoData) {
        return this.cursoModel.findByIdAndUpdate(id, cursoData, { new: true }).exec();
    }
    async deleteCurso(id) {
        return this.cursoModel.findByIdAndDelete(id).exec();
    }
    async addTemaToCurso(cursoId, temaId) {
        const tema = await this.temaModel.findById(temaId);
        const curso = await this.cursoModel.findById(cursoId);
        if (!curso.temas) {
            curso.temas = [];
        }
        curso.temas.push(tema._id);
        await curso.save();
        return curso;
    }
    async findTemasByCurso(cursoId) {
        const curso = await this.cursoModel.findById(cursoId);
        const temasIds = curso.temas;
        const temasPromises = temasIds.map(temaId => this.temaModel.findOne({ _id: temaId, estado: 'activo' }).lean().exec());
        const temas = await Promise.all(temasPromises);
        const temasActivos = temas.filter(tema => tema !== null);
        return temasActivos;
    }
};
exports.CursosService = CursosService;
exports.CursosService = CursosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(curso_model_1.Curso.name)),
    __param(1, (0, mongoose_1.InjectModel)(temas_model_1.Tema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CursosService);
//# sourceMappingURL=cursos.service.js.map