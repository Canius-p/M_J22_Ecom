import {
  Sequelize,
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  modelName: 'User',
  timestamps: true,
})
class User extends Model {
  @Column({
    PrimaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;
}