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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
let CarsController = class CarsController {
    findAll(request) {
        return [{ make: 'honda', model: 'accord' },
            { make: 'subaru', model: 'outback' },
            { make: 'fiat', model: '123 spider' }];
    }
    findOne(request) {
        return { id: 25, make: 'tesla', model: 'model x' };
    }
    async create(carParams) {
        return `Creating ${carParams.make}`;
    }
    async update(carParams, params) {
        return `Updating ${carParams.make} with id: ${params.id}`;
    }
    async delete(params) {
        return `Deleting id: ${params.id}`;
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], CarsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], CarsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "create", null);
__decorate([
    common_1.Post(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "update", null);
__decorate([
    common_1.Post(':id/delete'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "delete", null);
CarsController = __decorate([
    common_1.Controller('cars')
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map