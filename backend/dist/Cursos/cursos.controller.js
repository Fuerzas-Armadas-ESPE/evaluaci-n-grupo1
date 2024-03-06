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
exports.CursosController = void 0;
const common_1 = require("@nestjs/common");
const cursos_service_1 = require("./cursos.service");
const curso_model_1 = require("./curso.model");
let CursosController = class CursosController {
    constructor(cursosService) {
        this.cursosService = cursosService;
    }
    async createCurso(cursoData) {
        return this.cursosService.createCurso(cursoData);
    }
    async getCursos() {
        return this.cursosService.getCursos();
    }
    async getCurso(id) {
        return this.cursosService.getCurso(id);
    }
    async updateCurso(id, cursoData) {
        return this.cursosService.updateCurso(id, cursoData);
    }
    async deleteCurso(id) {
        return this.cursosService.deleteCurso(id);
    }
    addTemaToCurso(cursoId, temaId) {
        return this.cursosService.addTemaToCurso(cursoId, temaId);
    }
    findTemasByCurso(id) {
        return this.cursosService.findTemasByCurso(id);
    }
};
exports.CursosController = CursosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [curso_model_1.Curso]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "createCurso", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "getCursos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "getCurso", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, curso_model_1.Curso]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "updateCurso", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "deleteCurso", null);
__decorate([
    (0, common_1.Post)(':cursoId/temas/:temaId'),
    __param(0, (0, common_1.Param)('cursoId')),
    __param(1, (0, common_1.Param)('temaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CursosController.prototype, "addTemaToCurso", null);
__decorate([
    (0, common_1.Get)(':id/temas'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CursosController.prototype, "findTemasByCurso", null);
exports.CursosController = CursosController = __decorate([
    (0, common_1.Controller)('cursos'),
    __metadata("design:paramtypes", [cursos_service_1.CursosService])
], CursosController);
//# sourceMappingURL=cursos.controller.js.map