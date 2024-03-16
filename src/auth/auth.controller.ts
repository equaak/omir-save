import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCustomerDto } from "src/customers/Dto/create.customer.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body() customerDto: CreateCustomerDto) {
    return this.authService.login(customerDto);
  }

  @Post("/registration")
  async registration(@Body() customerDto: CreateCustomerDto) {
    return this.authService.registration(customerDto);
  }
}