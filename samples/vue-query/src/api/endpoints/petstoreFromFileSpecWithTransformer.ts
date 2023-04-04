/**
 * Generated by orval v6.13.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/vue-query';
import type {
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  QueryKey,
  UseQueryReturnType,
  UseInfiniteQueryReturnType,
} from '@tanstack/vue-query';
import type {
  Pets,
  Error,
  ListPetsParams,
  Pet,
  CreatePetsBody,
} from '../model';
import { customInstance } from '../mutator/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const listPets = (
  params?: ListPetsParams,
  version = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pets>({
    url: `/v${version}/pets`,
    method: 'get',
    params,
    signal,
  });
};

export const getListPetsQueryKey = (params?: ListPetsParams, version = 1) =>
  [`/v${version}/pets`, ...(params ? [params] : [])] as const;

export type ListPetsInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsInfiniteQueryError = Error;

export const useListPetsInfinite = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
    pageParam,
  }) => listPets({ limit: pageParam, ...params }, version, signal);

  const query = useInfiniteQuery<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData
  >({
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  }) as UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = Error;

export const useListPets = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, version, signal);

  const query = useQuery<Awaited<ReturnType<typeof listPets>>, TError, TData>({
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  }) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

/**
 * @summary Create a pet
 */
export const createPets = (createPetsBody: CreatePetsBody, version = 1) => {
  return customInstance<Pet>({
    url: `/v${version}/pets`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
  });
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = Error;

export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody; version?: number }
  > = (props) => {
    const { data, version } = props ?? {};

    return createPets(data, version);
  };

  return useMutation<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >(mutationFn, mutationOptions);
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = (
  petId: string,
  version = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pet>({
    url: `/v${version}/pets/${petId}`,
    method: 'get',
    signal,
  });
};

export const getShowPetByIdQueryKey = (petId: string, version = 1) =>
  [`/v${version}/pets/${petId}`] as const;

export type ShowPetByIdInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdInfiniteQueryError = Error;

export const useShowPetByIdInfinite = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, version, signal);

  const query = useInfiniteQuery<
    Awaited<ReturnType<typeof showPetById>>,
    TError,
    TData
  >({
    queryKey,
    queryFn,
    enabled: !!(version && petId),
    ...queryOptions,
  }) as UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

export const useShowPetById = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, version, signal);

  const query = useQuery<
    Awaited<ReturnType<typeof showPetById>>,
    TError,
    TData
  >({
    queryKey,
    queryFn,
    enabled: !!(version && petId),
    ...queryOptions,
  }) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};
