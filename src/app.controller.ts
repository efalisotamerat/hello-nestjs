import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('users')
@ApiTags('Users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ description: 'List of users' })
  getUsers(@Res() res: Response): void {
    const users = this.appService.getUsers();
    res.send(users).status(200);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiOkResponse({ description: 'User retrieved with ID' })
  create(@Param('id') id: number, @Res() res: Response): void {
    console.log('Searching for user with ID:', id);
    const user = this.appService.getById(id);

    if (!user) {
      res.status(404).send({ message: 'User not found' });
      return;
    }

    res.send(this.appService.getById(id)).status(200);
  }
}
