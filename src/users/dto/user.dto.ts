import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly password: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  readonly username?: string;

  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  readonly password?: string;
}

export class UserPresentationDto {
  @ApiModelProperty()
  id: string;

  @ApiModelProperty()
  username: string;

  @ApiModelProperty()
  password: string;

  @ApiModelProperty()
  isDeleted: boolean;
}
