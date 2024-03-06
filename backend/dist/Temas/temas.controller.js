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
exports.TemasController = void 0;
const common_1 = require("@nestjs/common");
const temas_service_1 = require("./temas.service");
const temas_model_1 = require("./temas.model");
let TemasController = class TemasController {
    constructor(TemasService) {
        this.TemasService = TemasService;
    }
    async createTema(TemaData) {
        return this.TemasService.createTema(TemaData);
    }
    async getTemas() {
        return this.TemasService.getTemas();
    }
    async getTema(id) {
        return this.TemasService.getTema(id);
    }
    async updateTema(id, TemaData) {
        return this.TemasService.updateTema(id, TemaData);
    }
    async deleteTema(id) {
        return this.TemasService.deleteTema(id);
    }
};
exports.TemasController = TemasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [temas_model_1.Tema]),
    __metadata("design:returntype", Promise)
], TemasController.prototype, "createTema", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TemasController.prototype, "getTemas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TemasController.prototype, "getTema", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, temas_model_1.Tema]),
    __metadata("design:returntype", Promise)
], TemasController.prototype, "updateTema", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TemasController.prototype, "deleteTema", null);
exports.TemasController = TemasController = __decorate([
    (0, common_1.Controller)('Temas'),
    __metadata("design:paramtypes", [temas_service_1.TemasService])
], TemasController);
//# sourceMappingURL=temas.controller.js.map