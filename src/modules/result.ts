interface Success<T> {
  status: 'success';
  value: T;
}

interface Failed<E> {
  status: 'failed';
  error: E;
}

interface Indefinite {
  status: 'indefinite';
}

type Result<T, E> = Success<T> | Failed<E> | Indefinite;

function Success<T>(value: T): Success<T> {
  return {
    status: 'success',
    value,
  };
}

function Failed<E>(error: E): Failed<E> {
  return {
    status: 'failed',
    error,
  };
}

function Indefinite(): Indefinite {
  return {
    status: 'indefinite',
  };
}

export { Success, Failed, Indefinite, type Result };
