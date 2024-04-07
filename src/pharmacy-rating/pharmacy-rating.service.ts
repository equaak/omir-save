import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreatePharmRatingDto } from "./Dto/create-pharmacy-rating.dto";
import { InjectModel } from "@nestjs/sequelize";
import { PharmacyRating } from "./pharmacy-rating.model";

@Injectable()
export class PharmacyRatingService {
  constructor(
    @InjectModel(PharmacyRating)
<<<<<<< HEAD
    private ratingRepository: typeof PharmacyRating
=======
    private ratingRepository: typeof PharmacyRating,
    // private customerService: CustomersService
>>>>>>> cb8f1a4694af39c98dd55a6a751fdf5cba516c55
  ) {}
  async createRating(dto: CreatePharmRatingDto) {
    const rating = await this.ratingRepository.findOne({
      where: { pharmacyId: dto.pharmacyId, userIIN: dto.userIIN },
    });

    if (rating) {
      throw new HttpException(
        "Пользователь уже оставлял рейтинг",
        HttpStatus.BAD_REQUEST
      );
    }

    const rate = await this.ratingRepository.create(dto);
    return rate;
  }

  async getAllRatingOfPharm(id: number) {
    const users = await this.ratingRepository.findAll({
      where: { pharmacyId: id },
    });
    return users;
  }

  async getAllRating() {
    const users = await this.ratingRepository.findAll();
    return users;
  }
}
