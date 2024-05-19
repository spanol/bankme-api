// Failure
export class Left<L, R> {
  private readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  public isLeft(): this is Left<L, R> {
    return true;
  }

  public isRight(): this is Left<L, R> {
    return false;
  }

  join() {
    if (this.value instanceof Left || this.value instanceof Right) {
      return this.value;
    }
    return this;
  }

  public toString() {
    return `-> Left ${this.value}`;
  }
}

// Success
export class Right<L, R> {
  private readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  public isLeft(): this is Right<L, R> {
    return false;
  }

  public isRight(): this is Right<L, R> {
    return true;
  }

  join() {
    if (this.value instanceof Left || this.value instanceof Right) {
      return this.value;
    }
    return this;
  }

  public toString() {
    return `-> Right ${this.value}`;
  }
}

export type Either<L, R> = Left<L, R> | Right<L, R>;

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value);
};

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value);
};
