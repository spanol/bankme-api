export abstract class GenericRepository<T> {
  abstract create(item: T): Promise<void>;
  abstract save(item: T): Promise<void>;
  abstract findById(itemId: string): Promise<T | null>;
}
