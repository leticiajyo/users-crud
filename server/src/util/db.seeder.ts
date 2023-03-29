import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class DbSeeder {
  userRepository: Repository<User>;

  constructor(
    @InjectEntityManager()
    private entityManager: EntityManager,
  ) {
    this.userRepository = this.entityManager.getRepository('users');
  }

  async setUp() {
    await this.userRepository.clear();
    await this.userRepository.save([
      {
        name: 'Radowski',
        firstName: 'Sebastian',
        phone: '+4915158223840',
        street: 'Nobelstarße 26',
        city: 'Ingolstadt',
        postalCode: '85051',
        country: 'Germany',
        birthday: '2004-01-21',
        gender: 'Male',
        nationality: 'German',
      },
      {
        name: 'Merkel',
        firstName: 'Angela',
        phone: '+4915158223981',
        street: 'Platz der Republik 1',
        city: 'Berlin',
        postalCode: '11011',
        country: 'Germany',
        birthday: '1954-07-15',
        gender: 'Female',
        nationality: 'German',
      },
      {
        name: 'Schröder',
        firstName: 'Gerhard',
        phone: '+4915258423981',
        street: 'Platz der Republik 1',
        city: 'Berlin',
        postalCode: '11011',
        country: 'Germany',
        birthday: '1944-04-07',
        gender: 'Male',
        nationality: 'German',
      },
      {
        name: 'Söder',
        firstName: 'Markus',
        phone: '+4991124154418',
        street: 'Jakobstraße 46',
        city: 'Nürnberg',
        postalCode: '90402',
        country: 'Germany',
        birthday: '1967-01-05',
        gender: 'Male',
        nationality: 'German',
      },
      {
        name: 'Annalena',
        firstName: 'Baerbock',
        phone: '+493318871056',
        street: 'Jägerstraße 18',
        city: 'Potsdam',
        postalCode: '14467',
        country: 'Germany',
        birthday: '1980-12-15',
        gender: 'Female',
        nationality: 'German',
      },
      {
        name: 'Lindner',
        firstName: 'Christian',
        phone: '+493028495861',
        street: 'Reinhardtstr. 14',
        city: 'Berlin',
        postalCode: '10117',
        country: 'Germany',
        birthday: '1979-01-07',
        gender: 'Male',
        nationality: 'German',
      },
      {
        name: 'Kaczynski',
        firstName: 'Jaroslaw',
        phone: '+493028495861',
        street: 'Al. Jerozolimskie 125/127',
        city: 'Warszawa',
        postalCode: '02017',
        country: 'Poland',
        birthday: '1949-06-18',
        gender: 'Male',
        nationality: 'Polish',
      },
      {
        name: 'Kaczynski',
        firstName: 'Jaroslaw',
        phone: '+48226229155',
        street: 'Al. Jerozolimskie 125/127',
        city: 'Warszawa',
        postalCode: '02017',
        country: 'Poland',
        birthday: '1949-06-18',
        gender: 'Male',
        nationality: 'Polish',
      },
      {
        name: 'Scholz',
        firstName: 'Olaf',
        phone: '+4903025991500',
        street: 'Wilhelmstr. 141',
        city: 'Berlin',
        postalCode: '10963',
        country: 'Germany',
        birthday: '1958-06-14',
        gender: 'Male',
        nationality: 'German',
      },
      {
        name: 'Szydlo',
        firstName: 'Beata',
        phone: '+48510146446',
        street: 'ul. Górnickiego 1',
        city: 'Oświęcim',
        postalCode: '32600',
        country: 'Poland',
        birthday: '1963-04-15',
        gender: 'Female',
        nationality: 'Polish',
      },
    ]);
  }
}
