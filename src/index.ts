/**
 * @module index
 * @description Entry point for the shared module
 * @created 2024-04-01
 * @author <gajanand742@gmail.com>
 */


// Database Connection
export { DatabaseModule } from './database/index';

// User Module
export * from './database/entities/user.entity';
export * from './database/dto/user.dto';
export * from './database/services/user.service';
