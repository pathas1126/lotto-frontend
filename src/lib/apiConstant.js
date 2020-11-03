import Enum from 'enum';

// API 베이스
export const BASE_URL = 'http://localhost:8080/api';

// API 요청 메서드 ENUM
export const methodEnum = new Enum(
	{GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE'},
	{freeze: true},
);

export const statusEnum = new Enum(
	{SUCCESS: 'SUCCESS', FAIL: 'FAIL'},
	{freeze: true},
);

// 로또 관련 API 상수
export const WINNING_GAME_URL = '/lotto/game/winning';
export const RANDOM_GAME_URL = '/lotto/game/random';
export const RANDOM_GAMES_URL = '/lotto/games/random';
