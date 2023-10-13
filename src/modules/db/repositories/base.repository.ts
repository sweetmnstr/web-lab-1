import { Model, Document } from 'mongoose';

export abstract class BaseRepository<T extends Document> {
  constructor(protected readonly model: Model<T>) {}

  public async create(data: Partial<T>): Promise<T> {
    const newItem = new this.model(data);
    return await newItem.save();
  }

  public async findById(id: string): Promise<T | null> {
    return await this.model.findById(id).exec();
  }

  public async findOne(query: object): Promise<T | null> {
    return await this.model.findOne(query).exec();
  }

  public async find(query: object = {}): Promise<T[]> {
    return await this.model.find(query).exec();
  }

  public async updateById(id: string, data: Partial<T>): Promise<T | null> {
    return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  public async deleteById(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  public async count(): Promise<number> {
    return await this.model.countDocuments().exec();
  }

  public async findAndCount(
    query: object = {},
  ): Promise<{ count: number; data: T[] }> {
    const count = await this.model.countDocuments(query).exec();
    const data = await this.model.find(query).exec();
    return { count, data };
  }
}
