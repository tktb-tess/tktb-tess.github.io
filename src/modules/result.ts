interface Success<T> {
  status: 'success';
  value: T;
}

interface Failed<E> {
  status: 'failed';
  error: E;
}

interface Unidentified {
  status: 'unidentified';
}

type Result<T, E> = Success<T> | Failed<E> | Unidentified;

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

function Unidentified(): Unidentified {
  return {
    status: 'unidentified',
  };
}

export { Success, Failed, Unidentified };
export type { Result };
