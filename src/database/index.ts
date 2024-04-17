import { DataSource, EntityTarget, Repository } from 'typeorm';
import { dirname } from 'path';
import { IDatabaseConfig } from './interfaces/IDatabaseConfig.interface';

export class DatabaseModule {
  private static dataSource: DataSource;

  static initialize(config: IDatabaseConfig) {
    if (this.dataSource) {
      return;
    }

    this.dataSource = new DataSource({
      type: config.type,
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      entities: [dirname(__dirname) + '/database/entities/*.entity.js'],
      synchronize: true, // Caution in production!
    });

    this.dataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!")
      })
      .catch((err) => {
        console.error("Error during Data Source initialization:", err);
        throw err;
      });
  }

  static getDataSource(): DataSource {
    if (!this.dataSource) {
      throw new Error('DataSource has not been initialized. Please call DatabaseModule.initialize() first.');
    }
    return this.dataSource;
  }

  static getRepository<T>(entity: EntityTarget<T>): Repository<T> {
    return this.getDataSource().getRepository(entity);
  }
}
