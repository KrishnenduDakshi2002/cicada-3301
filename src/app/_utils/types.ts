type ObjectValue<T> = T[keyof T];

export const StatusCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  SERVICE_UNAVAILABLE: 503,
} as const;

export const ResponseToken = {
  AUTH_TOKEN: 'authToken',
  TEAM_ID: 'teamId',
};

export const GameStatus = {
  NOT_STARTED: 'not_started',
  STARTED: 'started',
  ENDED: 'ended',
};

type StatusCodeType = ObjectValue<typeof StatusCode>;
